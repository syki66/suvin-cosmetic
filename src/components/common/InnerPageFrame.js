import React from "react";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";

import SideNav from "./SideNav";

//this.props.children 쓰면 태그 사이에 자식으로 넣을수 있음
//title에는 사이드네비 대표제목, subtitle에는 배열 형식으로 네비 항목 이름 입력하면됨

export default class InnerPageFrame extends React.Component {

    render() {
        return(

            <MDBContainer className="px-md-0">
                <MDBRow className="mt-4 pb-5">
                    <MDBCol size="12" sm="12" md="3">
                        <SideNav
                            title={this.props.title}
                            subtitle={this.props.subtitle}
                        />
                    </MDBCol>
                    <MDBCol size="12" sm="12" md="9">
                        {this.props.children}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }

}


