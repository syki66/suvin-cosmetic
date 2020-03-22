import React from "react";

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBNavLink } from "mdbreact";

import firstToThridNotice from "../common/board/fetchMarkdowns";

import { Link } from "react-router-dom";

import { rawMarkdownUrlArray } from "../common/board/rawMarkdownUrlArray"


export default class NoticeContact extends React.Component {
    state = {
        isLoading: true,
        posts: []
    }


    async componentDidMount() {
        const posts = await firstToThridNotice("posts", true);
        this.setState({ posts, isLoading: false })
    }




    render() {
        const { posts, isLoading } = this.state;
        const menuTitle = "Customer"
        const menuSubtitle = ["Notice", "Comments"]
        const postsLength = rawMarkdownUrlArray("posts").length
        return(
            <MDBContainer>
    
                <MDBRow className="pb-sm-4 pb-md-5">
    
                    <MDBCol size="12" sm="6">


                            <MDBRow>
                                <MDBCol lg="12" className="h2 font-weight-bold"  style={{backgroundColor:"green"}}>NOTICE</MDBCol>
                            </MDBRow>

                                {(isLoading) ? (
                                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"50%"}}>
                                        <div className="spinner-border" style={{color:"#7f304e"}}>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    posts.map((post, i) => {
                                        return (
                                            <Link
                                                to={{
                                                    pathname: `Notice-${postsLength-i}`,
                                                    state: {
                                                        index: postsLength-i,
                                                        title: post.title,
                                                        date: post.date,
                                                        writer: post.writer,
                                                        mainText: post.mainText,
                                                        disqus: post.disqus,
    
                                                        menuTitle,
                                                        menuSubtitle
                                                    }
                                                }}>
                                                
                                                <MDBRow style={{color:"gray"}}>
                                                    <MDBCol size="9" style={{color:"black"}}><li>{post.title}</li></MDBCol>
                                                    <MDBCol size="3">{post.date}</MDBCol>
                                                </MDBRow>
                                                
                                            </Link>
                                        )
                                    })
                                )}
                            
                        
                    </MDBCol>
    
                    <MDBCol size="12" sm="6" style={{backgroundColor:'red'}}>
                        <MDBView className="hoverable">
                            <MDBRow>
                                <MDBCol size="12" xl="4" className="h2 font-weight-bold">CONTACT</MDBCol>
                                
                                <MDBCol size="12" xl="8">
                                    <div className="font-weight-bold" style={{color:"#93375a"}}><span className="h2 font-weight-bold">1688-9028</span> (Customer Center)</div>
                                    <div>Bussiness hours : 09:00~18:00</div>
                                    <div>E-mail : dhkkis@daum.net</div>
                                    <div className="font-weight-bold" style={{color:"#c4276a"}}>계좌: 210702-04-163993 (국민은행 김덕훈)</div>
                                    <div className="font-weight-bold">Mobile : 010-6644-3665</div>
                                
                                </MDBCol>
                            </MDBRow>
                        </MDBView>
                    </MDBCol>
    
                </MDBRow>
    
            </MDBContainer>
        );

    }
}