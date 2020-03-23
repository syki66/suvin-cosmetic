import React from "react";

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBNavLink } from "mdbreact";
import { Link } from "react-router-dom";

const intro_pic_1 = "https://user-images.githubusercontent.com/59393359/77156957-cbf25c00-6ae3-11ea-8329-0a7734145777.png";
const intro_pic_2 = "https://user-images.githubusercontent.com/59393359/77156961-cd238900-6ae3-11ea-9d5d-a1ed508d781c.png";
const intro_pic_3 = "https://user-images.githubusercontent.com/59393359/77156963-cdbc1f80-6ae3-11ea-8187-f79ef8eb2e09.png";



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
  즉, 값을 주게되면 상위 크기들도 같이 적용되고, 오버라이딩 하면 된다는거임..

  이런식으로 xs에서는 모든 패딩 제거했고,
  sm에서는 row 간에 padding만 추가 각 column 컨텐츠는 붙어있음 (1열,2열 padding bottom-4 , 1열 padding top-4)
  md에서는 sm에서 row 간에 패딩 1씩만 추가 (1열,2열 padding bottom-5 , 1열 padding top-5)
  lg에서는 1열은 애초에 사진크기가 wapper에 비해 작기때문에 사이에 공백이 생겨서 건들필요없고, 2열에 사진 붙어있어서 x축 패딩 3줌(각각 오른쪽 왼쪽만주면 사진커서 그냥 x축 한번에줌)
  xl도 lg랑 마찬가지로 하고 패딩 4줌

  <img>에 mx-auto를 줘서 중앙정렬시킴 (마진값 오토)
  <MDBMask>에 "flex-center" 줘서 글자도 중앙정렬.


  그러고 hover로 마우스 올리면 MDB마스크 뜨게되고 (마스크에는 1열은 화이트, 2열은 블랙적용했고 2열은 블랙마스크 고정, 색은 overlay항목)
  zoom으로 hover 했을때 확대

  2열 className="hoverable" 로 마우스 올렸을때 z-depth (그림자효과)

  
  className="white-text" 로 흰색글씨체

  rounded 로 1열 박스들 둥글게 라운딩함


  notice랑 contact는 그냥 세로로 배열할라고 size 12씩 줬고, sm부터 6:6으로 배열


  화장품 파는거 커라젤로 메인에 올려야겠다.


  글씨는 App.css 에서 직접 크기에 따라 입힘


  여기서 navlink는 이미 app.js에서 hash router 로 감싸져있어서 라우터 태그 따로 없어도됨
*/


export default function Introduction() {
  return (
    <div style={{backgroundColor:"snow"}}>
      <MDBContainer className="py-5">

        <MDBRow>

          <MDBCol size="12" md="4" className="pb-5 pb-md-0" style={{display:"flex", justifyContent:"center"}}>
            <Link to="Competence" className="home__link">
              <div className="home__intro_parent">
                <img src={intro_pic_1} className="img-fluid home__intro_img" />
                <div className="home__intro_child">Competence</div>
              </div>
            </Link>
          </MDBCol>

          <MDBCol size="12" md="4" className="pb-5 pb-md-0" style={{display:"flex", justifyContent:"center"}}>
            <Link to="R & D" className="home__link">
              <div className="home__intro_parent">
                <img src={intro_pic_2} className="img-fluid home__intro_img" />
                <div className="home__intro_child">R & D</div>
              </div>
            </Link>
          </MDBCol>

          <MDBCol size="12" md="4" style={{display:"flex", justifyContent:"center"}}>
            <Link to="OEM & ODM" className="home__link">
              <div className="home__intro_parent">
                <img src={intro_pic_3} className="img-fluid home__intro_img" />
                <div className="home__intro_child">OEM & ODM</div>
              </div>
            </Link>
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </div>
  );
}