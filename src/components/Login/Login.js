import React, { useState, useEffect } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useHistory, Link } from 'react-router-dom';

export default function Login() {
  const auth = getAuth();
  const history = useHistory();
  const [user, setUser] = useState({
    email: null,
    password: null,
  });

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage);
      });
  };

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === 'auth/invalid-email') {
          alert('The email is incorrect');
        } else if (errorCode === 'auth/invalid-credential') {
          alert('Password is incorrect');
        } else if (errorCode === 'auth/missing-email') {
          alert('Please enter your Email');
        } else if (errorCode === 'auth/missing-password') {
          alert('Please enter your password');
        } else {
          alert(errorCode);
        }
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log('로그인 상태', uid);
        history.push('/home');
      } else {
        console.log('로그아웃 상태');
      }
    });
  }, []);

  return (
    <>
      <div
        style={{
          margin: '70px auto',
          padding: '40px 50px',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          border: 'solid 1px #eaeced',
          borderRadius: '15px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Sign In</h2>
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
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          style={{
            fontSize: '19px',
            margin: '5px',
            marginBottom: '10px',
            width: 'calc(100% - 10px)',
            padding: '0px 10px',
            height: '50px',
          }}
          placeholder="Password"
          maxLength={30}
          type="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
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
          onClick={() => handleLogin(user.email, user.password)}
        >
          Login
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
        <GoogleLoginButton onClick={handleGoogleLogin} />
        <div style={{ textAlign: 'center', margin: '10px' }}>
          Need an account?&nbsp;
          <Link
            to="Register"
            style={{ textDecoration: 'underline', color: 'gray' }}
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </>
  );
}
