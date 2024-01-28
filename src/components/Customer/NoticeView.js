import React, { useEffect, useState } from 'react';
import InnerPageFrame from '../common/InnerPageFrame';
import { MDBCol, MDBRow } from 'mdbreact';
import { Link, useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

export default function NoticeView({}) {
  const location = useLocation();
  const id = location.pathname.split('/').pop();

  const [data, setData] = useState();

  const getNotice = async () => {
    const docRef = doc(db, 'notice', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      setData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
    }
  };
  useEffect(() => {
    getNotice();
  }, []);

  return (
    <InnerPageFrame
      title="Customer"
      subtitle={['Notice', 'Comments']}
      pickedIndex={0}
    >
      <div className="h2 py-2">Notice</div>

      <div className="border-top border-light pt-5">
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
    </InnerPageFrame>
  );
}
