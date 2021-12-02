import React, { useEffect, useState } from 'react';
import { Eye, MapPin } from 'react-feather';
import { api } from '../../services/api';

import { Container, HoveredImage, ImageBox } from './styles';

interface ResidenceProps {
  id?: number;
  name?: string;
  location?: {
    neighborhood?: string;
    city?: string;
  };
  uf?: string;
  trend?: boolean;
  description?: string;
}

export const Residence = (props: ResidenceProps) => {
  const [image, setImage] = useState<string>('');

  const getImage = async () => {
    const { data, headers } = await api.get(`/properties/image1/${props.id}`, {
      responseType: 'arraybuffer',
    });
    if (data.byteLength > 0) {
      let image = btoa(
        new Uint8Array(data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
      setImage(`data:${headers['content-type'].toLowerCase()};base64,${image}`);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Container>
      <ImageBox>
        <HoveredImage>
          <Eye />
        </HoveredImage>
        <img
          src={image == '' ? '../support-banner.svg' : image}
          alt="residence"
        />
      </ImageBox>
      <h4>{props.name}</h4>
      <span>
        <MapPin /> {String(props.uf).toUpperCase()}
      </span>

      {props.trend && <p>{props.description}</p>}
    </Container>
  );
};
