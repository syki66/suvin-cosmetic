import React from "react"
import Disqus from "disqus-react"

import InnerPageFrame from "../common/InnerPageFrame";


export default class Comments extends React.Component {
    render() {

     
        return (
            <InnerPageFrame
                title="Customer"
                subtitle={["Notice", "Comments"]}
            >

                <div className="h2 py-2">Comments</div>
                <div className="h4 border-top border-light pt-5 pb-1">Total 1 / 1 page</div>

                <div>Please write freely about our pruducts or any question</div>

                <div className="pt-3">

                </div>

            </InnerPageFrame>
        )
      }
}