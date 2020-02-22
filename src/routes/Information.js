
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';




const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Information extends Component {
  static defaultProps = {
    center: {
      lat: 37.4965131,
      lng: 126.7865525
    },
    zoom: 19
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.4965131}
            lng={126.7865539}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Information;