import React from "react";

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import intro_pic_1 from "./Home_Image/intro01.png"
import intro_pic_2 from "./Home_Image/intro02.png"
import intro_pic_3 from "./Home_Image/intro03.png"


import notice from "./Home_Image/notice.jpg"
import telephone from "./Home_Image/telephone.jpg"





/*
  사진 직접 경로설정하면 안되고 import 시켜줘야됨
  size="4" xs="4" sm="4" md="4" lg="" xl="" 이친구들은 각각의 창 사이즈에서 flex를 나타내주는거 같음. (size는 기본, extra small, small, middle, large, extra large)
  그런줄 알았는데 size="4" 만 설정해도 똑같네... 왜냐면 사이즈가 전체를 총괄하기때문..

  숫자가 사진 크기도 결정하는거같음. 그렇다고 작은 사진으로 숫자키워봐야 소용없는듯함. 대신 레이아웃 차지하는 범위 늘어나는듯. 소수점은 안들어감
  근데 안에 숫자는 사진의 가로크기 기준으로 들어가는거 같고 이것만하면 레이아웃 줄어들어도 사진이 잘리면서 그리드는 그대로 유지
  각 사이즈마다 사진 크기의 기준이 있음. 예를들어 sm=4 가 md=3이랑 비슷함.
  
  2열도 마찬가지로 6씩 줘서 반반 정렬함. 6 이하로 주니 사진 짤림
  
  img-fluid 쓰면 가로 줄어들면서 이미지 잘리는거 대신 가로 기준으로 이미지가 리사이징 되는듯함.
  
  
  크기별 사용법 margin padding 사용법 요약해보면, 
  p-3 주고 p-sm-0 이렇게하면 오직 extra small만 p-3가 적용.
  p-sm-3 주고 p-md-0 이렇게 주면 오직 small만 p-3 적용.
  p-md-3 주고 p-lg-0 이렇게 주면 오직 middle만 p-3 적용.
  즉, 값을 주게되면 상위 크기들도 같이 적용되고, 오버라이딩 쓰면 된다는거임..

  이런식으로 xs에서는 모든 패딩 제거했고,
  sm에서는 row 간에 padding만 추가 각 column 컨텐츠는 붙어있음 (1열,2열 padding bottom-4 , 1열 padding top-4)
  md에서는 sm에서 row 간에 패딩 1씩만 추가 (1열,2열 padding bottom-5 , 1열 padding top-5)
  lg에서는 1열은 애초에 사진크기가 작기때문에 사이에 공백이 생겨서 건들필요없고, 2열에 사진 붙어있어서 x축 패딩 3줌(각각 오른쪽 왼쪽만주면 사진커서 그냥 x축 한번에줌)
  xl도 lg랑 마찬가지로 하고 패딩 4줌

  <img>에 mx-auto를 줘서 중앙정렬시킴 (마진값 오토)
  <MDBMask>에 "flex-center" 줘서 글자도 중앙정렬.


  그러고 hover로 마우스 올리면 MDB마스크 뜨게되고 (마스크에는 1열은 화이트, 2열은 블랙적용했고 2열은 블랙마스크 고정, 색은 overlay항목)
  zoom으로 hover 했을때 확대

  2열 className="hoverable" 로 마우스 올렸을때 z-depth (그림자효과)

  
  className="white-text" 로 흰색글씨체



  글씨 높이변경 vh vw 이용
*/

function HomeHoverEffect() {
  return (
    <MDBContainer>



      <MDBRow className="pb-sm-4 pt-sm-4 pb-md-5 pt-md-5"> 



        <MDBCol size="4" className="px-0">
          <MDBView hover zoom>
            <img
              src={intro_pic_1}
              className="img-fluid mx-auto"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <h1 ><strong>Competence</strong></h1>
            </MDBMask>
          </MDBView>
        </MDBCol>

        <MDBCol size="4" className="px-0">
          <MDBView hover zoom>
            <img
              src={intro_pic_2}
              className="img-fluid mx-auto"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <h1 ><strong>R & D</strong></h1>
            </MDBMask>
          </MDBView>
        </MDBCol>
        
        <MDBCol size="4" className="px-0">
          <MDBView hover zoom>
            <img
              src={intro_pic_3}
              className="img-fluid mx-auto"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <h1 ><strong>OEM & ODM</strong></h1>
            </MDBMask>
          </MDBView>
        </MDBCol>



      </MDBRow>










      <MDBRow className="pb-sm-4 pb-md-5">



        <MDBCol size="6" className="px-0 px-lg-3 px-xl-4">
          <MDBView className="hoverable">
            <img
              src={notice}
              alt="notice"
              className="img-fluid"
            />
            <MDBMask className="flex-center" overlay="black-strong">
              <p className="white-text">
                <h1>NOTICE</h1>


              </p>



            </MDBMask>
          </MDBView>
        </MDBCol>


        <MDBCol size="6" className="px-0 px-lg-3 px-xl-4">
          <MDBView className="hoverable">
            <img
              src={telephone}
              alt="telephone"
              className="img-fluid"
            />
            <MDBMask className="flex-center" overlay="black-strong">
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


export default HomeHoverEffect;