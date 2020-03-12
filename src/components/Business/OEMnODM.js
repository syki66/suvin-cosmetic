import React from "react";
import { MDBCol, MDBRow } from "mdbreact";

import FittedImage from "react-fitted-image";

import InnerPageFrame from "../common/InnerPageFrame";

import contract from "../../images/Business/OEMnODM/contract.jpg";
import shaking_hands from "../../images/Business/OEMnODM/shaking_hands.jpg";
import consulting from "../../images/Business/OEMnODM/consulting.jpg";
import production from "../../images/Business/OEMnODM/production.png";
import product from "../../images/Business/OEMnODM/product.png";
import procurement from "../../images/Business/OEMnODM/procurement.jpg";


/*
    img의 MDBcol 에 p-0 해서 최대한 가깝게 붙임
    사진과 글 일자 정렬 위해서 definition에 row 하나 줘버림
    회색박스에 기본적으로 my-3 이 적용되있음

    "react-fitted-image" 이거 이용해서 이미지 cover 시킴

    disappear는 사용자 정의 클래스고, medium부터 사진 나오도록함
*/


export default function OEMnODM() {
    return (
        <InnerPageFrame
            title="Business"
            subtitle={["Competence", "R & D", "OEM & ODM"]}
        >

            <div className="h2 py-2">OEM & ODM</div>

            <div>
                <div className="h4 border-top border-light pt-5 pb-1">Definition</div>

                <MDBRow>
                    <MDBCol size="12" md="10">
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li><span className="font-weight-bold">OEM</span> : Equipment Manufacturing</li>
                            <li style={{ listStyle: "none" }}>Manufacturing and supply of products based on the specifications and design delivered from customers</li>
                            <li><span className="font-weight-bold">ODM</span> : Original Development (Design) Manufacturing</li>
                            <li style={{ listStyle: "none" }}>Manufacturer provided design/development and production for the products ordered from customers.</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="2" className="pl-0 mb-3 disappear" style={{ display: "none", alignItems: "center" }}>
                        <FittedImage fit="cover" src={contract} className="z-depth-1" />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="pb-5">
                    <MDBCol size="12" md="10">
                        <ul className="py-3 border border-light mb-md-0" style={{ backgroundColor: "#f4f4f4" }}>
                            <li><span className="font-weight-bold">OEM</span> : 주문자가 제품의 스펙과 디자인을 제시하고 제조는 주문자상표로 생산 공급함.</li>
                            <li><span className="font-weight-bold">ODM</span> : 제조자가 제품의 스펙과 디자인을 제공하여 생산 공급함.</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="2" className="pl-md-0 mb-0" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={shaking_hands} className="z-depth-1" />
                    </MDBCol>
                </MDBRow>
            </div>

            <div>
                <div className="h4 border-top border-light pt-5 pb-1">Process</div>

                <MDBRow>
                    <MDBCol size="8" className="pr-0">
                        <ul className="py-4 border border-light mb-0" style={{ backgroundColor: "#f4f4f4", listStyle: "none" }}>
                            <li>Requirements Consultation & contract</li>
                            <li>고객요구진단&계약</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="4" className="pl-0 mb-0" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={consulting} />
                    </MDBCol>
                </MDBRow>

                <div style={{ fontSize: "30px", color: "#b2b2b2", textAlign: "center" }}>&#9661;</div>

                <MDBRow>
                    <MDBCol size="8" className="pr-0">
                        <ul className="py-4 border border-light mb-0" style={{ backgroundColor: "#f4f4f4", listStyle: "none" }}>
                            <li>Procurement of resources and Sample production</li>
                            <li>원료조달 & 시제품생산</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="4" className="pl-0 mb-0" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={procurement} />
                    </MDBCol>
                </MDBRow>

                <div style={{ fontSize: "30px", color: "#b2b2b2", textAlign: "center" }}>&#9661;</div>

                <MDBRow>
                    <MDBCol size="8" className="pr-0">
                        <ul className="py-4 border border-light mb-0" style={{ backgroundColor: "#f4f4f4", listStyle: "none" }}>
                            <li>Quality control & Production</li>
                            <li>품질확인 & 생산</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="4" className="pl-0 mb-0" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={production} />
                    </MDBCol>
                </MDBRow>

                <div style={{ fontSize: "30px", color: "#b2b2b2", textAlign: "center" }}>&#9661;</div>

                <MDBRow className="pb-5">
                    <MDBCol size="8" className="pr-0">
                        <ul className="py-4 border border-light mb-0" style={{ backgroundColor: "#f4f4f4", listStyle: "none" }}>
                            <li>Supply of product</li>
                            <li>제품공급</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="4" className="pl-0 mb-0" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={product} />
                    </MDBCol>
                </MDBRow>
            </div>

            <div>
                <div className="pt-5 border-top border-light">Suvin Cosmetic always welcomes business partners with the competitive and optimal OEM & ODM system based on our strong technical and marketing background. Our partnership will promise mutual development and prosperity.</div>
                <div className="py-3 font-weight-bold">최적의 OEM, ODM시스템을 갖추고 고객님의 요구를 정밀하게 분석하여 최고의 제품을 생산 공급.</div>

                <MDBRow>
                    <MDBCol size="12" md="12">
                        <div className="border border-light mb-md-0" style={{ backgroundColor: "#cccccc", textAlign: "center" }}>
                            <div className="font-weight-bold h4 py-3" style={{ color: "#b53c6a" }}>Our partnership will promise mutual development and prosperity</div>
                            <div className="font-weight-bold h6 pb-3">고객의 성공과 발전을 약속하는 수빈코스메틱의 기술과 마케팅전략</div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>

        </InnerPageFrame>
    );
}