import React from "react";

import InnerPageFrame from "../common/InnerPageFrame";

import { Link } from "react-router-dom";

import rawMarkdownArray from "./RawMarkdownArray"


import { MDBRow, MDBCol } from "mdbreact";

/*
    posts 폴더 전체를 임포트 시켜서 각 md파일의 내용을 fetch 이용해서 가져와서 state의 posts 어레이에 저장함
    그후 render에서 posts 어레이 이용해서 규격에 넣어서 화면상에 출력
    escapeHTML은 false로 두면 html 사용 가능해짐
    댓글 디스커스 쓸수있게 해야겠다.
    front matter는 아래형식에 맞춰서 date와 title 집어넣어줘야됨(순서는 상관없음). 띄어쓰기와 오타 주의 글의 시작은 front matter 와 한칸 띄워서 시작하기
    비동기에 있어서 isLoading 은 필수, front matter에 disqus 추가할지 정하는거추가

    퍼블리시 하고나서 md파일은 로컬에서 안불러지는데 막상 txt는 겁나잘되네

    md 파일 get은 못하더라도 파일 이름까지는 가져올 수 있어서 이름 이용해서 내 깃허브 레포에서 파일 가져와야겠다.

    Link의 state를 이용해서 MaintextFrame에 모든 props 전달
*/

export default class Notice extends React.Component {
    state = {
        isLoading: true,
        posts: []
    }

    // front matter 뽑아서 (날짜, 타이틀, 내용) 객체리터럴로 리턴해주는 함수
    sliceFrontMatter = (text, index) => {
        const parsedText = text.substring(text.indexOf("---")+4, text.indexOf("---", 3)-1);
        
        const date = parsedText.substring(parsedText.indexOf('date: "')+7, parsedText.indexOf('"' , parsedText.indexOf('date: "')+7) );
        const title = parsedText.substring(parsedText.indexOf('title: "')+8, parsedText.indexOf('"' , parsedText.indexOf('title: "')+8) );
        const writer = parsedText.substring(parsedText.indexOf('writer: "')+9, parsedText.indexOf('"' , parsedText.indexOf('writer: "')+9) );
        const disqus = parsedText.substring(parsedText.indexOf('disqus: "')+9, parsedText.indexOf('"' , parsedText.indexOf('disqus: "')+9) );
        const mainText = text.substr(text.indexOf("---",1)+5);
        
        index = rawMarkdownArray.length - index; // 인덱스 순서 역순으로 변환

        return { index, date, title, writer, disqus, mainText }
    }


    // 서버에서 md 파일 가져오기
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


                            <MDBRow className="border-bottom border-light p-1 m-1" style={{ color: "black", backgroundColor:"#e5ecef" }} >

                                <MDBCol size="1">번호</MDBCol>
                                <MDBCol size="7">제목</MDBCol>
                                <MDBCol size="2">작성자</MDBCol>
                                <MDBCol size="2">날짜</MDBCol>

                            </MDBRow>

                            {posts.map(post => {
                                return (
                                    <div>
                                        
                                        <Link 
                                            to={{
                                                pathname: `/Notice-page`,
                                                state: {
                                                    index: post.index,
                                                    title: post.title,
                                                    date: post.date,
                                                    writer: post.writer,
                                                    mainText: post.mainText,
                                                    disqus: post.disqus
                                                    
                                                }
                                            }}>

                                            <MDBRow className="border-bottom border-light p-1 m-1" style={{color:"black"}} >

                                                <MDBCol size="1">{post.index}</MDBCol>
                                                <MDBCol size="7">{post.title}</MDBCol>
                                                <MDBCol size="2">{post.writer}</MDBCol>
                                                <MDBCol size="2">{post.date}</MDBCol>

                                            </MDBRow>

                                        </Link>

                                    </div>
                                );
                            })}

                        </div>
                ) }
            </InnerPageFrame>
        );
    }
}