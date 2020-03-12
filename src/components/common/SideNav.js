import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";


/*
    nav-pills 는 기본 파랑색 값으로 클릭했을때 색칠되고,
    nav-fill 은 옆으로 늘려줌 width 100% 느낌
    .nav-justified로 모바일용에서 width 동일하게함
    
    flex-md-column 은 md부터 세로로 배치하겠다는 의미(근데 크기가 제각각임)

    onclick 메소드 집어넣어서 수동으로 사이드네비 만들려다가
    그냥 App.css에 !important 이용해서 .active.sideNavComponent(임의로 클래스네임만듬) 이렇게 붙여써서 and일 경우에 #7f304e 칼라 적용.
    and로 적용한 이유가 헤더의 네비게이션바의 suvincosmetic도 active 영향받아서 그랬음
    그러고 color: white !important 줘서 active일때 글씨 흰색으로 바꿨음.
    라운드 처리된것도 직각으로 바꿈
    
*/


export default function SideNav ({title, subtitle }) {
        return(
            <div>
                <div className="h1" style={{color:"#7f304e"}}>{title}</div>
            
                <MDBNav className="nav-pills nav-justified flex-md-column border border-light" style={{backgroundColor:"white"}} >        
                    {subtitle.map((eachSubtitle) => (
                        <MDBNavItem className="border-bottom border-light">
                            <MDBNavLink to={eachSubtitle} className="black-text px-3 py-2 sideNavComponent">{eachSubtitle}</MDBNavLink>
                        </MDBNavItem>
                    ))}
                </MDBNav>
            </div>
        );

}