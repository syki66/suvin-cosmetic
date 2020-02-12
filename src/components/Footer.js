import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
    return (
        <MDBFooter color="elegant-color" className="font-small mt-4 py-2" >
            <MDBContainer fluid className="text-center text-md-left " style={{ display: 'flex', justifyContent: 'center'  }}>
                <MDBRow className="align-bottom">
                    <MDBCol md="10" >
                        <p>
                            <span>[14566] 경기도 부천시 부천로136번길27 원미어울마당406호 Tel : 1688-9028 / 010-6644-3665</span><br />
                            <span>E-mail : suvin@suvincos.com 사업자 번호 : 130-42-62423 상호 : 수빈코스메틱 대표 : 김덕훈</span>
                        </p>
                    </MDBCol>
                    <MDBCol md="2">
                        <p> 오른쪽에 버튼만들 예정</p>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-2">
                <MDBContainer fluid>
                    Copyright ⓒ <a href="http://www.suvincos.com/"> www.suvincos.com </a> All rights reserved.
          </MDBContainer>
            </div>
        </MDBFooter>
    );

}

export default Footer;