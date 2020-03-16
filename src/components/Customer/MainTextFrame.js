import React from "react";

import InnerPageFrame from "../common/InnerPageFrame";

import Markdown from "react-markdown";

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
 
    디스커스기능 yml에 서 가져올수 있게 내용 추가

    notice 개별 페이지에 disqus 추가

    notice페이지의 link의 state를 가져와서 활용했고, 리다이렉팅 시키는데 인자들 undefined 에러나서 else 구문에 다 넣어버림

    개별페이지에 인덱스 부여하는거는 여전히 오류나서 그냥 추후에 추가하는걸로..
*/

export default function MainTextFrame(props) {
    const post = props.location.state;
    if (post === undefined) {
        props.history.push("/Notice");
        return null;
    }

    else{
        const disqusShortname = "suvin" 
        const disqusConfig = {
          url: `http://localhost:3000/Notice/${post.index}`,
          identifier: `/Notice/${post.index}`,
          title: `Notice page : "${post.index}"`
        }

        return(
            <InnerPageFrame
                title="Customer"
                subtitle={["Notice", "Comments"]}
            >
                <div className="h2 py-2">Notice</div>
    
                <div className="border-top border-light pt-5">
                    
                    <Markdown
                        source={post.mainText}
                        escapeHtml={false}
                    />
    
                    {post.disqus ? (
                        <div className="pt-5 mt-5">
                            <Disqus.DiscussionEmbed
                                shortname={disqusShortname}
                                config={disqusConfig}
                            />
                        </div>
                    ) : (null)}

                </div>
            </InnerPageFrame>
        );
    }


}