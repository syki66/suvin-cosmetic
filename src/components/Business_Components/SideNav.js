
import React from 'react';
import { MDBListGroup, MDBListGroupItem} from "mdbreact";



function SideNav() {
    return (


        <MDBListGroup style={{ width: "100%" }}>
            <span className="h1" style={{color:"#7f304e"}}>Business</span>
            <MDBListGroupItem href="#/Competence" hover style={{ backgroundColor: "#7f304e", color: "white" }}>Competence</MDBListGroupItem>
            <MDBListGroupItem href="#/RnD" hover>R&D</MDBListGroupItem>
            <MDBListGroupItem href="#/OEMnODM" hover>OEM&ODM</MDBListGroupItem>
        </MDBListGroup>
    );
}

export default SideNav;