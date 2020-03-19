import React from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdbreact";

import fetchMarkdowns from "../common/board/fetchMarkdowns"
import InnerPageFrame from "../common/InnerPageFrame";
import Loading from "../common/Loading"

/*
    posts 폴더 전체를 임포트 시켜서 각 md파일의 내용을 fetch 이용해서 가져와서 state의 posts 어레이에 저장함
    그후 render에서 posts 어레이 이용해서 규격에 넣어서 화면상에 출력
    escapeHTML은 false로 두면 html 사용 가능해짐

    front matter는 형식에 맞춰서 date와 title 집어넣어줘야됨(순서는 상관없음). 띄어쓰기와 오타 주의 글의 시작은 front matter 와 한칸 띄워서 시작하기
    비동기에 있어서 isLoading 은 필수, front matter에 disqus 추가할지 정하는거추가
    퍼블리시 하고나서 md파일은 로컬에서 안불러지는데 막상 txt는 겁나잘되네
    md 파일 get은 못하더라도 파일 이름까지는 가져올 수 있어서 이름 이용해서 내 깃허브 레포에서 파일 가져와야겠다.
    Link의 state를 이용해서 MaintextFrame에 모든 props 전달

    MDBCol MDBRow 이용해서 그리드 중첩으로 칸 더 세밀하게 조정
*/

export default class Notice extends React.Component {
    state = {
        isLoading: true,
        posts: []
    }

    // 서버에서 md 파일 가져오기
    async componentDidMount() {
        const posts = await fetchMarkdowns("posts");
        this.setState({ posts, isLoading: false })
    }

    render() {
        const { posts, isLoading } = this.state;

        const menuTitle = "Customer"
        const menuSubtitle = ["Notice", "Comments"]

        return (
            <InnerPageFrame
                title={menuTitle}
                subtitle={menuSubtitle}
            >

                {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                        <div className="h2 py-2">Notice</div>

                        <div className="border-top border-light pt-5">


                            <MDBRow className="border-bottom border-top border-light py-2 mx-1 font-weight-bold" style={{ color: "black", display:"flex", alignItems:"center", backgroundColor:"#e5ecef" }} >
                                <MDBCol size="8" lg="9">
                                    <MDBRow>
                                        <MDBCol size="2" lg="1" className="p-0 pl-1 notice-lg-center" style={{textAlign:"left" }}>번호</MDBCol>
                                        <MDBCol size="10" lg="11" style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>제목</MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol size="4" lg="3">
                                    <MDBRow>
                                        <MDBCol size="8" lg="5" className="px-0 notice-lg-right" style={{ textAlign:"right" }}>작성자</MDBCol>
                                        <MDBCol size="4" lg="7" className="px-0 pr-1 pr-lg-2 pr-xl-0 notice-lg-center" style={{ textAlign:"right" }}>날짜</MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>

                            {posts.map(post => {
                                return (
                                    <div>
                                        
                                        <Link 
                                            to={{
                                                pathname: `Notice-${post.index}`,
                                                state: {
                                                    index: post.index,
                                                    title: post.title,
                                                    date: post.date,
                                                    writer: post.writer,
                                                    mainText: post.mainText,
                                                    disqus: post.disqus,

                                                    menuTitle,
                                                    menuSubtitle
                                                }
                                            }}>



                                            <MDBRow className="border-bottom border-light py-2 mx-1" style={{ color:"gray", display:"flex", alignItems:"center" }} >

                                                <MDBCol size="9">
                                                    <MDBRow>
                                                        <MDBCol size="1" className="p-0" style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>{post.index}</MDBCol>
                                                        <MDBCol size="11" className="font-weight-bolder" style={{ color:"black" }}>{post.title}</MDBCol>
                                                    </MDBRow>
                                                </MDBCol>

                                                <MDBCol size="3">
                                                    <MDBRow>
                                                        <MDBCol size="12" lg="5" className="px-0 notice-lg-right" style={{ textAlign:"right" }}>{post.writer}</MDBCol>
                                                        <MDBCol size="12" lg="7" className="px-0 pl-lg-2 pl-xl-4 notice-lg-right" style={{ textAlign:"right" }}>{post.date}</MDBCol>
                                                    </MDBRow>
                                                </MDBCol>

                                            </MDBRow>




                                        </Link>

                                    </div>
                                );
                            })}




                        </div>
                        </>
                ) }
            </InnerPageFrame>
        );
    }
}