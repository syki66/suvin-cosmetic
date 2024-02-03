import React, { useEffect, useState } from 'react';
import InnerPageFrame from '../common/InnerPageFrame';
import { MDBCol, MDBRow } from 'mdbreact';
import { Link, useLocation } from 'react-router-dom';
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
import { db } from '../../firebase-config';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const adminUID = process.env.REACT_APP_ADMIN_UID;

export default function NoticeView({}) {
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const auth = getAuth();
  const history = useHistory();

  const [data, setData] = useState();
  const [newComment, setNewComment] = useState('');
  const [currAuthor, setCurrAuthor] = useState();
  const [authorID, setAuthorID] = useState('');
  const [commentList, setCommentList] = useState();

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
    const contentDate = `${year}-${month}-${dateToday} ${hours}:${minutes}:${seconds} ${AM_PM}`;
    const commentDate = `${year}/${month}/${dateToday} ${hours}:${minutes} ${AM_PM}`;
    return { contentDate, commentDate };
  };

  const getNotice = async () => {
    const docRef = doc(db, 'notice', id);
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
    addDoc(collection(db, 'notice', id, 'comments'), {
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

  const handleNoticeDelete = async () => {
    try {
      const comments = await getDocs(collection(db, 'notice', id, 'comments'));
      comments.forEach(async (comment) => {
        await deleteDoc(doc(db, 'notice', id, 'comments', comment.id));
      });
      await deleteDoc(doc(db, 'notice', id));
      alert('Successfully Deleted');
      history.push('/notice');
    } catch (error) {
      alert(error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await deleteDoc(doc(db, 'notice', id, 'comments', commentId));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, 'notice', id, 'comments'),
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
    getNotice();
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrAuthor(user.email.split('@')[0]);
        setAuthorID(user.uid);
      } else {
        console.log('로그아웃 상태');
      }
    });
  }, []);

  return (
    <InnerPageFrame
      title="Customer"
      subtitle={['Notice', 'Comments']}
      pickedIndex={0}
    >
      <div className="h2 py-2">Notice</div>

      <div className="border-top border-light py-5">
        <div className="h5">{data?.title}</div>
        <div
          className="border-bottom border-light pb-3 mb-2"
          style={{ color: 'gray' }}
        >
          <MDBRow>
            <MDBCol size="9">
              작성자 : {data?.author} &nbsp;&nbsp;&nbsp;&nbsp; {data?.date}
            </MDBCol>
            <MDBCol size="3" style={{ textAlign: 'right' }}>
              {(data?.author === currAuthor || data?.authorID === adminUID) && (
                <Link
                  className="border border-light p-1 p-lg-2 mr-2"
                  style={{ backgroundColor: '#e5ecef', color: 'black' }}
                  onClick={() => handleNoticeDelete()}
                >
                  삭제
                </Link>
              )}
              <Link
                to={'/notice'}
                className="border border-light p-1 p-lg-2"
                style={{ backgroundColor: '#e5ecef', color: 'black' }}
              >
                목록
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
          className="border border-light p-1 p-lg-2"
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
              <Link
                onClick={() => handleCommentDelete(comment.id)}
                className="border border-light p-1 p-lg-2"
                style={{ backgroundColor: '#e5ecef', color: 'black' }}
              >
                Delete
              </Link>
            )}
          </div>
        </div>
      ))}
    </InnerPageFrame>
  );
}
