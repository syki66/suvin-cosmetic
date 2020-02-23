
import React, { Component } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

console.log(process.env.REACT_APP_API)
function Information() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_API}
    >
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%',
          height: '400px',
        }}
        defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
        defaultZoom={10}
      />
    </RenderAfterNavermapsLoaded>
  );
}

export default Information;