import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


export default function Footer() {
    return (
        <MDBFooter color="elegant-color" >
            <MDBContainer >
                <MDBRow className="p-2 font-small">
                    <MDBCol size="12" md="11">
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
                    <MDBCol size="12" md="1">
                        <div style={{backgroundColor:"red"}}>소셜 버튼</div>
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