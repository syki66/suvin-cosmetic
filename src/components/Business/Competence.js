import React from 'react';
import { MDBCol, MDBRow } from "mdbreact";

import InnerPageFrame from "../common/InnerPageFrame";

const certificate_01 = "https://user-images.githubusercontent.com/59393359/77155822-7c129580-6ae1-11ea-821e-74ef00090203.jpg";
const certificate_02 = "https://user-images.githubusercontent.com/59393359/77155823-7cab2c00-6ae1-11ea-9766-730bc4ca367a.jpg";
const certificate_03 = "https://user-images.githubusercontent.com/59393359/77155824-7cab2c00-6ae1-11ea-9513-32a89b7cbe15.jpg";
const certificate_04 = "https://user-images.githubusercontent.com/59393359/77155826-7d43c280-6ae1-11ea-96ed-0dd33fd4d592.jpg";
const certificate_05 = "https://user-images.githubusercontent.com/59393359/77155827-7d43c280-6ae1-11ea-8926-11ca7b60fab8.jpg";
const certificate_06 = "https://user-images.githubusercontent.com/59393359/77155829-7ddc5900-6ae1-11ea-959c-bc2172d6f407.jpg";
const certificate_07 = "https://user-images.githubusercontent.com/59393359/77155831-7ddc5900-6ae1-11ea-84a9-80819b561c2d.jpg";
const certificate_08 = "https://user-images.githubusercontent.com/59393359/77155834-7e74ef80-6ae1-11ea-90d5-34ad6fa78768.jpg";
const certificate_09 = "https://user-images.githubusercontent.com/59393359/77155835-7e74ef80-6ae1-11ea-856d-1d7bf42757d0.jpg";
const certificate_10 = "https://user-images.githubusercontent.com/59393359/77155836-7f0d8600-6ae1-11ea-852c-b54e8fe7a2c5.jpg";
const certificate_11 = "https://user-images.githubusercontent.com/59393359/77155837-7f0d8600-6ae1-11ea-9fde-0a5bd6807bc4.jpg";
const certificate_12 = "https://user-images.githubusercontent.com/59393359/77155838-7fa61c80-6ae1-11ea-8ee5-54dae22c82d6.jpg";

const certificate = "https://user-images.githubusercontent.com/59393359/77155819-7ae16880-6ae1-11ea-8217-e8cdf0b2ff88.jpg";
const dutyfreeStore = "https://user-images.githubusercontent.com/59393359/77156014-d4499780-6ae1-11ea-83bb-85722fd058fc.jpg";
const overseasMarketing = "https://user-images.githubusercontent.com/59393359/77156015-d4e22e00-6ae1-11ea-92d9-9d54aa18e226.jpg";
const diverseDistribution = "https://user-images.githubusercontent.com/59393359/77156013-d3b10100-6ae1-11ea-9a7b-b47da6925a61.jpg";


/*
    ?????? ????????? ?????????????????? ????????? ??????????????? ???????????? ?????????, MDB?????? ??????????????? ???????????? ????????? 100??????????????? ?????? ????????????
    ???????????? ????????? ????????? ?????? 12????????? ?????????.

    ????????? ????????? 8:4 ????????? ?????? ???????????? ????????? ????????????, ?????????????????? ????????? 2?????? p-1??? ??????



    py-5 ??? ??? ?????? y??? ?????? ????????????, border border-light ??? ?????? ???????????? ??????

    ???????????? z-depth-1??? ????????? ??????, display:"flex", alignItems:"center" ??? ?????? ????????????


    ????????? xs??? sm????????? size??? 12??? ????????? ??????????????? ????????? ????????????, ????????? ??? ??????????????? ???????????? ????????? ?????????

    ????????? ?????? ??????????????? ???????????? ??? ?????? md ??????????????? ?????? ?????? (?????????????????? ??????????????? ????????? ????????? ?????? ??????)


    ?????? ????????? fade?????? ??????????????????.

    ???????????? ????????????


    ?????? ??????????????? p-0 ????????? ???????????? ??? ???????????? ??????????????? ????????? ?????? ????????????
*/


export default function Competence() {
    return (
        <InnerPageFrame
            title="Business"
            subtitle={["Competence", "R & D", "OEM & ODM"]}
        >

            <div className="h2 py-2">Competence</div>

            <div className="border-top border-light">
                <MDBRow className="pb-5 pb-md-0 ">
                    <MDBCol size="12" md="8" className=" pt-5">
                        <div className="h4">Competitive Technology</div>
                        <div className="h5 py-1" style={{ color: "#7f304e" }}><b>?????? ????????? ????????? ?????? ??????</b></div>
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>Management with technological background of 30-year R&D expertise</li>
                            <li>Pore shrinking pack with world class patent certified in 2013</li>
                            <li>30??? ????????? R&D??? ????????? ??????????????????</li>
                            <li>2013??? ???????????? ????????? ????????? ???????????????</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="4" style={{ display: "flex", alignItems: "center" }}>
                        <img src={certificate} className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </div>

            <div className="border-top border-light">
                <MDBRow className="py-5">
                    <MDBCol size="12" md="8">
                        <div className="h4">Success of duty-free sales</div>
                        <div className="h5 py-1" style={{ color: "#7f304e" }}><b>????????? ????????? ???????????? ??????</b></div>
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>Sale of main products on duty-free shops from 2009</li>
                            <li>High reputation about quality among foreign customers</li>
                            <li>2009????????? ??????????????? ????????????</li>
                            <li>????????? ?????? ???????????? ?????? ??????</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="4" style={{ display: "flex", alignItems: "center" }}>
                        <img src={dutyfreeStore} className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </div>

            <div className="border-top border-light">
                <MDBRow className="py-5">
                    <MDBCol size="12" md="8">
                        <div className="h4">Overseas Marketing</div>
                        <div className="h5 py-1" style={{ color: "#7f304e" }}><b>????????? ????????? ??????</b></div>
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>Marketing in main cosmetic exhibitions</li>
                            <li>Affiliation of business partnership in main countries</li>
                            <li>?????? ????????? ????????? ?????? ??????</li>
                            <li>????????? ????????????????????? ?????? ??????</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="4" style={{ display: "flex", alignItems: "center" }}>
                        <img src={overseasMarketing} className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </div>

            <div className="border-top border-light">
                <MDBRow className="py-5">
                    <MDBCol size="12" md="8">
                        <div className="h4">Diverse distribution channel</div>
                        <div className="h5 py-1" style={{ color: "#7f304e" }}><b>?????? ????????? ?????????</b></div>
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>On-line/Open market sales</li>
                            <li>Door to door sale, Home shopping, PB marketing</li>
                            <li>?????????/?????? ?????? ????????? ??????</li>
                            <li>????????????, ?????????, ??????????????? ??????????????? ?????? ??????</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="4" style={{ display: "flex", alignItems: "center" }}>
                        <img src={diverseDistribution} className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </div>

            <div className="pt-5 border-top border-light">
                <div className="h4">Certificates</div>
                <div className="h5 py-1" style={{ color: "#7f304e" }}><b>?????? ????????? ????????? ?????? ??????</b></div>
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

        </InnerPageFrame>
    );
};