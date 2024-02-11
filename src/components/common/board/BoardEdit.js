import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db, storage } from '../../../firebase-config';
import InnerPageFrame from '../../common/InnerPageFrame';
import { MDBCol, MDBRow } from 'mdbreact';
import { Link, useHistory, useParams } from 'react-router-dom';
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { v4 } from 'uuid';

const adminUID = process.env.REACT_APP_ADMIN_UID;

export default function BoardEdit({
  collectionName,
  menuTitle,
  menuTitleList,
  mainTitle,
}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(``);
  const [time, setTime] = useState(``);
  const [author, setAuthor] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const [currUserUID, setCurrUserUID] = useState('');

  const params = useParams();
  const id = params.id;
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

  const timestampToDate = (timestamp) => {
    let newDate = new Date(timestamp);
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
    const date = `${year}-${month}-${dateToday}`;
    const time = `${hours}:${minutes}:${seconds}`;
    return { date, time };
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
    const imagePath = `${collectionName}/${folderUUID}/${fileUUID}`;
    const imageRef = ref(storage, imagePath);
    const response = await uploadBytes(imageRef, imageBlob);
    const imageURL = await getDownloadURL(response.ref);
    return { imageURL };
  };

  const handlePrivateChange = (event) => {
    setIsPrivate(event.target.value === 'private');
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

  const deleteUnusedImages = async (imageArray) => {
    imageArray.forEach(async (image) => {
      await deleteObject(ref(storage, image.fullPath));
    });
  };

  const handleSubmit = async () => {
    if (!author || !date || !time || !title | !content) {
      alert('Please Fill all field');
      return false;
    }

    const newContent = content.slice();
    const htmlObject = document.createElement('div');
    htmlObject.innerHTML = newContent;

    let oldImagesInfo = await uploadedImagesInfo();

    const imgs = [...htmlObject.querySelectorAll('img')];
    const imageUploadsPromise = imgs.map(async (img) => {
      if (img.src.startsWith('data')) {
        const imageBlob = b64toBlob(img.src);
        const { imageURL } = await uploadImage(imageBlob, id);
        img.src = imageURL;
      } else if (img.src.startsWith('http')) {
        oldImagesInfo = oldImagesInfo.filter((x) => x.downloadURL !== img.src);
      } else {
        // pass
      }
      img.style.width = '100%';
    });

    await Promise.all(imageUploadsPromise);
    await deleteUnusedImages(oldImagesInfo);

    updateDoc(doc(db, collectionName, id), {
      title: title,
      content: htmlObject.outerHTML,
      author: author,
      authorID: currUserUID,
      timestamp: toTimestamp(`${date} ${time}`),
      isPrivate: isPrivate,
    })
      .then(() => {
        alert('Saved Successfully');
        history.push(`/${collectionName}/${id}`);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getInitData = async () => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { title, content, author, timestamp, isPrivate } = docSnap.data();
      const { date, time } = timestampToDate(timestamp);

      setTitle(title);
      setContent(content);
      setDate(date);
      setTime(time);
      setAuthor(author);
      setIsPrivate(isPrivate);
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
    }
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

  useEffect(() => {
    getInitData();
  }, []);

  return (
    <>
      <InnerPageFrame title={menuTitle} subtitle={menuTitleList}>
        <MDBRow>
          <MDBCol size="8">
            <div className="h2 py-2">{mainTitle}</div>
          </MDBCol>
          <MDBCol size="4">
            <div className="py-2 mt-2" style={{ textAlign: 'right' }}>
              <Link
                onClick={history.goBack}
                className="border border-light p-1 p-lg-2 btn-click"
                style={{
                  backgroundColor: '#e5ecef',
                  color: 'black',
                }}
              >
                Back
              </Link>
              <Link
                className="border border-light p-1 p-lg-2 ml-3 btn-click"
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
                <div>
                  <div style={{ textAlign: 'right' }}>
                    <input
                      type="radio"
                      id="public"
                      name="visibility"
                      value="public"
                      checked={!isPrivate}
                      onChange={handlePrivateChange}
                    />
                    &nbsp;
                    <label htmlFor="public">Public</label>
                    &nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      id="private"
                      name="visibility"
                      value="private"
                      checked={isPrivate}
                      onChange={handlePrivateChange}
                    />
                    &nbsp;
                    <label htmlFor="private">Private</label>
                  </div>
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
                      value={date}
                      style={{ textAlign: 'center', width: '130px' }}
                      className="mr-2"
                    />
                    <input
                      type="time"
                      step="1"
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                      value={time}
                      style={{ textAlign: 'center' }}
                    />
                  </div>
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
