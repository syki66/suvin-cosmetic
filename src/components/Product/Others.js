import React from 'react'

import InnerPageFrame from "../common/InnerPageFrame";

export default function Others() {
    return (
        <InnerPageFrame
            title="Product"
            subtitle={["Premium", "Special", "Others"]}
        >
            <div>others</div>
        </InnerPageFrame>
    );
}