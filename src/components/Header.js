import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

import { HashRouter } from "react-router-dom";

import FittedImage from "react-fitted-image";
import header_sub_bg from "./header_sub_bg.png";


/*
    isOpen은 모바일형으로 네비게이션바 변경되었을때 메뉴 열리게 하는 토글의 스테이트 변경하는거
    mx-auto 는 마진 x축방향 알아서 맞추는거랑 양쪽 동일해져서 창크기에 따라서 쫙펴지게 되고
    그래서 maxWidth를 1100줘서 일정이상 커지면 모양 고정되게 했고,
    고정되고 난뒤에 그림자 효과 생겨서 없앨라고 z-depth-0 줬고,
    그정도, BrowserRouter 보다 HashRouter가 깃허브 호스팅 편하다해서 이걸로한거고,
    뭐 <a href> 로 하면 새로고침된다함.
    어쨌든 여기서는 각 네비바 클릭하면 어디로 링크해줄지만 해줌 (경로 설정과 파일연결은 App.js 에서 했음)

    FittedImage의 커버 이용해서 높이 고정시켜서 확대되게끔 했고, props와 라우터를 이용해서 home 에서는 안보이도록 했음
*/

class Header extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <div>

            <div style={{  backgroundColor: "#9e4f89" }}>
                <MDBNavbar color="" dark expand="md" className="z-depth-0 mx-auto"  style={{maxWidth: 1100}}>
                    <MDBNavbarBrand>
                        <MDBNavLink to="/"><strong className="white-text">Suvin Cosmetic</strong></MDBNavLink>
                    </MDBNavbarBrand>

                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse isOpen={this.state.isOpen} navbar>


                        <MDBNavbarNav>

                            <MDBNavItem>
                                <MDBNavLink to="Company">Information</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="Competence">Business</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="Product">Product</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="Global_Network">Global Network</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="Inquiry">Inquiry</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="Customer">Customer</MDBNavLink>
                            </MDBNavItem>

                        </MDBNavbarNav>

                    </MDBCollapse>
                </MDBNavbar>
            </div>
        
        <FittedImage fit="cover" src={header_sub_bg} style={{height: "169px"}} className="headerBG__css" />
    </div>

    );
  }
}

export default Header;