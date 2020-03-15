import React from "react"
import Disqus from "disqus-react"

import InnerPageFrame from "../common/InnerPageFrame";


export default class Comments extends React.Component {
    render() {
        const disqusShortname = "suvin-cosmetic" //found in your Disqus.com dashboard
        const disqusConfig = {
          url: "https://syki66.github.io/suvin-cosmetic", //this.props.pageUrl
          identifier: "Comments", //this.props.uniqueId
          title: "Comments page" //this.props.title
        }
     
        return (
            <InnerPageFrame
                title="Customer"
                subtitle={["Notice", "Comments"]}
            >

                <div className="h2 py-2">Comments</div>
                <div className="h4 border-top border-light pt-5 pb-1">Total 1 / 1 page</div>

                <div>Please write freely about our pruducts or any question</div>

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