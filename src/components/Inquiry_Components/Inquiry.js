import React, { Component } from "react"
import Disqus from "disqus-react"
 



import { MDBContainer, MDBCol, MDBRow, MDBMask } from "mdbreact";

import Inquiry_SideNav from "./Inquiry_SideNav";




export default class Inquiry extends Component {
    render() {
        const disqusShortname = "suvin-cosmetic" //found in your Disqus.com dashboard
        const disqusConfig = {
          url: "https://syki66.github.io/suvin-cosmetic/#/", //this.props.pageUrl
          identifier: "Inquiry", //this.props.uniqueId
          title: "Inquiry page" //this.props.title
        }
     
        return (




            <MDBContainer className="px-md-0">
            
            <MDBRow className="mt-4">



                <MDBCol size="12" sm="12" md="3">
                    <Inquiry_SideNav />
                </MDBCol>




                <MDBCol size="12" sm="12" md="9">




                        <div className="h2 py-2">Inquiry</div>
                        <div className="h4 border-top border-light pt-5 pb-1">Total 1 / 1 page</div>

                        <div>Please write freely about business matter here or use email directly (dhkkis@hanmail.net)</div>


                        <div className="pt-3 pb-5">

                            <Disqus.DiscussionEmbed
                                shortname={disqusShortname}
                                config={disqusConfig}
                            />
                        </div>


                </MDBCol>



            </MDBRow>
        </MDBContainer>








        )
      }

}