import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

import youtubeIcon_32 from './youtubeIcon_32.png';
import emailIcon_32 from './emailIcon_32.png';
import callIcon_32 from './callIcon_32.png';

export default function Footer() {
  return (
    <MDBFooter color="elegant-color">
      <MDBContainer>
        <MDBRow className="font-small">
          <MDBCol className="py-2" size="12" lg="9">
            <div>
              <div className="footer_display">
                사업자 번호 : 130-42-62423&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div className="footer_display">
                통신판매업신고번호 : 제2019-경기부천-1661호
              </div>
            </div>
            <div>
              <div className="footer_display">
                상호 : 수빈코스메틱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div className="footer_display">대표 : 김덕훈</div>
            </div>
            <div>
              <div className="footer_display">
                주소 : [14544] 경기도 부천시 소향로13번길 20, 701-2호
              </div>
            </div>
            <div>
              <div className="footer_display">
                Tel : 1688-9028&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>

              <div className="footer_display">E-mail : dhkkis@daum.net</div>
            </div>
          </MDBCol>
          <MDBCol
            size="12"
            lg="3"
            className="py-3 py-lg-2 footer-lg-right"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <a
              className="pr-5 px-lg-1"
              href="tel:16889028"
              title="click to call"
            >
              <img src={callIcon_32} />
            </a>
            <a
              className="px-5 px-lg-1"
              href="mailto:dhkkis@daum.net"
              title="click to E-mail"
            >
              <img src={emailIcon_32} />
            </a>
            <a
              className="pl-5 px-lg-1"
              href="https://www.youtube.com/channel/UCPV-UvOZJU92ZfEv0LR3uvg"
              title="click to youtube"
            >
              <img src={youtubeIcon_32} />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-1">
        <MDBContainer fluid>
          Copyright ⓒ <a href="http://www.suvincos.com/"> www.suvincos.com </a>
          All rights reserved.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
