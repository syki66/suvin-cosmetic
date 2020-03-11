import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBView, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

import { HashRouter, useLocation } from "react-router-dom";

import FittedImage from "react-fitted-image";


import header_sub_bg from "./Header_IMGs/header_sub_bg.png";


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

                            <MDBNavItem className="">
                                <nav className="nav" >
                                    <div className="nav__link p-0" style={{width:"100%"}}>
                                        <MDBNavLink to="Company" className="py-md-3 headerMenu_css" style={{textAlign:"center"}}>Information</MDBNavLink>
                                        <div className="nav__link-group" style={{zIndex:"2"}}>
                                            <MDBNavLink to="Company" className="nav__link">Company</MDBNavLink>
                                            <MDBNavLink to="OfficeMap" className="nav__link">Office Map</MDBNavLink>
                                        </div>
                                    </div>
                                </nav>
                            </MDBNavItem>

                            <MDBNavItem className="">
                                <nav className="nav">
                                    <div className="nav__link p-0" style={{width:"100%"}}>
                                        <MDBNavLink to="Competence" className="py-md-3 headerMenu_css" style={{textAlign:"center"}}>Business</MDBNavLink>
                                        <div className="nav__link-group" style={{zIndex:"2"}}>
                                            <MDBNavLink to="Competence" className="nav__link">Competence</MDBNavLink>
                                            <MDBNavLink to="RnD" className="nav__link">R & D</MDBNavLink>
                                            <MDBNavLink to="OEMnODM" className="nav__link">OEM & ODM</MDBNavLink>
                                        </div>
                                    </div>
                                </nav>
                            </MDBNavItem>

                            <MDBNavItem className="">
                                <nav className="nav">
                                    <div className="nav__link p-0" style={{width:"100%"}}>
                                        <MDBNavLink to="Product" className="py-md-3 headerMenu_css" style={{textAlign:"center"}}>Product</MDBNavLink>
                                        <div className="nav__link-group" style={{zIndex:"2"}}>
                                            <MDBNavLink to="" className="nav__link">Premium</MDBNavLink>
                                            <MDBNavLink to="" className="nav__link">Special</MDBNavLink>
                                            <MDBNavLink to="" className="nav__link">Others</MDBNavLink>
                                        </div>
                                    </div>
                                </nav>
                            </MDBNavItem>

                            <MDBNavItem className="">
                                <nav className="nav">
                                    <div className="nav__link p-0" style={{width:"100%"}}>
                                        <MDBNavLink to="Global_Network" className="py-md-3 headerMenu_css" style={{textAlign:"center"}}>Global Network</MDBNavLink>
                                        <div className="nav__link-group" style={{zIndex:"2"}}>
                                            <MDBNavLink to="Global_Network" className="nav__link">Global Network</MDBNavLink>
                                        </div>
                                    </div>
                                </nav>
                            </MDBNavItem>

                            <MDBNavItem className="">
                                <nav className="nav">
                                    <div className="nav__link p-0" style={{width:"100%"}}>
                                        <MDBNavLink to="Inquiry" className="py-md-3 headerMenu_css" style={{textAlign:"center"}}>Inquiry</MDBNavLink>
                                        <div className="nav__link-group" style={{zIndex:"2"}}>
                                            <MDBNavLink to="Inquiry" className="nav__link">Inquiry</MDBNavLink>
                                        </div>
                                    </div>
                                </nav>
                            </MDBNavItem>

                            
                            <MDBNavItem className="">
                                <nav className="nav">
                                    <div className="nav__link p-0" style={{width:"100%"}}>
                                        <MDBNavLink to="Notice" className="py-md-3 headerMenu_css" style={{textAlign:"center"}}>Customer</MDBNavLink>
                                        <div className="nav__link-group" style={{zIndex:"2"}}>
                                            <MDBNavLink to="Notice" className="nav__link">Notice</MDBNavLink>
                                            <MDBNavLink to="Comments" className="nav__link">Comments</MDBNavLink>
                                        </div>
                                    </div>
                                </nav>
                            </MDBNavItem>

                        </MDBNavbarNav>

                    </MDBCollapse>
                </MDBNavbar>
            </div>

        <DisplayHeaderBG />

    </div>

    );
  }
}

export default Header;


// 홈화면에서는 출력 안되게 하는 함수
function DisplayHeaderBG() {
    let location = useLocation();
    let display;

    if ( location.pathname === "/" ){
        display = "none"
    } else {
        display = "block"
    }

    //css에서 안해도 백틱형식으로 백그라운드 이미지 불러올수 있음 backgroundImage:`url(${Motto})`
    return (
        <FittedImage fit="cover" src={header_sub_bg} style={{height: "14vw", display}} className="headerBG__css" />
    );

}