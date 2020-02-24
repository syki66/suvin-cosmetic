import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";


/*
    nav-pills 는 기본 파랑색 값으로 클릭했을때 색칠되고,
    nav-fill 은 옆으로 늘려줌 width 100% 느낌
    
    flex-md-column 은 md부터 세로로 배치하겠다는 의미(근데 크기가 제각각이라 안써야겠다.)

    onclick 메소드 집어넣어서 수동으로 사이드네비 만들었음
*/


class SideNav extends React.Component {
    state = {
        clickedNav: 1
        
      };




    toggleNav = (index) => {
        this.setState({ clickedNav:index });
        
        if (index !== this.state.clickedNav) {
            
            console.log(this.state.clickedNav)
            
        } else {
            console.log("same")
        }

    }

    render (){
        return(
            <div>
            <div className="h1" style={{color:"#7f304e"}}>Business</div>
            
                <MDBNav className="flex-md-column border border-light" style={{backgroundColor:"white"}} >
                    
                    <MDBNavItem hover className="border-bottom border-light ">
                        <MDBNavLink to="Competence" className="black-text px-3 py-2" style={{}} onClick={() => this.toggleNav(1)}>Competence</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem hover className="border-bottom border-light ">
                        <MDBNavLink to="RnD" className="black-text px-3 py-2" style={{}} onClick={() => this.toggleNav(2)}>R & D</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem hover className=" ">
                        <MDBNavLink to="OEMnODM" className="black-text px-3 py-2" style={{}} onClick={() => this.toggleNav(3)}>OEM & ODM</MDBNavLink>
                    </MDBNavItem>

                </MDBNav>
        
          </div>
        );
      };


}

export default SideNav;