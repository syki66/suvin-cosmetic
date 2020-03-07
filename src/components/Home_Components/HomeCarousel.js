import React from "react";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

import FittedImage from "react-fitted-image";


import suvin_pic_1 from "./Home_Image/suvin01.png"
import suvin_pic_2 from "./Home_Image/suvin02.png"

import suvin_pic_1_mobile from "./Home_Image/suvin01_mobile.png"
import suvin_pic_2_mobile from "./Home_Image/suvin02_mobile.png"


/*
  px-0 : x축 마진제거
  activeItem={1} : 1번 사진으로 초기화하겠다
  length={2} : 커라젤 사진 양이 2개이다
  showControls={true} : 양옆에 애로우로 컨트롤 할거냐
  showIndicators={true} : 밑에 점박이 넣을거냐
  z-depth-1 : 그림자
  그리고 그림 넣을때 경로로 바로 안들어가서 import 시키고 그림 넣어야됨.

  <MDBContainer>에 fluid 쓰고 className="w-100" 넣어야 커라젤 너비 꽉채워줌

  home__carousel로 모바일로 갈수록 사진 양옆 없앰
*/

function HomeCarousel() {
  return (
    <MDBContainer fluid className="px-0">
    <MDBCarousel
      activeItem={1}
      length={2}
      showControls={true}
      showIndicators={true}
      className="z-depth-0"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">

          <MDBView>
                <FittedImage fit="cover" src={suvin_pic_1} className="carousel__css first_carousel" />
                
          </MDBView>

        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">

          <MDBView>
              <FittedImage fit="cover" src={suvin_pic_2} className="carousel__css second_carousel" />
          </MDBView>

        </MDBCarouselItem>

      </MDBCarouselInner>
    </MDBCarousel>
  </MDBContainer>
  );
}


export default HomeCarousel;