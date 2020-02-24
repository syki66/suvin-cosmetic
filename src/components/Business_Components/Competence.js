import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

import SideNav from "./SideNav";



import certificate from "./Business_image/certificate.jpg";
import certificate_01 from "./Business_image/certificate_01.jpg";
import certificate_02 from "./Business_image/certificate_02.jpg";
import certificate_03 from "./Business_image/certificate_03.jpg";
import certificate_04 from "./Business_image/certificate_04.jpg";
import certificate_05 from "./Business_image/certificate_05.jpg";
import certificate_06 from "./Business_image/certificate_06.jpg";
import certificate_07 from "./Business_image/certificate_07.jpg";
import certificate_08 from "./Business_image/certificate_08.jpg";
import certificate_09 from "./Business_image/certificate_09.jpg";
import certificate_10 from "./Business_image/certificate_10.jpg";
import certificate_11 from "./Business_image/certificate_11.jpg";
import certificate_12 from "./Business_image/certificate_12.jpg";

import dutyfreeStore from "./Business_image/dutyfreeStore.jpg";
import overseasMarketing from "./Business_image/overseasMarketing.jpg";
import diverseDistribution from "./Business_image/diverseDistribution.jpg";

/*
    일단 그리드 레이아웃으로 나눠서 글쓸부분과 네비부분 나눴고, MDB에서 리스트그룹 가져와서 그리드 100퍼센트주고 크기 조정했음
    그리드는 합해서 가로는 최대 12까지만 되는듯.

    글쓰는 부분도 8:4 비율로 글과 사진으로 그리드 나누었고, 하단부분에는 증명서 2열로 p-1만 줬음



    py-5 로 각 칸들 y축 패딩 넣어주고, border border-light 로 회색 테투리들 주고

    사진들은 z-depth-1로 그림자 주고, display:"flex", alignItems:"center" 로 수직 중앙정렬




    메뉴 바꿀때 fade효과 추가해야겠다.

    나눔글꼴 적용하기
*/




function Competence() {
    return (
        <MDBContainer className="so_special ">
            
            <MDBRow className="mt-4">

                <MDBCol size="12" sm="12">
                    <SideNav />
                </MDBCol>


                <MDBCol size="12" sm="12">

                    <div className="h2 py-2">Competence</div>



                    <MDBRow className="border-bottom border-top border-light">
                        <MDBCol size="8" className="pt-5">

                            <div className="h4">Competitive Technology</div>
                            <div className="h5 py-1" style={{ color: "#7f304e" }}><b>특허 인증의 경쟁력 있는 기술</b></div>
                            <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                <li>Management with technological background of 30-year R&D expertise</li>
                                <li>Pore shrinking pack with world class patent certified in 2013</li>
                                <li>30년 축적된 R&D에 기반한 기술우선경영</li>
                                <li>2013년 세계유일 특허로 탄생한 모공축소팩</li>
                            </ul>
                        </MDBCol>

                        <MDBCol size="4" style={{display:"flex", alignItems:"center"}}>
                            <img src={certificate} className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </MDBRow>


                    <MDBRow className="border-bottom border-light py-5">
                        <MDBCol size="8">
                                <div className="h4">Success of duty-free sales</div>
                                <div className="h5 py-1" style={{ color: "#7f304e" }}><b>면세점 판매로 인정받은 품질</b></div>
                                <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                    <li>Sale of main products on duty-free shops from 2009</li>
                                    <li>High reputation about quality among foreign customers</li>
                                    <li>2009년부터 국내면세점 독점판매</li>
                                    <li>품질에 대한 외국들의 좋은 평가</li>
                                </ul>
                        </MDBCol>

                        <MDBCol size="4" style={{display:"flex", alignItems:"center"}}>
                            <img src={dutyfreeStore} className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </MDBRow>


                    <MDBRow className="border-bottom border-light py-5">
                        <MDBCol size="8">
                                <div className="h4">Overseas Marketing</div>
                                <div className="h5 py-1" style={{ color: "#7f304e" }}><b>글로벌 판매망 강화</b></div>
                                <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                    <li>Marketing in main cosmetic exhibitions</li>
                                    <li>Affiliation of business partnership in main countries</li>
                                    <li>주요 화장품 전시회 적극 참가</li>
                                    <li>주요국 해외파트너와의 협력 강화</li>
                                </ul>
                        </MDBCol>

                        <MDBCol size="4" style={{display:"flex", alignItems:"center"}}>
                            <img src={overseasMarketing} className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </MDBRow>


                    <MDBRow className="border-bottom border-light py-5">
                        <MDBCol size="8">
                                <div className="h4">Diverse distribution channel</div>
                                <div className="h5 py-1" style={{ color: "#7f304e" }}><b>국내 유통망 다양화</b></div>
                                <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                    <li>On-line/Open market sales</li>
                                    <li>Door to door sale, Home shopping, PB marketing</li>
                                    <li>온라인/오픈 마켓 판매망 구축</li>
                                    <li>방문판매, 홈쇼핑, 대형유통망 자체브랜드 분야 진출</li>
                                </ul>
                        </MDBCol>

                        <MDBCol size="4" style={{display:"flex", alignItems:"center"}}>
                            <img src={diverseDistribution} className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                    </MDBRow>



                    <div className="py-5">
                        <div className="h4">Certificates</div>
                        <div className="h5 py-1" style={{ color: "#7f304e" }}><b>특허 인증의 경쟁력 있는 기술</b></div>

                        <MDBRow>
                            <MDBCol className="p-1"><img src={certificate_01} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_02} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_03} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_04} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_05} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_06} className="img-fluid border border-light" alt="" /></MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol className="p-1"><img src={certificate_07} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_08} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_09} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_10} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_11} className="img-fluid border border-light" alt="" /></MDBCol>
                            <MDBCol className="p-1"><img src={certificate_12} className="img-fluid border border-light" alt="" /></MDBCol>
                        </MDBRow>
                    </div>


                </MDBCol>



            </MDBRow>
        </MDBContainer>
    );
};

export default Competence;