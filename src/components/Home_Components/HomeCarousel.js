import React from "react";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";



function HomeCarousel() {
  return (
    <MDBContainer>
    <MDBCarousel
      activeItem={1}
      length={2}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="http://www.suvincos.com/sh_img/index/main_banner/main_banner_01.png"
              alt="First slide"
            />
            
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="http://www.suvincos.com/sh_img/index/main_banner/main_banner_02.png"
              alt="Second slide"
            />
            
          </MDBView>
        </MDBCarouselItem>

      </MDBCarouselInner>
    </MDBCarousel>
  </MDBContainer>
  );
}


export default HomeCarousel;