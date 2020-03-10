import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";



function Inquiry_SideNav () {
        return(
            <div>
            <div className="h1" style={{color:"#7f304e"}}>Inquiry</div>
            
                <MDBNav className="nav-pills nav-justified flex-md-column border border-light" style={{backgroundColor:"white"}} >
                    
                    <MDBNavItem className="border-bottom border-light ">
                        <MDBNavLink to="Inquiry" className="black-text px-3 py-2 sideNavComponent">Inquiry</MDBNavLink>
                    </MDBNavItem>

                </MDBNav>
        
          </div>
        );

}

export default Inquiry_SideNav;