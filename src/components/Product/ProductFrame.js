import React from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdbreact";


export default function ProductFrame({ subtitle, posts, menuTitle, menuSubtitle}) {
    return (
        <>
            <div className="h2 py-2">{subtitle}</div>

            <div className="border-top border-light pt-5">

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



                                <MDBRow>
                                    <MDBCol>{post.thumbnail}</MDBCol>
                                </MDBRow>


                                <MDBRow className="py-2 mx-1" style={{ color:"gray", display:"flex", alignItems:"center" }} >

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




