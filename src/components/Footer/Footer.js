import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const youtubeIcon_32 = "https://user-images.githubusercontent.com/59393359/77156353-926d2100-6ae2-11ea-8fe9-bf26b085ed34.png";
const emailIcon_32 = "https://user-images.githubusercontent.com/59393359/77156352-91d48a80-6ae2-11ea-8b5a-8cbb6645ddd7.png";
const callIcon_32 = "https://user-images.githubusercontent.com/59393359/77156350-913bf400-6ae2-11ea-8bf1-2b3cb5f77598.png";

const youtubeIcon_64 = "https://user-images.githubusercontent.com/59393359/77156475-cba59100-6ae2-11ea-9f7e-113529ce7064.png";
const emailIcon_64 = "https://user-images.githubusercontent.com/59393359/77156477-cc3e2780-6ae2-11ea-93e4-197b88ff19cb.png";
const callIcon_64 = "https://user-images.githubusercontent.com/59393359/77156479-ccd6be00-6ae2-11ea-80c4-0ed01c62d3aa.png";


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
                        <a className="pr-5 px-lg-1" href="tel:16889028" title="click to call"><img src={callIcon_32} /></a>
                        <a className="px-5 px-lg-1" href="mailto:dhkkis@daum.net" title="click to E-mail"><img src={emailIcon_32} /></a>
                        <a className="pl-5 px-lg-1" href="https://www.youtube.com/channel/UCtvbYNAaLD4ZybrkxIevgxA" title="click to youtube"><img src={youtubeIcon_32} /></a>
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