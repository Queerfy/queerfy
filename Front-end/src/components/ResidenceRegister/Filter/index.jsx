import React from 'react';

import { Container } from './styles';

export const Filter = ({ onClick, image, icon, label, alt }) => {
  return (
    <Container onClick={onClick}>
      {icon ? icon : <img src={image} alt={alt} />}
      <span>{label}</span>
    </Container>
  );
};
