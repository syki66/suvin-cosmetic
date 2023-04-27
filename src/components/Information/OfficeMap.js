import React from "react";

import InnerPageFrame from "../common/InnerPageFrame";

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

// 루트폴더에 .env 파일 하나 만들고, REACT_APP_NAVER_CLIENT_ID=여기다네이버클라이언트아이디따옴표없이쓰면됨

const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;

export default function OfficeMap() {
  return (
    <InnerPageFrame title="Information" subtitle={["Company", "Office Map"]}>
      <div className="h2 py-2">Office Map</div>

      <div className="h4 border-top border-light pt-5 pb-3">Address</div>

      <div style={{ color: "gray" }} className="font-weight-bold">
        27, Bucheon-ro 136beon-gil, Bucheon-si, Gyeonggi-do, Republic of Korea
      </div>
      <div style={{ color: "gray" }}>
        [14544] 경기도 부천시 소향로13번길 20, 701-2호
      </div>

      <div style={{ color: "gray" }} className="font-weight-bold pt-4">
        <span style={{ color: "#6e391a" }}>Tel :</span> 1688-9028
      </div>
      <div style={{ color: "gray" }} className="font-weight-bold pb-5">
        <span style={{ color: "#6e391a" }}>Mobile :</span> +82-10-6644-3665,
        +82-10-2010-4261(Overseas Marketing)
      </div>

      <RenderAfterNavermapsLoaded ncpClientId={CLIENT_ID}>
        <NaverMap
          className="border border-light"
          mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
          style={{
            width: "100%",
            height: "500px",
          }}
          defaultCenter={{ lat: 37.5046, lng: 126.74945 }}
          defaultZoom={18}
        >
          <Marker
            position={{ lat: 37.5046, lng: 126.74945 }}
            animation={1}
            onClick={() => {
              alert("[14544] 경기도 부천시 소향로13번길 20, 701-2호");
            }}
          />
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </InnerPageFrame>
  );
}
