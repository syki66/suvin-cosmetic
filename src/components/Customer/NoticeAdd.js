import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ' ../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase-config';
import InnerPageFrame from '../common/InnerPageFrame';
import { MDBCol, MDBRow } from 'mdbreact';
import { Link } from 'react-router-dom';

let newDate = new Date();
let dateToday = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

export default function NoticeAdd() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(
    `${year}-${month < 10 ? `0${month}` : `${month}`}-${dateToday}`
  );
  const [author, setAuthor] = useState('');

  const auth = getAuth();

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['link', 'image'],

      ['clean'], // remove formatting button
    ],
  };

  const handleSubmit = () => {
    addDoc(collection(db, 'notice'), {
      title: title,
      content: content,
      date: date,
      author: 'admin',
    })
      .then(() => {
        alert('success');
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setAuthor(user.email.split('@')[0]);
      } else {
        console.log('로그아웃 상태');
      }
    });
  }, []);

  return (
    <>
      <InnerPageFrame
        title="Customer"
        subtitle={['Notice', 'Comments']}
        pickedIndex={0}
      >
        <MDBRow>
          <MDBCol size="7">
            <div className="h2 py-2">Notice</div>
          </MDBCol>
          <MDBCol size="5">
            <div className="py-2 mt-2" style={{ textAlign: 'right' }}>
              <input
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                defaultValue={`${year}-${
                  month < 10 ? `0${month}` : `${month}`
                }-${dateToday}`}
                style={{ textAlign: 'center' }}
                className="mb-4 mr-4"
              />
              <Link
                to="/notice"
                className="border border-light p-1 p-lg-2"
                style={{
                  backgroundColor: '#e5ecef',
                  color: 'black',
                }}
              >
                List
              </Link>
              <Link
                to="/notice"
                className="border border-light p-1 p-lg-2 ml-3"
                style={{
                  backgroundColor: '#e5ecef',
                  color: 'black',
                }}
                onClick={handleSubmit}
              >
                Done
              </Link>
            </div>
          </MDBCol>
        </MDBRow>

        <div className="border-top border-light pt-5">
          <div
            className="border-bottom border-light pb-3 mb-2"
            style={{ color: 'gray' }}
          >
            <div
              style={{ width: '100%', height: '800px', textAlign: 'center' }}
            >
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Title"
                style={{ width: '100%' }}
                className="mb-4"
              />
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                placeholder="Write content"
                modules={modules}
                style={{ width: '100%', height: '650px' }}
              />
            </div>
          </div>
        </div>
      </InnerPageFrame>
    </>
  );
}
