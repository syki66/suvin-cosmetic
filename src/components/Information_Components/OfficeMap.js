import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

import SideNav from "./SideNav";

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'


const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;

function OfficeMap() {
    return (
        <MDBContainer className="px-md-0">
            
            <MDBRow className="mt-4">

                <MDBCol size="12" sm="12" md="3">
                    <SideNav />
                </MDBCol>


                <MDBCol size="12" sm="12" md="9">


                    <RenderAfterNavermapsLoaded
                        ncpClientId={CLIENT_ID}
                    >
                        <NaverMap
                            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                            style={{
                                width: '100%',
                                height: '500px',
                            }}
                            defaultCenter={{ lat: 37.4965077, lng: 126.7862828 }}
                            defaultZoom={18}
                        >
                            <Marker
                                position={{ lat: 37.4967, lng: 126.7867 }}
                                animation={1}
                                onClick={() => {
                                    alert('[14566] 경기도 부천시 부천로136번길27 원미어울마당406호')
                                  }}
                            />    
                        </NaverMap>


                    </RenderAfterNavermapsLoaded>



                </MDBCol>



            </MDBRow>
        </MDBContainer>
    );
};

export default OfficeMap;