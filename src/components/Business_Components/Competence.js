import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

import SideNav from "./SideNav";



import certificate from "./Business_image/Competence_IMGs/certificate.jpg";
import certificate_01 from "./Business_image/Competence_IMGs/certificate_01.jpg";
import certificate_02 from "./Business_image/Competence_IMGs/certificate_02.jpg";
import certificate_03 from "./Business_image/Competence_IMGs/certificate_03.jpg";
import certificate_04 from "./Business_image/Competence_IMGs/certificate_04.jpg";
import certificate_05 from "./Business_image/Competence_IMGs/certificate_05.jpg";
import certificate_06 from "./Business_image/Competence_IMGs/certificate_06.jpg";
import certificate_07 from "./Business_image/Competence_IMGs/certificate_07.jpg";
import certificate_08 from "./Business_image/Competence_IMGs/certificate_08.jpg";
import certificate_09 from "./Business_image/Competence_IMGs/certificate_09.jpg";
import certificate_10 from "./Business_image/Competence_IMGs/certificate_10.jpg";
import certificate_11 from "./Business_image/Competence_IMGs/certificate_11.jpg";
import certificate_12 from "./Business_image/Competence_IMGs/certificate_12.jpg";

import dutyfreeStore from "./Business_image/Competence_IMGs/dutyfreeStore.jpg";
import overseasMarketing from "./Business_image/Competence_IMGs/overseasMarketing.jpg";
import diverseDistribution from "./Business_image/Competence_IMGs/diverseDistribution.jpg";

/*
    일단 그리드 레이아웃으로 나눠서 글쓸부분과 네비부분 나눴고, MDB에서 리스트그룹 가져와서 그리드 100퍼센트주고 크기 조정했음
    그리드는 합해서 가로는 최대 12까지만 되는듯.

    글쓰는 부분도 8:4 비율로 글과 사진으로 그리드 나누었고, 하단부분에는 증명서 2열로 p-1만 줬음



    py-5 로 각 칸들 y축 패딩 넣어주고, border border-light 로 회색 테투리들 주고

    사진들은 z-depth-1로 그림자 주고, display:"flex", alignItems:"center" 로 수직 중앙정렬


    그러고 xs와 sm에서는 size값 12로 넣어서 사이드네비 상단에 배치하고, 사진들 글 오른쪽에서 하단으로 가게끔 배치함

    첫번째 콜롬 특허증때메 컨텐츠가 붕 떠서 md 이상부터만 패딩 없앰 (모바일버전에 구분선때메 나머지 크기는 패딩 붙임)


    메뉴 바꿀때 fade효과 추가해야겠다.

    나눔글꼴 적용하기


    원래 컨테이너에 p-0 주고서 양옆으로 쫙 붙였는데 가로스크롤 생겨서 그냥 없애버림
*/




function Competence() {
    return (
        <MDBContainer className="px-md-0">
            
            <MDBRow className="mt-4">

                <MDBCol size="12" sm="12" md="3">
                    <SideNav />
                </MDBCol>


                <MDBCol size="12" sm="12" md="9">

                    <div className="h2 py-2">Competence</div>


                    <div className="border-top border-light">
                        <MDBRow className="pb-5 pb-md-0 ">
                            <MDBCol size="12" md="8" className=" pt-5">

                                <div className="h4">Competitive Technology</div>
                                <div className="h5 py-1" style={{ color: "#7f304e" }}><b>특허 인증의 경쟁력 있는 기술</b></div>
                                <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                    <li>Management with technological background of 30-year R&D expertise</li>
                                    <li>Pore shrinking pack with world class patent certified in 2013</li>
                                    <li>30년 축적된 R&D에 기반한 기술우선경영</li>
                                    <li>2013년 세계유일 특허로 탄생한 모공축소팩</li>
                                </ul>
                            </MDBCol>

                            <MDBCol size="12" md="4" style={{display:"flex", alignItems:"center"}}>
                                <img src={certificate} className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                        </MDBRow>
                    </div>

                    <div className="border-top border-light">
                        <MDBRow className="py-5">
                            <MDBCol size="12" md="8">
                                    <div className="h4">Success of duty-free sales</div>
                                    <div className="h5 py-1" style={{ color: "#7f304e" }}><b>면세점 판매로 인정받은 품질</b></div>
                                    <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                        <li>Sale of main products on duty-free shops from 2009</li>
                                        <li>High reputation about quality among foreign customers</li>
                                        <li>2009년부터 국내면세점 독점판매</li>
                                        <li>품질에 대한 외국들의 좋은 평가</li>
                                    </ul>
                            </MDBCol>

                            <MDBCol size="12" md="4" style={{display:"flex", alignItems:"center"}}>
                                <img src={dutyfreeStore} className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                        </MDBRow>
                    </div>

                    <div className="border-top border-light">
                        <MDBRow className="py-5">
                            <MDBCol size="12" md="8">
                                    <div className="h4">Overseas Marketing</div>
                                    <div className="h5 py-1" style={{ color: "#7f304e" }}><b>글로벌 판매망 강화</b></div>
                                    <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                        <li>Marketing in main cosmetic exhibitions</li>
                                        <li>Affiliation of business partnership in main countries</li>
                                        <li>주요 화장품 전시회 적극 참가</li>
                                        <li>주요국 해외파트너와의 협력 강화</li>
                                    </ul>
                            </MDBCol>

                            <MDBCol size="12" md="4" style={{display:"flex", alignItems:"center"}}>
                                <img src={overseasMarketing} className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                        </MDBRow>
                    </div>

                    <div className="border-top border-light">
                        <MDBRow className="py-5">
                            <MDBCol size="12" md="8">
                                    <div className="h4">Diverse distribution channel</div>
                                    <div className="h5 py-1" style={{ color: "#7f304e" }}><b>국내 유통망 다양화</b></div>
                                    <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                        <li>On-line/Open market sales</li>
                                        <li>Door to door sale, Home shopping, PB marketing</li>
                                        <li>온라인/오픈 마켓 판매망 구축</li>
                                        <li>방문판매, 홈쇼핑, 대형유통망 자체브랜드 분야 진출</li>
                                    </ul>
                            </MDBCol>

                            <MDBCol size="12" md="4" style={{display:"flex", alignItems:"center"}}>
                                <img src={diverseDistribution} className="img-fluid z-depth-1" alt="" />
                            </MDBCol>
                        </MDBRow>
                    </div>


                    <div className="py-5 border-top border-light">
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