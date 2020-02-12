import React from "react";

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";



function HomeHoverEffect() {
  return (
    <MDBContainer className="my-5" >
      <MDBRow> 

        <MDBCol md="4" >
          <MDBView hover zoom >
            <img
              src="http://www.suvincos.com/sh_img/index/main_product_01_ov.png"
              className="img-fluid rounded mx-auto d-block"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <h1 className="text-black-50"><strong>Competence</strong></h1>
            </MDBMask>
          </MDBView>
        </MDBCol>

        <MDBCol md="4">
          <MDBView hover zoom>
            <img
              src="http://www.suvincos.com/sh_img/index/main_product_02_ov.png"
              className="img-fluid rounded mx-auto d-block"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <h1 className="text-black-50"><strong>R & D</strong></h1>
            </MDBMask>
          </MDBView>
        </MDBCol>
        
        <MDBCol md="4">
          <MDBView hover zoom>
            <img
              src="http://www.suvincos.com/sh_img/index/main_product_03_ov.png"
              className="img-fluid rounded mx-auto d-block"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <h1 className="text-black-50"><strong>OEM & ODM</strong></h1>
            </MDBMask>
          </MDBView>
        </MDBCol>


      </MDBRow>

    </MDBContainer>
  );
}


export default HomeHoverEffect;