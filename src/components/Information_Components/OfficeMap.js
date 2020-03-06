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



                    <div className="h2 py-2">Office Map</div>

                    <div className="h4 border-top border-light pt-5 pb-3">Address</div>

                    <div style={{color:"gray"}} className="font-weight-bold">27, Bucheon-ro 136beon-gil, Bucheon-si, Gyeonggi-do, Republic of Korea</div>
                    <div style={{color:"gray"}}>[14566] 경기도 부천시 부천로 136번길 27 원미어울마당 406호</div>

                    <div style={{color:"gray"}} className="font-weight-bold pt-4"><span style={{color:"#6e391a"}}>Tel :</span> 1688-9028</div>

                    <div style={{color:"gray"}} className="font-weight-bold pb-5"><span style={{color:"#6e391a"}}>Mobile :</span> +82-10-6644-3665,   +82-10-2010-4261(Overseas Marketing)</div>


                    <RenderAfterNavermapsLoaded
                        ncpClientId={CLIENT_ID}
                    >
                        <NaverMap
                            className="border border-light mb-5"
                            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                            style={{
                                width: '100%',
                                height: '500px',
                            }}
                            defaultCenter={{ lat: 37.4967, lng: 126.7867 }}
                            defaultZoom={18}
                        >
                            <Marker
                                position={{ lat: 37.4967, lng: 126.7867 }}
                                animation={1}
                                onClick={() => {
                                    alert('[14566] 경기도 부천시 부천로 136번길 27 원미어울마당 406호');
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