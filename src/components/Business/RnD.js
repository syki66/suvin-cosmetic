import React from "react";
import { MDBCol, MDBRow } from "mdbreact";

import FittedImage from "react-fitted-image";

import InnerPageFrame from "../common/InnerPageFrame";

const conduct = "https://user-images.githubusercontent.com/59393359/77156175-2ee2f380-6ae2-11ea-9bfa-e55cd30aa77e.png";
const rnd = "https://user-images.githubusercontent.com/59393359/77156184-31454d80-6ae2-11ea-9e5d-3741b95360a8.jpg";
const nanoTech = "https://user-images.githubusercontent.com/59393359/77156179-2f7b8a00-6ae2-11ea-9814-c2e79454694b.png";
const bioTech = "https://user-images.githubusercontent.com/59393359/77156174-2e4a5d00-6ae2-11ea-944d-d75009448f70.png";
const fusionTech = "https://user-images.githubusercontent.com/59393359/77156176-2f7b8a00-6ae2-11ea-9f3c-8f3353ea387f.png";
const basicTech = "https://user-images.githubusercontent.com/59393359/77156173-2db1c680-6ae2-11ea-92fe-834c1fbc4a5c.png";
const research_01 = "https://user-images.githubusercontent.com/59393359/77156180-30142080-6ae2-11ea-837b-6f4f848a8e0f.png";
const research_02 = "https://user-images.githubusercontent.com/59393359/77156181-30142080-6ae2-11ea-9b8d-790e78b74ceb.png";
const research_03 = "https://user-images.githubusercontent.com/59393359/77156182-30acb700-6ae2-11ea-85d2-3843842800d2.png";
const research_04 = "https://user-images.githubusercontent.com/59393359/77156183-30acb700-6ae2-11ea-9c3a-8a60e59aff28.png";


