import React from "react";

import fetchMarkdowns from "../common/board/fetchMarkdowns"
import InnerPageFrame from "../common/InnerPageFrame";
import Loading from "../common/Loading"
import ProductFrame from "./ProductFrame";


export default class Premium extends React.Component {
    state = {
        isLoading: true,
        posts: []
    }

    async componentDidMount() {
        const posts = await fetchMarkdowns("premium");
        this.setState({ posts, isLoading: false })
    }

    render() {
        const { posts, isLoading } = this.state;

        const menuTitle = "Product"
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
                            subtitle={menuSubtitle[0]}
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