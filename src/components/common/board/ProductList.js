import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';

import InnerPageFrame from '../../common/InnerPageFrame';

import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

export default function ProductList({
  collectionName,
  menuTitle,
  menuTitleList,
  mainTitle,
  isAdminPage = true,
}) {
  const [allPost, setAllpost] = useState([]);
  const [authorID, setAuthorID] = useState('');

  const auth = getAuth();
  const history = useHistory();

  const getBoardList = async () => {
    const q =
      authorID === process.env.REACT_APP_ADMIN_UID
        ? query(collection(db, collectionName), orderBy('timestamp', 'desc'))
        : query(
            collection(db, collectionName),
            where('isPrivate', '==', false),
            orderBy('timestamp', 'desc')
          );
    const querySnapshot = await getDocs(q);
    const _posts = [];
    querySnapshot.forEach((doc) => {
      _posts.push({
        id: doc.id,
        title: doc.data().title,
        subTitle: doc.data().subTitle,
        content: doc.data().content,
        author: doc.data().author,
        timestamp: doc.data().timestamp,
        isPrivate: doc.data().isPrivate,
        thumbnail: doc.data().thumbnail,
        price: doc.data().price,
      });
    });
    setAllpost(_posts);
  };

  useEffect(() => {
    getBoardList();
  }, []);

  useEffect(() => {
    getBoardList();
  }, [authorID]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken(true);
        setAuthorID(user.uid);
      } else {
        console.log('로그아웃 상태');
      }
    });
  }, []);

  return (
    <>
      <InnerPageFrame title={menuTitle} subtitle={menuTitleList}>
        <MDBRow>
          <MDBCol size="9">
            <div className="h2 py-2">{mainTitle}</div>
          </MDBCol>
          <MDBCol size="3">
            <div className="py-2 mt-2" style={{ textAlign: 'right' }}>
              {(authorID === process.env.REACT_APP_ADMIN_UID ||
                !isAdminPage) && (
                <Link
                  onClick={() => {
                    if (!authorID) {
                      alert('Login is required');
                      history.push('/login');
                      return false;
                    }

                    if (authorID) {
                      history.push(`/${collectionName}/new`);
                    }
                  }}
                  className="border border-light p-1 p-lg-2 btn-click"
                  style={{
                    backgroundColor: '#e5ecef',
                    color: 'black',
                  }}
                >
                  Write
                </Link>
              )}
            </div>
          </MDBCol>
        </MDBRow>
        <div className="border-top border-light pt-5">
          <MDBRow>
            {allPost.map((post) => {
              return (
                <MDBCol size="6" sm="6" lg="4" xl="3" className="product__box">
                  <Link to={`/${collectionName}/${post.id}`} className="p-3">
                    <div>
                      <div
                        style={{
                          width: '100%',
                          paddingTop: '100%',
                          position: 'relative',
                        }}
                      >
                        <img
                          src={post.thumbnail}
                          style={{
                            position: 'absolute',
                            top: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '8px',
                          }}
                          alt={post.title}
                        />
                      </div>
                      <div className="px-1 py-2" style={{ color: 'black' }}>
                        {post.subTitle && (
                          <div
                            className="pb-1"
                            style={{ fontWeight: '600', fontSize: '12px' }}
                          >
                            {post.subTitle}
                          </div>
                        )}
                        <div
                          className="pb-1"
                          style={{
                            fontWeight: '400',
                            fontSize: '14px',
                            color: 'rgb(100,100,100)',
                          }}
                        >
                          {post.isPrivate ? '🔒︎ ' : ''}
                          {post.title}
                        </div>
                        <div style={{ fontWeight: '600', fontSize: '16px' }}>
                          {post.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                </MDBCol>
              );
            })}
          </MDBRow>
        </div>
      </InnerPageFrame>
    </>
  );
}
