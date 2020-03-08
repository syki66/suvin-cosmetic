import React from "react";

import { MDBContainer, MDBCol, MDBRow } from "mdbreact";


import FittedImage from "react-fitted-image";

import Global_SideNav from "./SideNavs/Global_SideNav";




function Global_Network() {
    return (






        <MDBContainer className="px-md-0">
            
            <MDBRow className="mt-4">

                <MDBCol size="12" sm="12" md="3">
                    <Global_SideNav />
                </MDBCol>


                <MDBCol size="12" sm="12" md="9">

                    <div className="h2 py-2">Global Network</div>



                    <div className="h4 border-top border-light pt-5 pb-1">Affiliation of Global Business Partners</div>

                    <MDBRow className="">
                        <MDBCol size="12" className="">

                            <ol className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                <li>Development of cosmetics focused on customer satisfaction</li>
                                <li>Top quality products with foremost and new technology</li>
                                <li>High competitiveness of top-level products with sound R&D conception and product quality</li>
                            </ol>

                        </MDBCol>
                    </MDBRow>
                    




                    <MDBRow className="pt-4 pb-5 ">

                        <MDBCol size="12" lg="4"  className="mb-0" style={{display:"flex", alignItems:"center"}}>
                            
                        </MDBCol>

                        <MDBCol size="12" lg="8">                                
                            <p className="py-3 mb-md-0 " style={{  }}>
                                수빈코스메틱 연구소에서는 아름다움을 선사하기 위하여 끊임없는 연구를 통해 업계 최고수준의 기술력과 노하우로 고객의 성공방향을 제시하는 제품생산과 OEM/ODM 시스템을 추구합니다. 국내 유수의 화장품회사 연구개발 경력 30년의 연구전문가가 고객이 만족하고 신뢰할 수 있는 화장품을 직접 개발하여 공급합니다. 수빈코스메틱은 언제나 준비되어 있습니다. “명장이 만든 명품”을 만나 보십시오.
                            </p>
                        </MDBCol>

                    </MDBRow>







                    





                </MDBCol>



            </MDBRow>
        </MDBContainer>






    );
}

export default Global_Network;