import React, { useState, useEffect } from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import { Link } from 'react-router-dom';

import { db } from '../../firebase-config';
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

export default function NoticeContact() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getNoticeList = async () => {
      const q = query(
        collection(db, 'notice'),
        where('isPrivate', '==', false),
        orderBy('timestamp', 'desc'),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      const _posts = [];
      querySnapshot.forEach((doc) => {
        _posts.push({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          author: doc.data().author,
          timestamp: doc.data().timestamp,
          isPrivate: doc.data().isPrivate,
        });
      });
      setPosts(_posts);
    };
    getNoticeList();
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol size="12" md="6" className="px-4 px-xl-5 pb-5 pb-md-0">
            <MDBRow>
              <MDBCol lg="12" className="h2 font-weight-bold">
                NOTICE
              </MDBCol>
            </MDBRow>

            {posts.map((post, i) => {
              let newDate = new Date(post.timestamp);
              let dateToday = newDate.getDate();
              let month = newDate.getMonth() + 1;
              let year = newDate.getFullYear();
              month = month < 10 ? '0' + month : month;
              dateToday = dateToday < 10 ? '0' + dateToday : dateToday;
              return (
                <Link to={`/notice/${post.id}`}>
                  <MDBRow
                    style={{ color: 'gray' }}
                    className="home__notice_parent"
                  >
                    <MDBCol size="10">
                      <li className="home__notice" style={{ color: 'black' }}>
                        {post.title}
                      </li>
                    </MDBCol>
                    <MDBCol
                      size="2"
                      className="px-0"
                      style={{ textAlign: 'right', whiteSpace: 'nowrap' }}
                    >
                      {`${year}-${month}-${dateToday}`}
                    </MDBCol>
                  </MDBRow>
                </Link>
              );
            })}
          </MDBCol>

          <MDBCol size="12" md="6" className="px-4 px-md-3">
            <MDBRow>
              <MDBCol size="12" xl="4" className="h2 font-weight-bold">
                CONTACT
              </MDBCol>

              <MDBCol size="12" xl="8">
                <div className="font-weight-bold" style={{ color: '#93375a' }}>
                  <span className="h2 font-weight-bold">1688-9028</span>
                  &nbsp;(Customer Center)
                </div>
                <div>Bussiness hours : 09:00~18:00</div>
                <div>E-mail : dhkkis@daum.net</div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
