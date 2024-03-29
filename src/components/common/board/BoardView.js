import React, { useEffect, useState } from 'react';
import InnerPageFrame from '../../common/InnerPageFrame';
import { MDBCol, MDBRow } from 'mdbreact';
import { Link, useParams } from 'react-router-dom';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { db, storage } from '../../../firebase-config';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { deleteObject, getDownloadURL, listAll, ref } from 'firebase/storage';

const adminUID = process.env.REACT_APP_ADMIN_UID;

export default function BoardView({
  collectionName,
  menuTitle,
  menuTitleList,
  mainTitle,
}) {
  const params = useParams();
  const id = params.id;
  const auth = getAuth();
  const history = useHistory();

  const [data, setData] = useState();
  const [newComment, setNewComment] = useState('');
  const [currAuthor, setCurrAuthor] = useState();
  const [authorID, setAuthorID] = useState('');
  const [commentList, setCommentList] = useState();
  const [emailVerified, setEmailVerified] = useState(false);

  const [currUserUID, setCurrUserUID] = useState('');

  const timestampToDate = (timestamp) => {
    let newDate = new Date(timestamp);
    let dateToday = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let AM_PM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    month = month < 10 ? '0' + month : month;
    dateToday = dateToday < 10 ? '0' + dateToday : dateToday;
    const contentDate = `${year}-${month}-${dateToday} ${hours}:${minutes} ${AM_PM}`;
    const commentDate = `${year}/${month}/${dateToday} ${hours}:${minutes} ${AM_PM}`;
    return { contentDate, commentDate };
  };

  const getBoard = async () => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { contentDate } = timestampToDate(docSnap.data().timestamp);
      setData({
        ...docSnap.data(),
        date: contentDate,
      });
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  const handleAddComment = () => {
    if (!authorID) {
      alert('Login is required');
      history.push('/login');
      return false;
    }

    if (!emailVerified) {
      alert(
        'Email verification is required.\nYou can resend the email from the menu at the top right.\n\nPage Refresh is required after Verification'
      );
      return false;
    }

    if (newComment === '') {
      alert('Please write a comment');
      return false;
    }

    addDoc(collection(db, collectionName, id, 'comments'), {
      author: currAuthor,
      authorID: authorID,
      timestamp: Date.now(),
      content: newComment,
    })
      .then(() => {
        setNewComment('');
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleBoardDelete = async () => {
    if (!window.confirm('Are you sure you want to delete your content?')) {
      return false;
    }

    try {
      if (currUserUID === adminUID) {
        const imagesInfo = await uploadedImagesInfo();
        await handleImagesDelete(imagesInfo);
      }
      const comments = await getDocs(
        collection(db, collectionName, id, 'comments')
      );
      comments.forEach(async (comment) => {
        await deleteDoc(doc(db, collectionName, id, 'comments', comment.id));
      });
      await deleteDoc(doc(db, collectionName, id));
      alert('Successfully Deleted');
      history.push(`/${collectionName}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    if (!window.confirm('Are you sure you want to delete your comment?')) {
      return false;
    }

    try {
      await deleteDoc(doc(db, collectionName, id, 'comments', commentId));
    } catch (error) {
      alert(error);
    }
  };

  const uploadedImagesInfo = async () => {
    const storageRef = ref(storage, `${collectionName}/${id}`);
    const result = await listAll(storageRef);
    const fileList = await Promise.all(
      result.items.map(async (item) => {
        const downloadURL = await getDownloadURL(item);
        return {
          name: item.name,
          fullPath: item.fullPath,
          downloadURL: downloadURL,
        };
      })
    );
    return fileList;
  };

  const handleImagesDelete = async (imageArray) => {
    imageArray.forEach(async (image) => {
      await deleteObject(ref(storage, image.fullPath));
    });
  };

  useEffect(() => {
    const q = query(
      collection(db, collectionName, id, 'comments'),
      orderBy('timestamp', 'desc')
    );
    onSnapshot(q, (snapshot) => {
      setCommentList(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            author: doc.data().author,
            content: doc.data().content,
            timestamp: doc.data().timestamp,
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    getBoard();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken(true);
        setCurrAuthor(user.email.split('@')[0]);
        setAuthorID(user.uid);
        setCurrUserUID(user.uid);
        setEmailVerified(user.emailVerified);
      } else {
        console.log('로그아웃 상태');
      }
    });
  }, []);

  return (
    <InnerPageFrame title={menuTitle} subtitle={menuTitleList}>
      <div className="h2 py-2">{mainTitle}</div>

      <div className="border-top border-light py-5">
        <div className="h5" style={{ wordWrap: 'break-word' }}>
          {data?.isPrivate ? '🔒︎' : ''}
          {data?.title}
        </div>
        <div
          className="border-bottom border-light pb-3 mb-5"
          style={{ color: 'gray' }}
        >
          <MDBRow>
            <MDBCol size="12" md="7">
              {['premium', 'special', 'others'].includes(collectionName) ? (
                <>
                  {data?.subTitle} &nbsp;&nbsp;&nbsp;&nbsp; {data?.price}
                </>
              ) : (
                <>
                  Author : {data?.author} &nbsp;&nbsp;&nbsp;&nbsp; {data?.date}
                </>
              )}
            </MDBCol>
            <MDBCol
              size="12"
              md="5"
              className="mt-3 mt-md-0"
              style={{ textAlign: 'right' }}
            >
              {data &&
                (data.author === currAuthor || authorID === adminUID) && (
                  <>
                    <Link
                      className="border border-light p-1 p-lg-2 mr-2 btn-click"
                      style={{ backgroundColor: '#e5ecef', color: 'black' }}
                      onClick={() =>
                        history.push(`/${collectionName}/edit/${id}`)
                      }
                    >
                      Edit
                    </Link>
                    <Link
                      className="border border-light p-1 p-lg-2 mr-2 btn-click"
                      style={{ backgroundColor: '#e5ecef', color: 'black' }}
                      onClick={() => handleBoardDelete()}
                    >
                      Delete
                    </Link>
                  </>
                )}
              <Link
                to={`/${collectionName}/page/${localStorage.getItem(
                  `${collectionName}LastPage`
                )}`}
                className="border border-light p-1 p-lg-2 btn-click"
                style={{ backgroundColor: '#e5ecef', color: 'black' }}
              >
                List
              </Link>
            </MDBCol>
          </MDBRow>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data?.content }}
          style={{ width: '100%', wordWrap: 'break-word' }}
        />
      </div>
      <div className="border-top border-light pt-5 pb-3">
        Commment {commentList?.length}
      </div>
      <textarea
        className="w-100 mb-3"
        placeholder="Write a comment"
        rows="5"
        style={{ resize: 'none' }}
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
        maxLength={1000}
      />
      <div className="pb-5" style={{ textAlign: 'right' }}>
        <Link
          className="border border-light p-1 p-lg-2 btn-click"
          style={{
            backgroundColor: '#e5ecef',
            color: 'black',
          }}
          onClick={handleAddComment}
        >
          Add comment
        </Link>
      </div>
      {commentList?.map((comment) => (
        <div key={comment.id} className="border-bottom border-light py-4 mb-2">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 18, fontWeight: 600 }}>
              {comment.author}
            </span>
            <span className="pb-3" style={{ color: 'gray', fontSize: 14 }}>
              {timestampToDate(comment.timestamp).commentDate}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{comment.content}</div>
            {(comment.author === currAuthor || authorID === adminUID) && (
              <Link onClick={() => handleCommentDelete(comment.id)}>❌</Link>
            )}
          </div>
        </div>
      ))}
    </InnerPageFrame>
  );
}