export default function RnD() {
    return (
        <InnerPageFrame
            title="Business"
            subtitle={["Competence", "R & D", "OEM & ODM"]}
        >

            <div className="h2 py-2">R&D</div>

            <div>
                <div className="h4 border-top border-light pt-5 pb-1">R&D Focus</div>

                <MDBRow>
                    <MDBCol size="12">
                        <ol className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>Development of cosmetics focused on customer satisfaction</li>
                            <li>Top quality products with foremost and new technology</li>
                            <li>High competitiveness of top-level products with sound R&D conception and product quality</li>
                        </ol>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="pb-4">
                    <MDBCol size="12" md="3" className="mb-0 pb-3 pb-md-0" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={rnd} className="z-depth-1" />
                    </MDBCol>
                    <MDBCol size="12" md="9">
                        <ol className="py-4 py-xl-5 border border-light mb-md-0" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>?????? ????????? ????????? ??????</li>
                            <li>?????? ?????? ?????? ?????? ??????????????? ??????</li>
                            <li>R&D?????? ??????????????? ??????- ??????????????? ??????????????? ??????????????? ???????????????</li>
                        </ol>
                    </MDBCol>
                </MDBRow>

                <p className="mb-0">
                    Suvin is a research and development company that sells basic skin care cosmetics. We have main products such as
                    pores reducing pack, stem cell cream, facial mask, massage cream, snail cream, BB cream, sleeping pack and etc.
                    Our special product called The Pore Reducing Pack of deep cleanser makes skin clear and pure by removing demodex
                    that are parasitic on the face. We acquired domestic patent on this technology and now we are exporting these
                    products to Thailand, China, Australia and other many countries. The company developed pores reducing Pack
                    after 3 years of research. The pack has been on the duty free market since October 2009, which made SUVIN famous
                    for pore care technology. From product research&development to marketing, we will do our best to keep customers???
                    healthy skin with SUVIN ???s distinct technology.
                </p>

                <MDBRow className="pt-4 pb-5 ">
                    <MDBCol size="12" lg="4" className="mb-0" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={conduct} className="z-depth-1" style={{ objectPosition: "right" }} />
                    </MDBCol>
                    <MDBCol size="12" lg="8">
                        <p className="py-3 mb-md-0">
                            ?????????????????? ?????????????????? ??????????????? ???????????? ????????? ???????????? ????????? ?????? ?????? ??????????????? ???????????? ???????????? ????????? ??????????????? ???????????? ??????????????? OEM/ODM ???????????? ???????????????. ?????? ????????? ??????????????? ???????????? ?????? 30?????? ?????????????????? ????????? ???????????? ????????? ??? ?????? ???????????? ?????? ???????????? ???????????????. ????????????????????? ????????? ???????????? ????????????. ???????????? ?????? ???????????? ?????? ????????????.
                        </p>
                    </MDBCol>
                </MDBRow>
            </div>

            <div>
                <div className="h4 border-top border-light pt-5 pb-1">The field of R&D</div>

                <MDBRow className="pb-3">
                    <MDBCol size="12" lg="3" className="pr-lg-0">
                        <div className="h-100 border border-light purple-gradient" style={{ backgroundColor: "#f4f4f4", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>Basic Technology</div>
                    </MDBCol>
                    <MDBCol size="9" lg="7" className="pr-0 pl-lg-0 pl-lg-3">
                        <ul className="py-4 border border-light mb-0 purple-gradient" style={{ backgroundColor: "#f4f4f4", listStyle: "none", borderRadius: "10px" }}>
                            <li>New High R&D technology applied with new raw materials</li>
                            <li>????????? ???????????? R&D ????????????</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="3" lg="2" className="pl-0 pl-lg-3" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={basicTech} style={{ borderRadius: "10px" }} />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="pb-3">
                    <MDBCol size="12" lg="3" className="pr-lg-0">
                        <div className="h-100 border border-light blue-gradient" style={{ backgroundColor: "#f4f4f4", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>Fusion Technology</div>
                    </MDBCol>
                    <MDBCol size="9" lg="7" className="pr-0 pl-lg-0 pl-lg-3">
                        <ul className="py-4 border border-light mb-0 blue-gradient" style={{ backgroundColor: "#f4f4f4", listStyle: "none", borderRadius: "10px" }}>
                            <li>Unique configuration technology by based on convergence</li>
                            <li>???????????? ????????? ???????????????</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="3" lg="2" className="pl-0 pl-lg-3" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={fusionTech} style={{ borderRadius: "10px" }} />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="pb-3">
                    <MDBCol size="12" lg="3" className="pr-lg-0">
                        <div className="h-100 border border-light aqua-gradient" style={{ backgroundColor: "#f4f4f4", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>Nano Technology</div>
                    </MDBCol>
                    <MDBCol size="9" lg="7" className="pr-0 pl-lg-0 pl-lg-3">
                        <ul className="py-4 border border-light mb-0 aqua-gradient" style={{ backgroundColor: "#f4f4f4", listStyle: "none", borderRadius: "10px" }}>
                            <li>Three-phase emulsion technology on nano basis</li>
                            <li>???????????? ?????? ????????????</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="3" lg="2" className="pl-0 pl-lg-3" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={nanoTech} style={{ borderRadius: "10px" }} />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="pb-5">
                    <MDBCol size="12" lg="3" className="pr-lg-0">
                        <div className="h-100 border border-light peach-gradient" style={{ backgroundColor: "#f4f4f4", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>Bio Technology</div>
                    </MDBCol>
                    <MDBCol size="9" lg="7" className="pr-0 pl-lg-0 pl-lg-3">
                        <ul className="py-4 border border-light mb-0 peach-gradient" style={{ backgroundColor: "#f4f4f4", listStyle: "none", borderRadius: "10px" }}>
                            <li>Skin system activation technology based on living organic</li>
                            <li>???????????? ??????????????? ????????? ??????</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="3" lg="2" className="pl-0 pl-lg-3" style={{ display: "flex", alignItems: "center" }}>
                        <FittedImage fit="cover" src={bioTech} style={{ borderRadius: "10px" }} />
                    </MDBCol>
                </MDBRow>
            </div>

            <div>
                <div className="h4 border-top border-light pt-5 pb-1">Research Theme Items</div>

                <MDBRow>
                    <MDBCol size="12">
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>Magnetic control Pack</li>
                            <li>Cleansing Keratin in Two phase Pack</li>
                            <li>Promote metabolism Pack</li>
                            <li>Two in One Capsule BB(CC) Essence</li>
                        </ul>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="pt-3">
                    <MDBCol className="pr-0"><FittedImage fit="cover" className="border border-light" src={research_01} /></MDBCol>
                    <MDBCol className="pr-0 pl-1 pl-lg-3"><FittedImage fit="cover" className="border border-light" src={research_02} /></MDBCol>
                    <MDBCol className="pr-0 pl-1 pl-lg-3"><FittedImage fit="cover" className="border border-light" src={research_03} /></MDBCol>
                    <MDBCol className="pl-1 pl-lg-3"><FittedImage fit="cover" className="border border-light" src={research_04} /></MDBCol>
                </MDBRow>
            </div>
        </InnerPageFrame>
    );
}