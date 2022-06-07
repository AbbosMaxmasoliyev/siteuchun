import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'
import MapContainer from 'yandex-map-react/lib/MapContainer'

 class Google_Map extends Component {
  render() {
    const coords = { lat:39.6449033 , lng: 66.9621819 };
    return (
      <Map 
        google={this.props.google}
        style={{width:"100%", height:"100%"}}
        zoom={10}
        initialCenter = {coords}
      />
    )
  }
}


export  default GoogleApiWrapper({
    apiKey:"AIzaSyAv728PChSPBxTYPVy7xXU4xVS-N3jfC_U"
})(Google_Map)