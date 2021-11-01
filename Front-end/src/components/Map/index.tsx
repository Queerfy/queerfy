import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';

import L from "leaflet";

import { MapContainer as LeafletMap, TileLayer, MapContainerProps as LeafletMapProps, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import { MapContainer, PopupStyled } from "./style";

interface MapProps extends LeafletMapProps {
  interactive?: boolean;
  children: React.ReactNode
}

const markerIconMap = L.icon({
  iconUrl: "map-pin.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

const Map: NextPage = ({ children, interactive = true, ...props }: MapProps) => {

  const [ initialPosition, setInitialPosition ] = useState<[number, number]>([0, 0]);

  /* const getLocations = () => {
    let latitude;
    let longitude;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      })
    }
    setInitialPosition([latitude, longitude]);
  } */

  const getLatitude = new Promise<Number|null>((resolve, reject): void => {
    let latitude: Number;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        resolve(Number(latitude));
      })
    }else {
      reject(null);
    }
  })

  const getLocations = async() => {
    const latitude = await getLatitude();
    console.log(latitude);
  }

  useEffect(() => {
    /* getLocations(); */
  }, []);

  return(
    <MapContainer>
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
        <Marker position={[-23.5582664, -46.66144]} icon={markerIconMap}>
          <PopupStyled>
            <a href="">
              Informações da casa <br /> vai estar aqui.
            </a>
          </PopupStyled>
        </Marker>
      </LeafletMap>
    </MapContainer>
  )
}

export default Map;
