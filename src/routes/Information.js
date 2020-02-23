
import React, { Component } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'


const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;

function Information() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={CLIENT_ID}
    >
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%',
          height: '400px',
        }}
        defaultCenter={{ lat: 37.4965077, lng: 126.7862828 }}
        defaultZoom={18}
      />
    </RenderAfterNavermapsLoaded>
  );
}

export default Information;