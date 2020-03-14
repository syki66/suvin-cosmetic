import React from "react";

import InnerPageFrame from "../common/InnerPageFrame";

import Markdown from "react-markdown";


/*  마크다운 front matter 형식
    ---
    date: "2020-03-12"
    title: "제목입니다."
    ---

    한칸 띄우고 여기서부터 글 시작
*/

// notice에서 fetch한 파일 가져오는법을 모르겠어서
 

export default function MainTextFrame({match, post}) {
        return (
            <InnerPageFrame
                title="Customer"
                subtitle={["Notice", "Comments"]}
            >
                <div className="h2 py-2">Notice</div>
                
                <div>데이터 로딩중</div>
                
                <Markdown 
                    source={post[match.params.index].mainText} 
                    className="border-top border-light pt-5"
                    escapeHtml={false}
                />

            </InnerPageFrame>
        );
}