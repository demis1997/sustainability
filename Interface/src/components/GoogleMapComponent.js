import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800sx',
  height: '500px'
};

const center = {
  lat: 5.745,
  lng: -38.523
};

class GoogleMapComponent extends Component {
  renderMarkers() {
    const { markers } = this.props;

    return markers.map((marker, index) => (
      <Marker key={index} 
      position={marker.position} />
    ));
  }

  render() {
    const apiKey = "AIzaSyCZuMUHXGzhFaLyFxonBb4hBIzwy4ksrgY";
    
    const { center } = this.props;
    // console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
    // console.log((process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY).toString());
    //console.log("AIzaSyCZuMUHXGzhFaLyFxonBb4hBIzwy4ksrgY");
    //console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.toString());

    if (!center) {
      // If no center is provided, do not render the map
      return null;
    }
    
    return (
      <LoadScript
      googleMapsApiKey={apiKey}
    >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          {this.renderMarkers()}
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default GoogleMapComponent;
