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
import { api, apiGeocodeSearch } from '../../services/api';

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

  const getLocation = async () => {
    if (!navigator.geolocation) {
      setStatus('Localização indisponível!');
    } else {
      setStatus('Carregando...');
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          /* const response = await api.get('/properties');
          console.log(response.data); */

          /* const { data } = await apiGeocodeSearch.get('/radius', {
            params: {
              key: '38GhVvh0oG1ELtq8z7FDb7UI6S3ymwHU',
              origin: `${position.coords.latitude},${position.coords.longitude}`,
            },
          });
          console.log(data); */
        },
        (error) => {
          console.log(error);
        },
        {
          timeout: 30000,
          enableHighAccuracy: false,
          maximumAge: 15000,
        }
      );
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
              {/* <Marker position={[latitude, longitude]} icon={markerIconMap}>
                <PopupStyled>
                  <a href="">Você está aqui!</a>
                </PopupStyled>
              </Marker> */}
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
