import React from "react";

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";



function HomeHoverEffect() {
  return (
    <MDBContainer className="my-md-5 " >
      <MDBRow> 

        <MDBCol size="4" sm="4" md="4" className="px-0">
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

        <MDBCol size="4" sm="4" md="4" className="px-0">
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
        
        <MDBCol size="4" sm="4" md="4" className="px-0">
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