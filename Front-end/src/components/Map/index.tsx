import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';

import { MapContainer as LeafletMap, TileLayer, MapContainerProps as LeafletMapProps, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import L from "leaflet";

/* import mapMarkerICon from "../../../public/markerMap.png"; */

interface MapProps extends LeafletMapProps {
  interactive?: boolean;
  children: React.ReactNode
}

const markerIconMap = L.icon({
  iconUrl: "../../../public/markerMap.png",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

const Map: NextPage = ({ children, interactive = true, ...props }: MapProps) => {

  const [ initialPosition, setInitialPosition ] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("latitude: ", position.coords.latitude);
        console.log("longitude: ", position.coords.longitude);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setInitialPosition([latitude, longitude]);
      })
    }
  }, []);

  return(
    <div style={{ border: '2px solid blue', height: '500px', marginBottom: '20px' }}>
      <LeafletMap
        style={{ width: '100%', height: '100%' }}
        center={[-23.5582664, -46.66144]}
        zoom={15}
        {...props}
      >
        <TileLayer
          /* url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" */
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
        />
        <Marker position={[-23.5582664, -46.66144]}>
          <Popup>
            A pretty CSS3 popup, <br /> Easily customizable
          </Popup>
        </Marker>
      </LeafletMap>
    </div>
  )
}

export default Map;
