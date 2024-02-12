import React, { useState, useEffect } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdbreact';

import { useLocation } from 'react-router-dom';

import FittedImage from 'react-fitted-image';

import {
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';

import header_sub_bg from './header_sub_bg.png';
import slicedLogoImg from './slicedLogoImg.png';
import logo_32 from './logo_32.png';
import logo_192 from './logo_192.png';
import logo_512 from './logo_512.png';

/*
    isOpen은 모바일형으로 네비게이션바 변경되었을때 메뉴 열리게 하는 토글의 스테이트 변경하는거
    mx-auto 는 마진 x축방향 알아서 맞추는거랑 양쪽 동일해져서 창크기에 따라서 쫙펴지게 되고
    그래서 maxWidth를 1100줘서 일정이상 커지면 모양 고정되게 했고,
    고정되고 난뒤에 그림자 효과 생겨서 없앨라고 z-depth-0 줬고,
    그정도, BrowserRouter 보다 HashRouter가 깃허브 호스팅 편하다해서 이걸로한거고,
    뭐 <a href> 로 하면 새로고침된다함.
    어쨌든 여기서는 각 네비바 클릭하면 어디로 링크해줄지만 해줌 (경로 설정과 파일연결은 App.js 에서 했음)

    FittedImage의 커버 이용해서 높이 고정시켜서 확대되게끔 했고, props와 라우터를 이용해서 home 에서는 안보이도록 했음
*/

export default function Header() {
  const auth = getAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const runCollapse = () => {
    setIsOpen(false);
  };

  const handleSendEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert(
        'Verify Your Email.\nCheck your email & click the link to activate your account.'
      );
    });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('로그아웃 성공');
      })
      .catch((error) => {
        console.log('로그아웃 실패', error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserEmail(user.email.split('@')[0]);
        setEmailVerified(user.emailVerified);
      } else {
        console.log('로그아웃 상태');
        setUserEmail('');
        setEmailVerified(false);
      }
    });
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: '#9e4f89' }}>
        <MDBNavbar
          color=""
          dark
          expand="md"
          className="z-depth-0 mx-auto"
          style={{ maxWidth: 1100 }}
        >
          <MDBNavbarBrand>
            <MDBNavLink to="/" style={{ borderRadius: '10px' }}>
              <img src={slicedLogoImg} className="pr-1" />
              <strong className="white-text">Suvin Cosmetic</strong>
            </MDBNavLink>
          </MDBNavbarBrand>

          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse isOpen={isOpen} navbar>
            <MDBNavbarNav>
              <MDBNavItem>
                <nav className="nav">
                  <div className="nav__link p-0" style={{ width: '100%' }}>
                    <MDBNavLink
                      to="/Company"
                      className="p-lg-3 headerMenu_css"
                      style={{ textAlign: 'center' }}
                      onClick={runCollapse}
                    >
                      Information
                    </MDBNavLink>
                    <div className="nav__link-group" style={{ zIndex: '2' }}>
                      <MDBNavLink to="/Company" className="nav__link p-3">
                        Company
                      </MDBNavLink>
                      <MDBNavLink to="/Office Map" className="nav__link p-3">
                        Office Map
                      </MDBNavLink>
                    </div>
                  </div>
                </nav>
              </MDBNavItem>

              <MDBNavItem>
                <nav className="nav">
                  <div className="nav__link p-0" style={{ width: '100%' }}>
                    <MDBNavLink
                      to="/Competence"
                      className="p-lg-3 headerMenu_css"
                      style={{ textAlign: 'center' }}
                      onClick={runCollapse}
                    >
                      Business
                    </MDBNavLink>
                    <div className="nav__link-group" style={{ zIndex: '2' }}>
                      <MDBNavLink to="/Competence" className="nav__link p-3">
                        Competence
                      </MDBNavLink>
                      <MDBNavLink to="/R & D" className="nav__link p-3">
                        R & D
                      </MDBNavLink>
                      <MDBNavLink to="/OEM & ODM" className="nav__link p-3">
                        OEM & ODM
                      </MDBNavLink>
                    </div>
                  </div>
                </nav>
              </MDBNavItem>

              <MDBNavItem>
                <nav className="nav">
                  <div className="nav__link p-0" style={{ width: '100%' }}>
                    <MDBNavLink
                      to="/premium/page/1"
                      className="p-lg-3 headerMenu_css"
                      style={{ textAlign: 'center' }}
                      onClick={runCollapse}
                    >
                      Product
                    </MDBNavLink>
                    <div className="nav__link-group" style={{ zIndex: '2' }}>
                      <MDBNavLink
                        to="/premium/page/1"
                        className="nav__link p-3"
                      >
                        Premium
                      </MDBNavLink>
                      <MDBNavLink
                        to="/special/page/1"
                        className="nav__link p-3"
                      >
                        Special
                      </MDBNavLink>
                      <MDBNavLink to="/others/page/1" className="nav__link p-3">
                        Others
                      </MDBNavLink>
                    </div>
                  </div>
                </nav>
              </MDBNavItem>

              <MDBNavItem>
                <nav className="nav">
                  <div className="nav__link p-0" style={{ width: '100%' }}>
                    <MDBNavLink
                      to="/Global Network"
                      className="p-lg-3 headerMenu_css"
                      style={{ textAlign: 'center' }}
                      onClick={runCollapse}
                    >
                      Global Network
                    </MDBNavLink>
                    <div className="nav__link-group" style={{ zIndex: '2' }}>
                      <MDBNavLink
                        to="/Global Network"
                        className="nav__link p-3"
                      >
                        Global Network
                      </MDBNavLink>
                    </div>
                  </div>
                </nav>
              </MDBNavItem>

              <MDBNavItem>
                <nav className="nav">
                  <div className="nav__link p-0" style={{ width: '100%' }}>
                    <MDBNavLink
                      to="/inquiry/page/1"
                      className="p-lg-3 headerMenu_css"
                      style={{ textAlign: 'center' }}
                      onClick={runCollapse}
                    >
                      Inquiry
                    </MDBNavLink>
                    <div className="nav__link-group" style={{ zIndex: '2' }}>
                      <MDBNavLink
                        to="/inquiry/page/1"
                        className="nav__link p-3"
                      >
                        Inquiry
                      </MDBNavLink>
                    </div>
                  </div>
                </nav>
              </MDBNavItem>

              <MDBNavItem>
                <nav className="nav">
                  <div className="nav__link p-0" style={{ width: '100%' }}>
                    <MDBNavLink
                      to="/notice/page/1"
                      className="p-lg-3 headerMenu_css"
                      style={{ textAlign: 'center' }}
                      onClick={runCollapse}
                    >
                      Customer
                    </MDBNavLink>
                    <div className="nav__link-group" style={{ zIndex: '2' }}>
                      <MDBNavLink to="/notice/page/1" className="nav__link p-3">
                        Notice
                      </MDBNavLink>
                      <MDBNavLink to="/Comments" className="nav__link p-3">
                        Comments
                      </MDBNavLink>
                    </div>
                  </div>
                </nav>
              </MDBNavItem>

              {userEmail ? (
                <MDBNavItem>
                  <nav className="nav">
                    <div className="nav__link p-0" style={{ width: '100%' }}>
                      <MDBNavLink
                        to=""
                        className="p-lg-3 headerMenu_css"
                        style={{ textAlign: 'center' }}
                      >
                        {userEmail}
                      </MDBNavLink>
                      <div className="nav__link-group" style={{ zIndex: '2' }}>
                        {emailVerified ? (
                          <></>
                        ) : (
                          <div
                            onClick={handleSendEmail}
                            className="nav__link p-3"
                          >
                            Resend Verification email
                          </div>
                        )}
                        <div onClick={handleLogout} className="nav__link p-3">
                          Sign-out
                        </div>
                      </div>
                    </div>
                  </nav>
                </MDBNavItem>
              ) : (
                <MDBNavItem>
                  <nav className="nav">
                    <div className="nav__link p-0" style={{ width: '100%' }}>
                      <MDBNavLink
                        to="/Login"
                        className="p-lg-3 headerMenu_css"
                        style={{ textAlign: 'center' }}
                      >
                        Login
                      </MDBNavLink>
                    </div>
                  </nav>
                </MDBNavItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
      <DisplayHeaderBG />
    </div>
  );
}

// 홈화면에서는 출력 안되게 하는 함수
function DisplayHeaderBG() {
  let location = useLocation();
  let display;

  if (location.pathname === '/') {
    display = 'none';
  } else {
    display = 'block';
  }

  //css에서 안해도 백틱형식으로 백그라운드 이미지 불러올수 있음 backgroundImage:`url(${Motto})`
  return (
    <FittedImage
      fit="cover"
      src={header_sub_bg}
      style={{ height: '14vw', display }}
      className="headerBG__css"
    />
  );
}
