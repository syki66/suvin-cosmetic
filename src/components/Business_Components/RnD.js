import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import SideNav from "./SideNav";


function RnD() {
    return (
        <MDBContainer>
            
            <MDBRow>
                <MDBCol size="3">

                    <SideNav />

                </MDBCol>

                <MDBCol size="9">
                    <div className="h3">R&D</div>

                    <div className="border-bottom border-light">
                        <div className="h5">R&D Focus</div>

                        <ol className="px-5 py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>Development of cosmetics focused on customer satisfaction</li>
                            <li>Top quality products with foremost and new technology</li>
                            <li>High competitiveness of top-level products with sound R&D conception and product quality</li>
                        </ol>

                        <ol className="px-5 py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>고객 만족의 화장품 개발</li>
                            <li>첨단 기술 우선 적용 명품화장품 개발</li>
                            <li>R&D기반 제품경쟁력 확보- 설계품질과 시장품질이 최고급화된 화장품개발</li>
                        </ol>

                        <p>
                            Suvin is a research and development company that sells basic skin care cosmetics. We have main products such as
                            pores reducing pack, stem cell cream, facial mask, massage cream, snail cream, BB cream, sleeping pack and etc.
                            Our special product called The Pore Reducing Pack of deep cleanser makes skin clear and pure by removing demodex
                            that are parasitic on the face. We acquired domestic patent on this technology and now we are exporting these
                            products to Thailand, China, Australia and other many countries. The company developed pores reducing Pack
                            after 3 years of research. The pack has been on the duty free market since October 2009, which made SUVIN famous
                            for pore care technology. From product research&development to marketing, we will do our best to keep customers’
                            healthy skin with SUVIN ’s distinct technology.
                        </p>

                        <p>
                            수빈코스메틱 연구소에서는 아름다움을 선사하기 위하여 끊임없는 연구를 통해 업계 최고수준의 기술력과 노하우로 고객의 성공방향을 제시하는 제품생산과 OEM/ODM 시스템을 추구합니다. 국내 유수의 화장품회사 연구개발 경력 30년의 연구전문가가 고객이 만족하고 신뢰할 수 있는 화장품을 직접 개발하여 공급합니다. 수빈코스메틱은 언제나 준비되어 있습니다. “명장이 만든 명품”을 만나 보십시오.
                        </p>

                    </div>
                </MDBCol>
                
            </MDBRow>
        </MDBContainer>
    );
}

export default RnD;