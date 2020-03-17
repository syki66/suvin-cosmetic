import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import youtubeIcon from "../../images/Footer/youtube-icon.png"
import emailIcon from "../../images/Footer/email-icon.png"
import callIcon from "../../images/Footer/call-icon.png"


export default function Footer() {
    return (
        <MDBFooter color="elegant-color" >
            <MDBContainer >
                <MDBRow className="font-small">
                    <MDBCol className="py-2" size="12" lg="9">
                        <div>
                            <div className="footer_display">[14566] 경기도 부천시 부천로 136번길 27 원미어울마당 406호 </div>
                            <div className="footer_display">Tel : 1688-9028 / 010-6644-3665 </div>
                        </div>
                        <div>
                            <div className="footer_display">E-mail : dhkkis@daum.net </div>
                            <div className="footer_display">사업자 번호 : 130-42-62423 </div>
                            <div className="footer_display">상호 : 수빈코스메틱, 대표 : 김덕훈</div>
                        </div>
                    </MDBCol>
                    <MDBCol size="12" lg="3" className="py-3 py-lg-2 footer-lg-right" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <a className="px-5 px-lg-1" href="tel:16889028" title="click to call"><img src={callIcon} /></a>
                        <a className="px-5 px-lg-1" href="mailto:dhkkis@daum.net" title="click to E-mail"><img src={emailIcon} /></a>
                        <a className="px-5 px-lg-1" href="https://www.youtube.com/channel/UCtvbYNAaLD4ZybrkxIevgxA" title="click to youtube"><img src={youtubeIcon} /></a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
            <div className="footer-copyright text-center py-1">
                <MDBContainer fluid>
                    Copyright ⓒ <a href="http://www.suvincos.com/"> www.suvincos.com </a> All rights reserved.
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}