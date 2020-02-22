import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import LightboxPage from "./LightboxPage";

/*
    일단 그리드 레이아웃으로 나눠서 글쓸부분과 네비부분 나눴고, MDB에서 리스트그룹 가져와서 그리드 100퍼센트주고 크기 조정했음
    그리드는 합해서 가로는 최대 12까지만 되는듯.
*/



function Competence() {
    return (
        <MDBContainer>
            <span className="h1" style={{color:"#7f304e"}}>Business</span>
            <MDBRow>
                <MDBCol size="3">
                <MDBListGroup style={{ width: "100%" }}>
                    <MDBListGroupItem href="#/Competence" hover style={{ backgroundColor: "#7f304e", color: "white" }}>Competence</MDBListGroupItem>
                    <MDBListGroupItem href="#/RnD" hover>R&D</MDBListGroupItem>
                    <MDBListGroupItem href="#/OEMnODM" hover>OEM&ODM</MDBListGroupItem>
                </MDBListGroup>
                </MDBCol>


                <MDBCol size="9">
                    <div className="h3">Competence</div>

                    <div className="border-bottom border-light">
                        <div className="h5">Competitive Technology</div>
                        <div className="h6" style={{color:"#7f304e"}}><b>특허 인증의 경쟁력 있는 기술</b></div>
                            <ul className="px-5 py-3 border border-light" style={{backgroundColor:"#f4f4f4"}}>
                                <li>Management with technological background of 30-year R&D expertise</li>
                                <li>Pore shrinking pack with world class patent certified in 2013</li>
                                <li>30년 축적된 R&D에 기반한 기술우선경영</li>
                                <li>2013년 세계유일 특허로 탄생한 모공축소팩</li>
                            </ul>
                    </div>

                    <div className="border-bottom border-light">
                        <div className="h5">Success of duty-free sales</div>
                        <div className="h6" style={{color:"#7f304e"}}><b>면세점 판매로 인정받은 품질</b></div>
                            <ul className="px-5 py-3 border border-light" style={{backgroundColor:"#f4f4f4"}}>
                                <li>Sale of main products on duty-free shops from 2009</li>
                                <li>High reputation about quality among foreign customers</li>
                                <li>2009년부터 국내면세점 독점판매</li>
                                <li>품질에 대한 외국들의 좋은 평가</li>
                            </ul>
                    </div>

                    <div className="border-bottom border-light">
                        <div className="h5">Overseas Marketing</div>
                        <div className="h6" style={{color:"#7f304e"}}><b>글로벌 판매망 강화</b></div>
                            <ul className="px-5 py-3 border border-light" style={{backgroundColor:"#f4f4f4"}}>
                                <li>Marketing in main cosmetic exhibitions</li>
                                <li>Affiliation of business partnership in main countries</li>
                                <li>주요 화장품 전시회 적극 참가</li>
                                <li>주요국 해외파트너와의 협력 강화</li>
                            </ul>
                    </div>

                    <div className="border-bottom border-light">
                        <div className="h5">Diverse distribution channel</div>
                        <div className="h6" style={{color:"#7f304e"}}><b>국내 유통망 다양화</b></div>
                            <ul className="px-5 py-3 border border-light" style={{backgroundColor:"#f4f4f4"}}>
                                <li>On-line/Open market sales</li>
                                <li>Door to door sale, Home shopping, PB marketing</li>
                                <li>온라인/오픈 마켓 판매망 구축</li>
                                <li>방문판매, 홈쇼핑, 대형유통망 자체브랜드 분야 진출</li>
                            </ul>
                    </div>

                    <div className="border-bottom border-light">
                        <div className="h5">Certificates</div>
                        <div className="h6" style={{color:"#7f304e"}}><b>특허 인증의 경쟁력 있는 기술</b></div>

                    </div>

                    <LightboxPage />


                </MDBCol>


            </MDBRow>
        </MDBContainer>
    );
};

export default Competence;