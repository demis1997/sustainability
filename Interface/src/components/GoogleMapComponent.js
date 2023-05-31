// import { useMemo } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// //const {isLoaded} = useJsApiLoader({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,})

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function GoogleMapComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: process.env.NEXT_GOOGLE_MAPS_DAY_MAP_ID,
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     //Here we should load pins from contract maybe
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         // onLoad={map => {
//         //   const bounds = new window.google.maps.LatLngBounds();
//         //   map.fitBounds(bounds);}
//         // }
//         onLoad={onload}
//         //Not sure about this maybe we need to clear pins or do nothing
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(GoogleMapComponent)
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
