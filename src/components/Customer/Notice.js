import React from "react";

import InnerPageFrame from "../common/InnerPageFrame";

import Markdown from "react-markdown";


const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../../posts/', false, /\.md$/)).sort();


/*
    posts 폴더 전체를 임포트 시켜서 각 md파일의 내용을 fetch 이용해서 가져와서 state의 posts 어레이에 저장함

    그후 render에서 posts 어레이 이용해서 규격에 넣어서 화면상에 출력

    댓글 디스커스 쓸수있게 해야겠다.
*/

 
export default class Notice extends React.Component {

    state = {
        posts: [],
    }


    async componentDidMount() {
        const posts = await Promise.all(
            markdownFiles.map(
                (file) => fetch(file).then(
                    (res) => res.text().then(
                            (result) => (result)
                        ) 
                    )
                )
        ).catch((err) => console.error(err));

        this.setState({ posts });
    }

    render() {
        const { posts } = this.state;
        console.log(posts);

        return (
            <InnerPageFrame
                title="Customer"
                subtitle={["Notice", "Comments"]}
            >
                <div className="h2 py-2">Notice</div>
                
                <Markdown 
                    source={posts[3]} 
                    className="border-top border-light pt-5"
                />
            </InnerPageFrame>
        );
    }
}