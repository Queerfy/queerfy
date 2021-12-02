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

import { Divider, MapContainer, PopupStyled, TitleMap } from './style';
import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
import { Home, MapPin } from 'react-feather';

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
  const [houses, setHouses] = useState([]);

  const router = useRouter();

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
    api.get('/properties').then((res) => {
      setHouses(res.data);
    });
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
              {houses.map((item) => (
                <>
                  <Marker
                    position={[Number(item?.latitude), Number(item?.longitude)]}
                    icon={markerIconMap}
                  >
                    <PopupStyled>
                      <h3><Home size={15} /> {item.name}</h3>
                      <span>{item.street}</span>
                      <span>{item.description}</span>
                      <Divider />
                      <span><strong>CEP:</strong> {item.cep}</span>
                      <span><strong>Diária:</strong> {item.dailyPrice.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}</span>
                      <Divider />
                      <a onClick={() => {
                        router.push(`/House/${item.id}`)
                      }}>Ver mais</a>
                    </PopupStyled>
                  </Marker>
                </>
              ))}
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
