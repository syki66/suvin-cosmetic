import React, { Component } from "react"
import Disqus from "disqus-react"

import InnerPageFrame from "../common/InnerPageFrame";


export default class Inquiry extends Component {
    render() {
        const disqusShortname = "suvin-cosmetic" //found in your Disqus.com dashboard
        const disqusConfig = {
          url: "https://syki66.github.io/suvin-cosmetic/#/Inquiry", //this.props.pageUrl
          identifier: "Inquiry", //this.props.uniqueId
          title: "Inquiry page" //this.props.title
        }
     
        return (
            <InnerPageFrame
                title="Inquiry"
                subtitle={["Inquiry"]}
            >

                <div className="h2 py-2">Inquiry</div>
                <div className="h4 border-top border-light pt-5 pb-1">Total 1 / 1 page</div>

                <div>Please write freely about business matter here or use email directly (dhkkis@hanmail.net)</div>

                <div className="pt-3">
                    <Disqus.DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />
                </div>

            </InnerPageFrame>
        )
      }
}