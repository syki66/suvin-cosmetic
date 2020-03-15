import React from "react";

import InnerPageFrame from "../common/InnerPageFrame";

import Markdown from "react-markdown";

import rawMarkdownArray from "./RawMarkdownArray"

import Disqus from "disqus-react"


/*  마크다운 front matter 형식 (제목은 반드시 2020-03-15-file-name.md 이런식으로 해야됨 아니면 deploy 할때 에러남)
    ---
    date: "2020-03-12"
    title: "제목입니다."
    writer: "수빈코스메틱"
    disqus: "true"
    ---

    한칸 띄우고 여기서부터 글 시작
*/

/*
    notice에서 fetch한 객체리터럴을 데이터 로딩 후에 가져오는법을 모르겠어서 notice랑 fetch 하는 부분 코드 중복임.. 나중에 수정하겠음
 
    디스커스기능 yml에 서 가져올수 있게 내용 추가

    notice 개별 페이지에 disqus 추가

*/

export default class MainTextFrame extends React.Component {
    state = {
        isLoading: true,
        posts: []
    }

    sliceFrontMatter = (text, index) => {
        const parsedText = text.substring(text.indexOf("---")+4, text.indexOf("---", 3)-1);
        
        const date = parsedText.substring(parsedText.indexOf('date: "')+7, parsedText.indexOf('"' , parsedText.indexOf('date: "')+7) );
        const title = parsedText.substring(parsedText.indexOf('title: "')+8, parsedText.indexOf('"' , parsedText.indexOf('title: "')+8) );
        const writer = parsedText.substring(parsedText.indexOf('writer: "')+9, parsedText.indexOf('"' , parsedText.indexOf('writer: "')+9) );
        const disqus = parsedText.substring(parsedText.indexOf('disqus: "')+9, parsedText.indexOf('"' , parsedText.indexOf('disqus: "')+9) );
        const mainText = text.substr(text.indexOf("---",1)+5);
        
        return { index, date, title, writer, disqus, mainText }
    }

    async componentDidMount() {
        const posts = await Promise.all(
            rawMarkdownArray.map(
                (file, i) => fetch(file).then(
                    res => (res.text()).then(result => this.sliceFrontMatter(result, i))
                    )
                )
        ).catch((err) => console.error(err));

        this.setState({ posts, isLoading: false });
    }


    render() {
        const { posts, isLoading } = this.state;
        const { index } = this.props.match.params;

        const reversedIndex = rawMarkdownArray.length - index; // maintext index 역순으로 변경


        const disqusShortname = "suvin" //found in your Disqus.com dashboard
        const disqusConfig = {
          url: `http://localhost:3000/Notice/${index}`,
          identifier: `/Notice/${index}`,
          title: `Notice page : "${index}"`
        }


        return (
            <InnerPageFrame
                title="Customer"
                subtitle={["Notice", "Comments"]}
            >
                <div className="h2 py-2">Notice</div>
                
                {isLoading ? (
                    <div>데이터 로딩중</div>
                    ) : (
                        <div className="border-top border-light pt-5">

                            <Markdown
                                source={posts[reversedIndex].mainText}
                                escapeHtml={false}
                            />

                            <div className="pt-5 mt-5">
                                <Disqus.DiscussionEmbed
                                    shortname={disqusShortname}
                                    config={disqusConfig}
                                />
                            </div>
                        </div>
                ) }
            </InnerPageFrame>
        );
    }
}