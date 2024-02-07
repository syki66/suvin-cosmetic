import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';

import InnerPageFrame from '../common/InnerPageFrame';

import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory, useParams } from 'react-router-dom';

export default function Notice() {
  const params = useParams();

  const [posts, setPosts] = useState([]);
  const [authorID, setAuthorID] = useState('');

  const [allPost, setAllpost] = useState([]);
  const [postPerPage] = useState(10);
  const [currPage, setCurrPage] = useState(params.id);
  const [pagenationLength] = useState(10);
  const [pagenationArray, setPagenationArray] = useState([]);
  const [lastPaginationNumber, setLastPaginationNumber] = useState();

  const auth = getAuth();
  const history = useHistory();

  const getNoticeList = async () => {
    const q =
      authorID === process.env.REACT_APP_ADMIN_UID
        ? query(collection(db, 'notice'), orderBy('timestamp', 'desc'))
        : query(
            collection(db, 'notice'),
            where('isPrivate', '==', false),
            orderBy('timestamp', 'desc')
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
    setAllpost(_posts);
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  useEffect(() => {
    getNoticeList();
  }, [authorID]);

  useEffect(() => {
    const currentPage = currPage - 1;
    const lastPageNum = Math.ceil(allPost.length / postPerPage);
    const startPageNum = currentPage - (currentPage % pagenationLength) + 1;
    const pagenationArray = [];
    for (let i = startPageNum; i < startPageNum + pagenationLength; i++) {
      if (i <= lastPageNum) {
        pagenationArray.push(i);
      }
    }
    setLastPaginationNumber(lastPageNum);
    setPagenationArray(pagenationArray);
    setPosts(
      allPost.slice(
        currentPage * postPerPage,
        currentPage * postPerPage + postPerPage
      )
    );
  }, [allPost, currPage]);

  useEffect(() => {
    setCurrPage(params.id);
    localStorage.setItem('noticeLastPage', params.id);
  }, [params]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthorID(user.uid);
      } else {
        console.log('로그아웃 상태');
      }
    });
  }, []);

  return (
    <>
      <InnerPageFrame title="Customer" subtitle={['Notice', 'Comments']}>
        <MDBRow>
          <MDBCol size="9">
            <div className="h2 py-2">Notice</div>
          </MDBCol>
          <MDBCol size="3">
            <div className="py-2 mt-2" style={{ textAlign: 'right' }}>
              {authorID === process.env.REACT_APP_ADMIN_UID && (
                <Link
                  onClick={() => {
                    if (authorID) {
                      history.push('/notice/new');
                    } else {
                      alert('Login is required');
                      history.push('/login');
                      return false;
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
          <MDBRow
            className="border-bottom border-top border-light py-2 mx-1 font-weight-bold"
            style={{
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#e5ecef',
            }}
          >
            <MDBCol size="8" lg="9">
              <MDBRow>
                <MDBCol
                  size="2"
                  lg="1"
                  className="p-0 pl-1 notice-lg-center"
                  style={{ textAlign: 'left' }}
                >
                  No.
                </MDBCol>
                <MDBCol
                  size="10"
                  lg="11"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Title
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol size="4" lg="3">
              <MDBRow>
                <MDBCol
                  size="8"
                  lg="5"
                  className="px-0 notice-lg-right"
                  style={{ textAlign: 'right' }}
                >
                  Author
                </MDBCol>
                <MDBCol
                  size="4"
                  lg="7"
                  className="px-0 pr-1 pr-lg-2 pr-xl-0 notice-lg-center"
                  style={{ textAlign: 'right' }}
                >
                  Date
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>

          {posts.map((post, index) => {
            let newDate = new Date(post.timestamp);
            let dateToday = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            month = month < 10 ? '0' + month : month;
            dateToday = dateToday < 10 ? '0' + dateToday : dateToday;
            return (
              <div key={post.id}>
                <MDBRow
                  className="border-bottom border-light py-2 mx-1"
                  style={{
                    color: 'gray',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <MDBCol size="9">
                    <MDBRow>
                      <MDBCol
                        size="1"
                        className="p-0"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {allPost.length -
                          currPage * postPerPage +
                          (postPerPage - index)}
                      </MDBCol>

                      <MDBCol
                        size="11"
                        className="font-weight-bolder notice__title"
                        style={{
                          color: 'black',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        <Link
                          to={{
                            pathname: `/notice/${post.id}`,
                          }}
                          style={{ color: 'black' }}
                        >
                          {post.isPrivate ? '🔒︎' : ''}&nbsp;{post.title}
                        </Link>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>

                  <MDBCol size="3">
                    <MDBRow>
                      <MDBCol
                        size="12"
                        lg="5"
                        className="px-0 notice-lg-right"
                        style={{ textAlign: 'right' }}
                      >
                        {post.author}
                      </MDBCol>
                      <MDBCol
                        size="12"
                        lg="7"
                        className="px-0 pl-lg-2 pl-xl-4 notice-lg-right"
                        style={{ textAlign: 'right' }}
                      >
                        {`${year}-${month}-${dateToday}`}
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </div>
            );
          })}

          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center pagination-circle mt-3">
              {pagenationArray[0] !== 1 && (
                <li class="page-item">
                  <Link
                    class="page-link"
                    to={`/notice/page/${pagenationArray[0] - 1}`}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
              )}
              {pagenationArray.map((e) => (
                <li
                  class={`page-item ${e === Number(params.id) ? 'active' : ''}`}
                >
                  <Link class="page-link" to={`/notice/page/${e}`}>
                    {e}
                  </Link>
                </li>
              ))}
              {[...pagenationArray].pop() < lastPaginationNumber && (
                <li class="page-item">
                  <Link
                    class="page-link"
                    to={`/notice/page/${[...pagenationArray].pop() + 1}`}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </InnerPageFrame>
    </>
  );
}
