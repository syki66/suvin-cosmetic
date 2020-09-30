import React, { Component } from "react"
import Disqus from "disqus-react"

import InnerPageFrame from "../common/InnerPageFrame";

/*
    디스커스 한 댓글이 모든 페이지에 적용되길래 해결하려고 다 시도해보니까 
    결론적으로 url과 identifier가 둘다 달라야 다른 댓글로 적용됨
    url에 "http://" 또는 "https://" 만 붙여주면 무슨 단어든 다 가능함.(굳이 localhost 아니여도됨)
    일단 사이트의 baseUrl도 한번쓰면 끝.("#" 이거만 안들어가면 쓸수 있음)

    굳이 localhost 안써도 되지만 걍 쓴거고, 서브 url에 # 만 없다면 써도 됨
    
    Disqus.commentCount로 댓글 개수 셀수 있음
*/

export default class Comments extends Component {
    render() {
        const disqusShortname = "suvincos" //found in your Disqus.com dashboard
        const disqusConfig = {
          url: "http://localhost:3000/Comments", //this.props.pageUrl
          identifier: "Comments", //this.props.uniqueId
          title: "Comments Page" //this.props.title
        }
     
        return (
            <InnerPageFrame
                title="Customer"
                subtitle={["Notice", "Comments"]}
            >

                <div className="h2 py-2">Comments</div>
                <div className="h4 border-top border-light pt-5 pb-1">Total 1 / 1 page</div>

                <div>Please write freely about our pruducts or any questions</div>

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