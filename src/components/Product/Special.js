import React from 'react'

import InnerPageFrame from "../common/InnerPageFrame";

export default function Special() {
    return (
        <InnerPageFrame
            title="Product"
            subtitle={["Premium", "Special", "Others"]}
        >
            <div>Special</div>
        </InnerPageFrame>
    );
}