import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import SideNav from "./SideNav";


import conduct from "./Business_image/RnD_IMGs/conduct.png";
import rnd from "./Business_image/RnD_IMGs/rnd.jpg";
import nanoTech from "./Business_image/RnD_IMGs/nanoTech.jpg";
import bioTech from "./Business_image/RnD_IMGs/bioTech.jpg";
import fusionTech from "./Business_image/RnD_IMGs/fusionTech.jpg";

import FittedImage from "react-fitted-image";



function RnD() {
    return (






        <MDBContainer className="px-md-0">
            
            <MDBRow className="mt-4">

                <MDBCol size="12" sm="12" md="3">
                    <SideNav />
                </MDBCol>


                <MDBCol size="12" sm="12" md="9">

                    <div className="h2 py-2">R&D</div>



                    <div className="h4 border-top border-light pt-5 pb-1">R&D Focus</div>

                    <MDBRow className="">
                        <MDBCol size="12" className="">

                            <ol className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                <li>Development of cosmetics focused on customer satisfaction</li>
                                <li>Top quality products with foremost and new technology</li>
                                <li>High competitiveness of top-level products with sound R&D conception and product quality</li>
                            </ol>

                        </MDBCol>
                    </MDBRow>
                    



                    <MDBRow className="pb-4">

                        <MDBCol size="12" md="3"  className="mb-0 pb-3 pb-md-0" style={{display:"flex", alignItems:"center"}}>
                            <FittedImage fit="cover" src={rnd} className="z-depth-1" />
                        </MDBCol>

                        <MDBCol size="12" md="9">                                
                            <ol className="py-4 py-xl-5 border border-light mb-md-0" style={{ backgroundColor: "#f4f4f4" }}>
                                    <li>고객 만족의 화장품 개발</li>
                                    <li>첨단 기술 우선 적용 명품화장품 개발</li>
                                    <li>R&D기반 제품경쟁력 확보- 설계품질과 시장품질이 최고급화된 화장품개발</li>
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
                        for pore care technology. From product research&development to marketing, we will do our best to keep customers’
                        healthy skin with SUVIN ’s distinct technology.
                    </p>
                    



                    <MDBRow className="pt-4 pb-5 ">

                        <MDBCol size="12" md="4"  className="mb-0" style={{display:"flex", alignItems:"center"}}>
                            <FittedImage fit="cover" src={conduct} className="z-depth-1" />
                        </MDBCol>

                        <MDBCol size="12" md="8">                                
                            <p className="py-3 mb-md-0 " style={{  }}>
                                수빈코스메틱 연구소에서는 아름다움을 선사하기 위하여 끊임없는 연구를 통해 업계 최고수준의 기술력과 노하우로 고객의 성공방향을 제시하는 제품생산과 OEM/ODM 시스템을 추구합니다. 국내 유수의 화장품회사 연구개발 경력 30년의 연구전문가가 고객이 만족하고 신뢰할 수 있는 화장품을 직접 개발하여 공급합니다. 수빈코스메틱은 언제나 준비되어 있습니다. “명장이 만든 명품”을 만나 보십시오.
                            </p>
                        </MDBCol>

                    </MDBRow>



 


                    <div className="h4 border-top border-light pt-5 pb-1">The field of R&D</div>


                    <MDBRow className="pb-3">

                        <MDBCol size="12" md= "3" className="pr-md-0">
                            <div className="h-100 border border-light purple-gradient" style={{ backgroundColor: "#f4f4f4", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"10px"}}>Basic Technology</div>
                        </MDBCol>
                            

                        <MDBCol size="9" md="7" className="pr-0 pl-md-0 pl-lg-3">

                            
                            
                            <ul className="py-4 border border-light mb-0 purple-gradient" style={{ backgroundColor: "#f4f4f4", listStyle:"none", borderRadius:"10px"}}>
                                <li>New High R&D technology applied with new raw materials</li>
                                <li>신소재 원료기반 R&D 적용기술</li>
                            </ul>

                        </MDBCol>

                        <MDBCol size="3" md="2" className="pl-0 pl-lg-3" style={{display:"flex", alignItems:"center"}}>
                            <FittedImage fit="cover" src={nanoTech} style={{borderRadius:"10px"}} />
                        </MDBCol>
                    </MDBRow>
                    
                    

                    <MDBRow className="pb-3">

                        <MDBCol size="12" md="3" className="pr-md-0">
                            <div className="h-100 border border-light blue-gradient" style={{ backgroundColor: "#f4f4f4", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"10px"}}>Fusion Technology</div>
                        </MDBCol>


                        <MDBCol size="9" md="7" className="pr-0 pl-md-0 pl-lg-3">                                
                            <ul className="py-4 border border-light mb-0 blue-gradient" style={{ backgroundColor: "#f4f4f4", listStyle:"none", borderRadius:"10px"}}>
                                    <li>Unique configuration technology by based on convergence</li>
                                    <li>융합기반 독보적 신제형기술</li>
                            </ul>
                        </MDBCol>

                        <MDBCol size="3" md="2" className="pl-0 pl-lg-3" style={{display:"flex", alignItems:"center"}}>
                            <FittedImage fit="cover" src={fusionTech} style={{borderRadius:"10px"}}/>
                        </MDBCol>
                    </MDBRow>

                    

                    <MDBRow className="pb-3">

                        <MDBCol size="12" md="3" className="pr-md-0">
                            <div className="h-100 border border-light aqua-gradient" style={{ backgroundColor: "#f4f4f4", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"10px"}}>Nano Technology</div>
                        </MDBCol>

                        <MDBCol size="9" md="7" className="pr-0 pl-md-0 pl-lg-3">                                
                            <ul className="py-4 border border-light mb-0 aqua-gradient" style={{ backgroundColor: "#f4f4f4", listStyle:"none", borderRadius:"10px" }}>
                                    <li>Three-phase emulsion technology on nano basis</li>
                                    <li>나노기반 삼상 유화기술</li>
                            </ul>
                        </MDBCol>

                        <MDBCol size="3" md="2" className="pl-0 pl-lg-3" style={{display:"flex", alignItems:"center"}}>
                            <FittedImage fit="cover" src={nanoTech} style={{borderRadius:"10px"}} />
                        </MDBCol>
                    </MDBRow>

                    

                    <MDBRow className="pb-5">

                        <MDBCol size="12" md="3" className="pr-md-0">
                            <div className="h-100 border border-light peach-gradient" style={{ backgroundColor: "#f4f4f4", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"10px"}}>Bio Technology</div>
                        </MDBCol>

                        <MDBCol size="9" md="7" className="pr-0 pl-md-0 pl-lg-3">                                
                            <ul className="py-4 border border-light mb-0 peach-gradient" style={{ backgroundColor: "#f4f4f4", listStyle:"none", borderRadius:"10px" }}>
                                    <li>Skin system activation technology based on living organic</li>
                                    <li>생체기반 피부시스템 활성화 기술</li>
                            </ul>
                        </MDBCol>

                        <MDBCol size="3" md="2" className="pl-0 pl-lg-3" style={{display:"flex", alignItems:"center"}}>
                            <FittedImage fit="cover" src={bioTech} style={{borderRadius:"10px"}} />
                        </MDBCol>
                    </MDBRow>









                    <div className="h4 border-top border-light pt-5 pb-1">Research Theme Items</div>



                    <MDBRow className="">
                        <MDBCol size="12" className="">

                            <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                                <li>Magnetic control Pack</li>
                                <li>Cleansing Keratin in Two phase Pack</li>
                                <li>Promote metabolism Pack</li>
                                <li>Two in One Capsule BB(CC) Essence</li>
                            </ul>

                        </MDBCol>
                    </MDBRow>



                    <MDBRow className="pt-3 mb-5">
                        <MDBCol className="pr-0"><FittedImage fit="cover" className="border border-light" src={nanoTech} /></MDBCol>
                        <MDBCol className="pr-0 pl-1 pl-lg-3"><FittedImage fit="cover" className="border border-light" src={nanoTech} /></MDBCol>
                        <MDBCol className="pr-0 pl-1 pl-lg-3"><FittedImage fit="cover" className="border border-light" src={nanoTech} /></MDBCol>
                        <MDBCol className="pl-1 pl-lg-3"><FittedImage fit="cover" className="border border-light" src={nanoTech} /></MDBCol>


                    </MDBRow>



                    





                </MDBCol>



            </MDBRow>
        </MDBContainer>





    );
}

export default RnD;