import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const apiMaps = undefined;

class Maps extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={18}
        initialCenter={{
          lat: -32.9824,
          lng: -68.775711
        }}
      >
        <Marker onClick={this.onMarkerClick} name={"Mendoza"} />
        <InfoWindow onClose={this.onInfoWindowClose} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiMaps
})(Maps);
