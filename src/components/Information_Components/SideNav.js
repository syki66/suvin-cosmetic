import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";



function SideNav () {
        return(
            <div>
            <div className="h1" style={{color:"#7f304e"}}>Information</div>
            
                <MDBNav className="nav-pills nav-justified flex-md-column border border-light" style={{backgroundColor:"white"}} >
                    
                    <MDBNavItem className="border-bottom border-light ">
                        <MDBNavLink to="Company" className="black-text px-3 py-2 sideNavComponent">Company</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem className="border-bottom border-light ">
                        <MDBNavLink to="OfficeMap" className="black-text px-3 py-2 sideNavComponent">Office Map</MDBNavLink>
                    </MDBNavItem>

                </MDBNav>
        
          </div>
        );

}

export default SideNav;