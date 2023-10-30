"use client"
import React from 'react'
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Popup } from "react-leaflet";

import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
function MapLeft() {
    const position = [35.76081170005898, 51.059167325594025];

  return (
    <MapContainer
    center={position}
    zoom={13}
    scrollWheelZoom={false}
    style={{
      height: "430px",
      width: "100%",
      overflow: "hidden",
      zIndex: "2",
    }}
  >
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>رسام نقش آناهیتا</Popup>
    </Marker>
  </MapContainer>
  )
}

export default MapLeft