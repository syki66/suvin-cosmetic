import React, { Component } from "react";

import InnerPageFrame from "../common/InnerPageFrame";
 
export default function Notice() {
    return (
        <InnerPageFrame
            title="Customer"
            subtitle={["Notice", "Comments"]}
        >
            <div>notice</div>
        </InnerPageFrame>
    )
    
}