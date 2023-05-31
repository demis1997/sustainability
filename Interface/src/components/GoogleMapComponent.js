import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800sx',
  height: '500px'
};

const center = {
  lat: 15.745,
  lng: -38.523
};

class GoogleMapComponent extends Component {
  renderMarkers() {
    const { markers } = this.props;

    return markers.map((marker, index) => (
      <Marker key={index} position={marker.position} />
    ));
  }

  render() {
    const { center } = this.props;

    if (!center) {
      // If no center is provided, do not render the map
      return null;
    }
    
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCZuMUHXGzhFaLyFxonBb4hBIzwy4ksrgY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          {this.renderMarkers()}
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default GoogleMapComponent;
