import React from "react";

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";


function HomeContact() {
    return (
        <MDBContainer className="my-md-5" >
            <MDBRow className="mb-md-4 ">

                <MDBCol size= "6" sm="6" md="6" className="px-0">
                    <MDBView className="hoverable">
                        <img
                            src="https://cdn.pixabay.com/photo/2016/03/27/23/11/post-it-notes-1284667_960_720.jpg"
                            className="img-fluid rounded mx-auto d-block"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="black-strong">
                            <p className="white-text">
                                <h1>NOTICE</h1>


                            </p>



                        </MDBMask>
                    </MDBView>
                </MDBCol>


                <MDBCol size= "6" sm="6" md="6" className="px-0">
                    <MDBView className="hoverable">
                        <img
                            src="https://cdn.pixabay.com/photo/2014/10/23/16/58/phone-499991_960_720.jpg"
                            className="img-fluid rounded mx-auto d-block"
                            alt=""
                        />
                        <MDBMask className="flex-center " overlay="black-strong">
                            <p className="white-text">
                                <h1>CONTACT</h1>
                                <span>Tel : 1688-9028</span><br />
                                <span>Mobile : 010-6644-3665</span><br />
                                <span>Bussiness hours : 09:00~18:00</span><br />
                                <span>E-mail : suvin@suvincos.com</span><br />
                                <span>계좌: 210702-04-163993(국민은행 김덕훈)</span><br />

                            </p>



                        </MDBMask>
                    </MDBView>
                </MDBCol>


            </MDBRow>
        </MDBContainer>
    );
}

export default HomeContact;