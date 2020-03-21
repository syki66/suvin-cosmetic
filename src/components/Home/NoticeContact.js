import React from "react";

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBNavLink } from "mdbreact";

import firstToThridMDArray from "../common/board/rawMarkdownUrlArray";


export default class NoticeContact extends React.Component {
    
    render() {
        console.log(firstToThridMDArray)
        return(
            <MDBContainer>
    
                <MDBRow className="pb-sm-4 pb-md-5">
    
                    <MDBCol size="12" sm="6">
                        <MDBView className="hoverable">
                            <MDBRow>
                                <MDBCol lg="12" className="h2 font-weight-bold"  style={{backgroundColor:"green"}}>NOTICE</MDBCol>
                                <MDBCol lg="9" style={{backgroundColor:"green"}}>
                                    <ul>
                                        <li>2019 청도 한중일박람회에 다녀왔습… </li>
                                        <li>2019 청두미용전시회에 다녀왔습니다… </li>
                                        <li>2019 청두미용전시회에 다녀왔습니다… </li>
                                    </ul>
                                </MDBCol>
                                <MDBCol lg="3">
                                    <div>2019-12-29</div>
                                    <div>2019-12-29</div>
                                    <div>2019-12-29</div>
                                </MDBCol>
                            </MDBRow>
                        </MDBView>
                    </MDBCol>
    
                <MDBCol size="12" sm="6" style={{backgroundColor:'red'}}>
                    <MDBView className="hoverable">
                        <MDBRow>
                            <MDBCol size="12" xl="4" className="h2 font-weight-bold">CONTACT</MDBCol>
                            
                            <MDBCol size="12" xl="8">
                                <div className="font-weight-bold" style={{color:"#93375a"}}><span className="h2 font-weight-bold">1688-9028</span> (Customer Center)</div>
                                <div>Bussiness hours : 09:00~18:00</div>
                                <div>E-mail : dhkkis@daum.net</div>
                                <div className="font-weight-bold" style={{color:"#c4276a"}}>계좌: 210702-04-163993 (국민은행 김덕훈)</div>
                                <div className="font-weight-bold">Mobile : 010-6644-3665</div>
                            
                            </MDBCol>
                        </MDBRow>
                    </MDBView>
                </MDBCol>
    
            </MDBRow>
    
          </MDBContainer>
        );

    }
}