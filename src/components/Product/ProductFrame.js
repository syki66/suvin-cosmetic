import React from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdbreact";


export default function ProductFrame({ subtitle, posts, menuTitle, menuSubtitle}) {
    return (
        <>
            <div className="h2 py-2">{subtitle}</div>

            <div className="border-top border-light pt-5">


                <MDBRow>

                    {posts.map(post => {
                        return (
                            <MDBCol size="12" sm="6" lg="4" xl="3" style={{ }}>
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

                                    <div><img src={post.thumbnail} className="img-fluid"/></div>
                                    <div>{post.title}</div>
                                    <div>작성자 : {post.writer}</div>
                                    <div>작성일 : {post.date}</div>

                                </Link>
                            </MDBCol>
                        );
                    })}


                </MDBRow>




            </div>
        </>

    );

}




