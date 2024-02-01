import React, { useEffect, useState } from 'react';
import InnerPageFrame from '../common/InnerPageFrame';
import { MDBCol, MDBRow } from 'mdbreact';
import { Link, useLocation } from 'react-router-dom';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../../firebase-config';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

export default function NoticeView({}) {
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const auth = getAuth();

  const [data, setData] = useState();
  const [newComment, setNewComment] = useState('');
  const [currAuthor, setCurrAuthor] = useState();
  const [commentList, setCommentList] = useState();

  const getNotice = async () => {
    const docRef = doc(db, 'notice', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let newDate = new Date(docSnap.data().timestamp);
      let dateToday = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      let hours = newDate.getHours();
      let minutes = newDate.getMinutes();
      let seconds = newDate.getSeconds();
      let AM_PM = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      month = month < 10 ? '0' + month : month;
      dateToday = dateToday < 10 ? '0' + dateToday : dateToday;
      const date = `${year}-${month}-${dateToday} ${hours}:${minutes}:${seconds} ${AM_PM}`;

      setData({
        ...docSnap.data(),
        date: date,
      });
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  const handleAddComment = () => {
    addDoc(collection(db, 'notice', id, 'comments'), {
      author: currAuthor,
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
      <div style={{ textAlign: 'right' }}>
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
        <div>
          {comment.author}, {comment.timestamp}, {comment.content}
        </div>
      ))}
    </InnerPageFrame>
  );
}
