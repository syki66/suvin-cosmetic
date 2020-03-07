import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

import SideNav from "./SideNav";



/*
    business 에서 양식 따오고, 평행사변형 배경 만드는데 하나의 div로는 불가여서 
    먼저 div 하다 더 만들어서 싹 감싸고서 부모를 relative 자식을 absolute로 두고서 박스 두개 겹쳐서 했음 zIndex가 깊이 조정
    삼각형 사각형 원만 이용해서 만들수 있는듯

    글 줄바꾸는거는 br태그에다가 display block none 이거 써서 해결
 */

function Company() {
    return (
        <MDBContainer className="px-md-0">
            
            <MDBRow className="mt-4">

                <MDBCol size="12" sm="12" md="3">
                    <SideNav />
                </MDBCol>




                <MDBCol size="12" sm="12" md="9">







                    <div className="h2 py-2">Company</div>



                    <div className="h4 border-top border-light pt-5 pb-1">Management Motto</div>

                    <MDBRow className="">
                        
                        <MDBCol size="12" className="">

                            <div style={{position:"relative", zIndex:"1"}}>




                                <div
                                    style={{
                                        display:"flex",
                                        position: "absolute",
                                        zIndex:"-1",
                                        width:"100%",
                                        height:"100%"                                     
                                }}>



                                    <div style={{ display:"flex", flexDirection:"column", flex:"3", backgroundColor:"#f0e2e8" }}>
                                        <div
                                            style={{
                                                backgroundColor:"#f0e2e8",
                                                height:"50px"
                                                
                                            }}
                                        ></div>

                                        <div
                                            style={{
                                                borderLeft: "150px solid white",
                                                borderTop: "190px solid #f0e2e8",

                                                width:"100%",
                                                height:"100%",
                                                flex:"1"
                                                
                                            }}
                                        ></div>
                                    </div>
                                    

                                    <div style={{ display:"flex", flexDirection:"column", flex:"2" }}>
                                        <div
                                            style={{
                                                borderLeft: "170px solid #f0e2e8",
                                                borderTop: "237px solid transparent",

                                                width:"0",
                                                height:"100%",
                                                flex:"1"
                                            }}
                                        ></div>
                                    </div>




                                </div>



                                <ul className="py-4 mb-0" style={{ backgroundColor: "transparent" }}>
                                    <div className="h5 py-1" style={{ color: "#444444" }}><b>아름다움을 위한 기술개발과 가치창출</b></div>
                                    <ol>
                                        <li>Competence on technology</li>
                                        <li style={{marginLeft:"20px"}}>Value creation for customer satisfaction</li>
                                        <li style={{marginLeft:"40px"}}>Respect for social value</li>
                                    </ol>
                                    <ol style={{marginLeft:"60px"}} className="pt-2">
                                        <li>기술적 우위확보</li>
                                        <li style={{marginLeft:"20px"}}>고객만족을 위한 가치창출</li>
                                        <li style={{marginLeft:"40px"}}>사회적 가치창출</li>
                                    </ol>
                                </ul>

                            </div>
                        </MDBCol>

                    </MDBRow>



                    





                    <div className="h4 border-top border-light pt-5 pb-1">Company</div>
                    <div className="h5 py-1" style={{ color: "#7f304e" }}><b>최고 품질의 제품으로 고객과 함께 새롭게 성장하는 수빈코스메틱</b></div>


                    <MDBRow className="">
                        <MDBCol size="12" className="">

                            <div style={{position:"relative", zIndex:"1"}}>

                                <div className="cssShapeBox_disappear" style={{display:"none"}}>
                                    
                                    
                                    
                                    <div
                                        style={{
                                            display:"grid",
                                            gridTemplateRows:"1fr 1fr 1fr",
                                            position: "absolute",
                                            zIndex:"-1",
                                            width:"100%",
                                            height:"100%"                                        
                                    }}>


                                        <div style={{backgroundColor:"transparent"}}></div>


                                        <div style={{
                                            borderLeft:"848px solid transparent",
                                            borderBottom: "86px solid #f4f4f4",
                                            
                                            width:"100%",
                                            height:"100%",
                                        }}></div>


                                        <div style={{backgroundColor:"#f4f4f4"}}></div>
                                        

                                    </div>
                                </div>







                                <div>
                                    <div className="pb-3 pb-xl-0">
                                        Founded on the base of the patented technology about pore care by President Kim Duckhoon, a 30-year cosmetic R&D <br style={{display:"none"}} className="br__appear"/>
                                        specialist, Suvin has presently a wide and competitive product line, global network and diverse<br style={{display:"none"}} className="br__appear"/>
                                        distribution Channel. Future development and prosperity is expected with<br style={{display:"none"}} className="br__appear"/>
                                        faithful customers and product reputation on market.
                                    </div>
                                    <div className="p-4 py-xl-5 border border-bottom-0 border-light after_appear_cssShapeBox" style={{backgroundColor:"#f4f4f4"}}>
                                        모공관리 특허기술을 기반으로 설립한<br style={{display:"none"}} className="br__appear"/>
                                        수빈코스메틱은 경쟁력 있는 다양한 제품들을 여러 판매망를 통하여<br style={{display:"none"}} className="br__appear"/>
                                        시장에 선보이고 있으며 고품질 제품의 신뢰를 바탕으로 항상 고객과 함께하고 있습니다.
                                    </div>
                                </div>

                            </div>

                        </MDBCol>
                    </MDBRow>









                    <div className="h4 border-top border-light pt-5 pb-1">THE HISTORY OF COMPANY</div>

















                </MDBCol>



            </MDBRow>
        </MDBContainer>
    );
};

export default Company;