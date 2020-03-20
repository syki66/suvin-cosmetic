import React from 'react';
import { MDBCol, MDBRow } from "mdbreact";

import InnerPageFrame from "../common/InnerPageFrame";

import FittedImage from "react-fitted-image";

const CEO_IMG = "https://user-images.githubusercontent.com/59393359/77157050-f6441980-6ae3-11ea-896f-59ff834df730.jpg";
const Motto = "https://user-images.githubusercontent.com/59393359/77157055-f7754680-6ae3-11ea-9985-95e667930cc6.png";


/*
    business 에서 양식 따오고, 평행사변형 배경 만드는데 하나의 div로는 불가여서 
    먼저 div 하다 더 만들어서 싹 감싸고서 부모를 relative 자식을 absolute로 두고서 박스 두개 겹쳐서 했음 zIndex가 깊이 조정
    삼각형 사각형 원만 이용해서 만들수 있는듯

    글 줄바꾸는거는 br태그에다가 display block none 이거 써서 해결
 */


export default function Company() {
    return (
        <InnerPageFrame
            title="Information"
            subtitle={["Company", "Office Map"]}
        >

            <div className="h2 py-2">Company</div>

            <div>
                <div className="h4 border-top border-light pt-5 pb-1">Management Motto</div>

                <MDBRow>
                    <MDBCol size="12">
                        <div style={{ position: "relative", zIndex: "1" }}>
                            <div
                                style={{
                                    display: "flex",
                                    position: "absolute",
                                    zIndex: "-1",
                                    width: "100%",
                                    height: "260px"
                                }}>

                                <div style={{ display: "flex", flexDirection: "column", flex: "1", backgroundColor: "#f0e2e8" }}>
                                    <div
                                        style={{
                                            backgroundColor: "#f0e2e8",
                                            height: "50px"

                                        }}
                                    ></div>

                                    <div
                                        style={{
                                            borderLeft: "120px solid white",
                                            borderTop: "210px solid #f0e2e8",

                                            width: "100%",
                                            height: "100%",
                                            flex: "1"

                                        }}
                                    ></div>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                                    <div
                                        style={{
                                            borderLeft: "140px solid #f0e2e8",
                                            borderTop: "260px solid transparent",

                                            width: "0",
                                            height: "100%",
                                            flex: "1"
                                        }}
                                    ></div>
                                </div>

                            </div>

                            <FittedImage fit="cover" src={Motto}
                                style={{
                                    display: "flex",
                                    position: "absolute",
                                    zIndex: "-2",
                                    height: "260px",
                                    objectPosition: "right"

                                }} />

                            <ul className="py-4 mb-0 pl-2 pl-lg-4 pl-xl-5" style={{ backgroundColor: "transparent", height: "260px" }}>
                                <div className="h5 py-1" style={{ color: "#444444" }}><b>아름다움을 위한 기술개발과 가치창출</b></div>
                                <ol>
                                    <li>Competence on technology</li>
                                    <li style={{ marginLeft: "15px" }}>Value creation for customer satisfaction</li>
                                    <li style={{ marginLeft: "30px" }}>Respect for social value</li>
                                </ol>
                                <ol className="pt-2" style={{ marginLeft: "45px" }} >
                                    <li>기술적 우위확보</li>
                                    <li style={{ marginLeft: "15px" }}>고객만족을 위한 가치창출</li>
                                    <li style={{ marginLeft: "30px" }}>사회적 가치창출</li>
                                </ol>
                            </ul>

                        </div>
                    </MDBCol>

                </MDBRow>
            </div>

            <div>
                <div className="h4 border-top border-light pt-5 pb-1">Company</div>
                <div className="h5 py-1" style={{ color: "#7f304e" }}><b>최고 품질의 제품으로 고객과 함께 새롭게 성장하는 수빈코스메틱</b></div>

                <MDBRow>
                    <MDBCol size="12">

                        <div style={{ position: "relative", zIndex: "1" }}>

                            <div className="cssShapeBox_disappear" style={{ display: "none" }}>

                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateRows: "1fr 1fr 1fr",
                                        position: "absolute",
                                        zIndex: "-1",
                                        width: "100%",
                                        height: "100%"
                                    }}>

                                    <div style={{ backgroundColor: "transparent" }}></div>

                                    <div style={{
                                        borderLeft: "848px solid transparent",
                                        borderBottom: "86px solid #f4f4f4",

                                        width: "100%",
                                        height: "100%",
                                    }}></div>

                                    <div style={{ backgroundColor: "#f4f4f4" }}></div>

                                </div>
                            </div>

                            <div>
                                <div className="pb-3 pb-xl-0">
                                    Founded on the base of the patented technology about pore care by President Kim Duckhoon, a 30-year cosmetic R&D <br style={{ display: "none" }} className="br__appear" />
                                        specialist, Suvin has presently a wide and competitive product line, global network and diverse<br style={{ display: "none" }} className="br__appear" />
                                        distribution Channel. Future development and prosperity is expected with<br style={{ display: "none" }} className="br__appear" />
                                        faithful customers and product reputation on market.
                                    </div>
                                <div className="p-4 py-xl-5 border border-bottom-0 border-light after_appear_cssShapeBox" style={{ backgroundColor: "#f4f4f4" }}>
                                    모공관리 특허기술을 기반으로 설립한<br style={{ display: "none" }} className="br__appear" />
                                        수빈코스메틱은 경쟁력 있는 다양한 제품들을 여러 판매망를 통하여<br style={{ display: "none" }} className="br__appear" />
                                        시장에 선보이고 있으며 고품질 제품의 신뢰를 바탕으로 항상 고객과 함께하고 있습니다.
                                    </div>
                            </div>

                        </div>

                    </MDBCol>
                </MDBRow>
            </div>

            <div>
                <div className="h4 border-top border-light pt-5 pb-1">THE HISTORY OF COMPANY</div>

                <div className="pb-5 pt-3">
                    <MDBRow className="py-2 my-2">
                        <MDBCol size="12" lg="1" className="h5 font-weight-bold mb-0 py-1" style={{ color: "#6f6052" }}>2009</MDBCol>
                        <MDBCol size="12" lg="11">
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>09</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>SUVIN COSMETIC is Established</MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>10</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>ODM supply to JSM duty free shop</MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="py-2 my-2">
                        <MDBCol size="12" lg="1" className="h5 font-weight-bold mb-0 py-1" style={{ color: "#6f6052" }}>2011</MDBCol>
                        <MDBCol size="12" lg="11">
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>06</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>Launching Aesthetic Products</MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="py-2 my-2">
                        <MDBCol size="12" lg="1" className="h5 font-weight-bold mb-0 py-1" style={{ color: "#6f6052" }}>2012</MDBCol>
                        <MDBCol size="12" lg="11">
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>05</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>Technology Cooperation with Dongguk University Exporting pore reducing pack to Lilisha International in China</MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>07</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>Exporting Suvin products to JSM in Tailand</MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="py-2 my-2">
                        <MDBCol size="12" lg="1" className="h5 font-weight-bold mb-0 py-1" style={{ color: "#6f6052" }}>2013</MDBCol>
                        <MDBCol size="12" lg="11">
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>03</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>The Mixture for Cleansing with Demodex Removal (Korean Patent No. 10- 1022550)</MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>11</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>Certification of Venture Company</MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="py-2 my-2">
                        <MDBCol size="12" lg="1" className="h5 font-weight-bold mb-0 py-1" style={{ color: "#6f6052" }}>2014</MDBCol>
                        <MDBCol size="12" lg="11">
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>02</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>Agreement of Cooperation with Yuhan University</MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>11</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>Opening booth in Seoul Coex Exhibition</MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="py-2 my-2">
                        <MDBCol size="12" lg="1" className="h5 font-weight-bold mb-0 py-1" style={{ color: "#6f6052" }}>2015</MDBCol>
                        <MDBCol size="12" lg="11">
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>03</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>Nomination of support fund from Korean Institute of Company Support</MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol size="1" className="font-weight-bold" style={{ color: "#444444", textAlign: "center" }}>04</MDBCol>
                                <MDBCol size="11" style={{ color: "#777777" }}>Opening booth in Seoul Coex- Health & Beauty Exhibition</MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                </div>
            </div>

            <div>
                <div className="h4 border-top border-light pt-5 pb-1">CEO Comments</div>

                <p className="pt-3">
                    Dear our customers and business partners! <br />
                            Based on the world-class patented pore care technology, Suvin products are well-known and beloved among
                            foreign tourists in Korea. Our management philosophy is to develop and supply high-end quality products for
                            beauty and health of our customers. Suvin product line is very competitive and marketable with pore care pack,
                            snail musin products, mask packs and stem cell application. We will do our best and sincere efforts to create high
                            values for our customers and partners. Thank you.
                        </p>

                <div className="h3 pb-5 mb-0" style={{ textAlign: "center", fontFamily: "Brush Script MT, Brush Script Std, cursive" }}>President Kim Duck-hoon</div>
            </div>

            <div className="border-top border-light">
                <MDBRow>
                    <MDBCol size="12" md="8">
                        <div className="h4 pt-5 pb-1">CEO 인사말</div>
                        <p className="pt-3">
                            화장품 연구개발 경력 30년의 연구전문가가 고객이 만족하고 신뢰할 수 있는 화장품을 직접 개발하여 공급합니다.
                            세계적으로 유일한 모공 관리 특허기술로 만들어진 모공축소팩, 달팽이크림, 마스크팩, 줄기세포크림등 최고품질의 제품으로
                            고객님과 같이 시장을 선도하는 파트너가 되겠습니다.
                                </p>

                        <div className="h3 pb-5 mb-0" style={{ textAlign: "center", fontFamily: "cursive" }}>대표 김 덕훈</div>


                    </MDBCol>

                    <MDBCol size="12" md="4" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src={CEO_IMG} className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </div>

        </InnerPageFrame>
    );
};