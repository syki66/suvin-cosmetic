import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

import SideNav from "./SideNav";




function Company() {
    return (
        <MDBContainer className="px-md-0">
            
            <MDBRow className="mt-4">

                <MDBCol size="12" sm="12" md="3">
                    <SideNav />
                </MDBCol>


                <MDBCol size="12" sm="12" md="9">




                </MDBCol>



            </MDBRow>
        </MDBContainer>
    );
};

export default Company;