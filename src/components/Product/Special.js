import React from "react";

import fetchMarkdowns from "../common/board/fetchMarkdowns"
import InnerPageFrame from "../common/InnerPageFrame";
import Loading from "../common/Loading"
import ProductFrame from "./ProductFrame";


export default class Special extends React.Component {
    state = {
        isLoading: true,
        posts: []
    }

    async componentDidMount() {
        const posts = await fetchMarkdowns("special");
        this.setState({ posts, isLoading: false })
    }

    render() {
        const { posts, isLoading } = this.state;

        const menuTitle = "Special"
        const menuSubtitle = ["Premium", "Special", "Others"]

        return (
            <InnerPageFrame
                title={menuTitle}
                subtitle={menuSubtitle}
            >

                {isLoading ? (
                        <Loading />
                    ) : (
                        <ProductFrame
                            subtitle={menuSubtitle[1]}
                            posts={posts}
                            menuTitle={menuTitle}
                            menuSubtitle={menuSubtitle}
                        />
                    )
                }
            </InnerPageFrame>
        );
    }
}