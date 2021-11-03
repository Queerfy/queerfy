import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';

import L from 'leaflet';

import {
  MapContainer as LeafletMap,
  TileLayer,
  MapContainerProps as LeafletMapProps,
  Marker,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { MapContainer, PopupStyled, TitleMap } from './style';

interface MapProps extends LeafletMapProps {
  interactive?: boolean;
  children: React.ReactNode;
}

const markerIconMap = L.icon({
  iconUrl: 'map-pin.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

const Map: NextPage = ({
  children,
  interactive = true,
  ...props
}: MapProps) => {
  const [status, setStatus] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Localização indisponivel!');
    } else {
      setStatus('Carregando...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {latitude && longitude ? (
        <>
          <TitleMap>Locais para alugar de acordo com a sua região</TitleMap>
          <MapContainer>
            <LeafletMap
              style={{ width: '100%', height: '100%' }}
              center={[latitude, longitude]}
              zoom={15}
              {...props}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
              />
              <Marker position={[latitude, longitude]} icon={markerIconMap}>
                <PopupStyled>
                  <a href="">Você está aqui!</a>
                </PopupStyled>
              </Marker>
            </LeafletMap>
          </MapContainer>
        </>
      ) : (
        <p>{status}</p>
      )}
    </>
  );
};

export default Map;
