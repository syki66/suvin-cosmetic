import React from "react";

export default function Loading() {
    return(
        <div className="pt-5" style={{ height: "570px", display: "flex", justifyContent: "center" }}>
            <div className="loaders-container">
                <div className="spinner_container p-3">
                    <div className="spinner_circle"></div>
                </div>
            </div>
        </div>
    );
}