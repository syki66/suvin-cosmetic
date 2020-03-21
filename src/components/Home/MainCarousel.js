import React from "react";

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import FittedImage from "react-fitted-image";

const suvin_pic_1 = "https://user-images.githubusercontent.com/59393359/77156900-b11fe780-6ae3-11ea-8111-7b5386249d5c.png";
const suvin_pic_2 = "https://user-images.githubusercontent.com/59393359/77156904-b2e9ab00-6ae3-11ea-9e69-70377787cc3b.png";


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


  fittedimage 굳이 안쓰고 div 이용해서 background만 처리해도 가능할듯

  showControls는 드롭다운 메뉴가 안열리는 에러때문에 false로 둠
*/


export default function MainCarousel() {
  return (
    <MDBContainer fluid className="px-0">
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={false}
        showIndicators={true}
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