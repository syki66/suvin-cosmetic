import React from "react";

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";



function HomeHoverEffect() {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="3">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="red-strong">
              <p className="white-text">Competence</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="3">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="red-light">
              <p className="white-text">R & D</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="3">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="red-slight">
              <p className="white-text">OEM</p>
            </MDBMask>
          </MDBView>
        </MDBCol>

        <MDBCol md="3">
          <MDBView hover zoom>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center">
              <p className="white-text">ODM</p>
            </MDBMask>
          </MDBView>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}


export default HomeHoverEffect;