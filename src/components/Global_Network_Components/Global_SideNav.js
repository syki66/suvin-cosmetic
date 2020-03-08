import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";



function Global_SideNav () {
        return(
            <div>
            <div className="h1" style={{color:"#7f304e"}}>Global Network</div>
            
                <MDBNav className="nav-pills nav-justified flex-md-column border border-light" style={{backgroundColor:"white"}} >
                    
                    <MDBNavItem className="border-bottom border-light ">
                        <MDBNavLink to="Global_Network" className="black-text px-3 py-2 sideNavComponent">Global Network</MDBNavLink>
                    </MDBNavItem>

                </MDBNav>
        
          </div>
        );

}

export default Global_SideNav;