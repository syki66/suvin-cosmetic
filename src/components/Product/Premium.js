import React from 'react'

import InnerPageFrame from "../common/InnerPageFrame";

export default function Premium() {
    return (
        <InnerPageFrame
            title="Product"
            subtitle={["Premium", "Special", "Others"]}
        >
            <div>Premium</div>
        </InnerPageFrame>
    );
}