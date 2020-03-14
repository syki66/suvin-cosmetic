import React from "react";

import InnerPageFrame from "../common/InnerPageFrame";

import Markdown from "react-markdown";

import rawMarkdownArray from "./RawMarkdownArray"


/*  마크다운 front matter 형식
    ---
    date: "2020-03-12"
    title: "제목입니다."
    ---

    한칸 띄우고 여기서부터 글 시작
*/

// notice에서 fetch한 객체리터럴을 데이터 로딩 후에 가져오는법을 모르겠어서 notice랑 fetch 하는 부분 코드 중복임.. 나중에 수정하겠음
 


export default class MainTextFrame extends React.Component {
    state = {
        isLoading: true,
        posts: []
    }

    sliceFrontMatter = (text, index) => {
        const parsedText = text.substring(text.indexOf("---")+4, text.indexOf("---", 3)-1);
        
        const date = parsedText.substring(parsedText.indexOf('date: "')+7, parsedText.indexOf('"' , parsedText.indexOf('date: "')+7) );
        const title = parsedText.substring(parsedText.indexOf('title: "')+8, parsedText.indexOf('"' , parsedText.indexOf('title: "')+8) );
        const mainText = text.substr(text.indexOf("---",1)+5);
        
        return { index, date, title, mainText }
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
        console.log(this.props.match.params.index)
        

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
                                source={posts[this.props.match.params.index].mainText}
                                escapeHtml={false}
                            />

                        </div>
                ) }
            </InnerPageFrame>
        );
    }
}