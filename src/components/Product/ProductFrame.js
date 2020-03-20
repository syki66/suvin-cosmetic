import React from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdbreact";


export default function ProductFrame({ subtitle, posts, menuTitle, menuSubtitle}) {
    return (


        <>
        <div className="h2 py-2">{subtitle}</div>

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
                                pathname: `${subtitle}-${post.index}`,
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






    );





}




