import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setDoc, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db, storage } from '../../firebase-config';
import InnerPageFrame from '../common/InnerPageFrame';
import { MDBCol, MDBRow } from 'mdbreact';
import { Link, useHistory } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

let newDate = new Date();
let dateToday = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let hours = newDate.getHours();
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
month = month < 10 ? '0' + month : month;
dateToday = dateToday < 10 ? '0' + dateToday : dateToday;

const adminUID = process.env.REACT_APP_ADMIN_UID;

export default function NoticeAdd() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(`${year}-${month}-${dateToday}`);
  const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`);
  const [author, setAuthor] = useState('');

  const [currUserUID, setCurrUserUID] = useState('');

  const auth = getAuth();
  const history = useHistory();

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

  const toTimestamp = (strDate) => {
    var datum = Date.parse(strDate);
    return datum;
  };

  const b64toBlob = (dataURI) => {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  };

  const uploadImage = async (imageBlob, folderUUID) => {
    const fileUUID = v4();
    const imagePath = `notice/${folderUUID}/${fileUUID}`;
    const imageRef = ref(storage, imagePath);
    const response = await uploadBytes(imageRef, imageBlob);
    const imageURL = await getDownloadURL(response.ref);
    return { imageURL };
  };

  const handleSubmit = async () => {
    if (!author || !date || !time || !title | !content) {
      alert('Please Fill all field');
      return false;
    }

    const newContent = content.slice();
    const htmlObject = document.createElement('div');
    htmlObject.innerHTML = newContent;

    const docUUID = v4();
    const imgs = [...htmlObject.querySelectorAll('img')];
    const imageUploadsPromise = imgs.map(async (img) => {
      if (img.src.startsWith('data')) {
        const imageBlob = b64toBlob(img.src);
        const { imageURL } = await uploadImage(imageBlob, docUUID);
        img.src = imageURL;
      } else if (img.src.startsWith('http')) {
        // 외부 이미지일 경우 pass
      } else {
        // pass
      }
      img.style.width = '100%';
    });

    await Promise.all(imageUploadsPromise);

    const timestamp =
      currUserUID === adminUID ? toTimestamp(`${date} ${time}`) : Date.now();

    setDoc(doc(db, 'notice', docUUID), {
      title: title,
      content: htmlObject.outerHTML,
      author: author,
      authorID: currUserUID,
      timestamp: timestamp,
    })
      .then(() => {
        alert('Saved Successfully');
        history.push('/notice');
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrUserUID(uid);
        if (uid === adminUID) {
          setAuthor('admin');
        } else {
          setAuthor(user.email.split('@')[0]);
        }
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
          <MDBCol size="8">
            <div className="h2 py-2">Notice</div>
          </MDBCol>
          <MDBCol size="4">
            <div className="py-2 mt-2" style={{ textAlign: 'right' }}>
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
              {currUserUID === adminUID && (
                <div className="mb-4" style={{ textAlign: 'right' }}>
                  <input
                    value={author}
                    onChange={(e) => {
                      setAuthor(e.target.value);
                    }}
                    placeholder="Author"
                    className="mr-2"
                    style={{ width: '85px' }}
                  />
                  <input
                    type="date"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    defaultValue={`${year}-${month}-${dateToday}`}
                    style={{ textAlign: 'center', width: '130px' }}
                    className="mr-2"
                  />
                  <input
                    type="time"
                    step="1"
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                    defaultValue={`${hours}:${minutes}:${seconds}`}
                    style={{ textAlign: 'center' }}
                  />
                </div>
              )}
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
