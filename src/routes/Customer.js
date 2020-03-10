import React, { Component } from "react"
import Disqus from "disqus-react"
 
export default class extends Component {
  render() {
    const disqusShortname = "suvin-cosmetic" //found in your Disqus.com dashboard
    const disqusConfig = {
      url: "http://localhost:3000", //this.props.pageUrl
      identifier: "article-id", //this.props.uniqueId
      title: "Title of Your Article" //this.props.title
    }
 
    return (
      <div className="article-container">
 
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}