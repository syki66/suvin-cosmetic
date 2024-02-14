import React, { useState, useEffect } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useHistory, Link } from 'react-router-dom';

export default function ResetPassword() {
  const auth = getAuth();
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');

  const handleResetEmail = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(
          'Successfully sent you an email with a password reset link.\nPlease check your email'
        );
        history.push('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/invalid-email') {
          alert('Please write your email correctly');
        } else if (errorCode === 'auth/missing-email') {
          alert('Please enter your Email');
        } else {
          alert(errorMessage);
        }
      });
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleResetEmail(userEmail);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log('로그인 상태', uid);
        history.push('/');
      } else {
        console.log('로그아웃 상태');
      }
    });
  }, []);

  return (
    <>
      {' '}
      <div className="m-3">
        <div
          style={{
            margin: '70px auto',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '500px',
            border: 'solid 1px #eaeced',
            borderRadius: '15px',
          }}
          className="px-2 py-5 p-sm-5"
        >
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
            Reset Password
          </h2>
          <input
            style={{
              fontSize: '19px',
              margin: '5px',
              marginBottom: '10px',
              width: 'calc(100% - 10px)',
              padding: '0px 10px',
              height: '50px',
            }}
            placeholder="Email"
            maxLength={30}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            onKeyPress={handleEnterPress}
          />
          <button
            style={{
              borderRadius: '3px',
              fontSize: '19px',
              margin: '5px',
              width: 'calc(100% - 10px)',
              padding: '0px 10px',
              height: '50px',
              background: '#7F304E',
              color: 'white',
              border: 'none',
            }}
            onClick={() => handleResetEmail(userEmail)}
          >
            Send Email
          </button>
          <div
            style={{
              borderTop: '1px solid #cbd2d6',
              position: 'relative',
              margin: '5px',
              marginTop: '8.72%',
              marginBottom: '4.895%',

              height: '15px',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                backgroundColor: '#fff',
                padding: '0 0.5em',
                position: 'relative',
                color: '#6c7378',
                top: '-0.7em',
              }}
            >
              OR
            </span>
          </div>
          <div style={{ textAlign: 'center', margin: '10px' }}>
            Already have an account?&nbsp;
            <Link
              to="/Login"
              style={{ textDecoration: 'underline', color: 'gray' }}
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
