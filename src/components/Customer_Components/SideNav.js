import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";



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