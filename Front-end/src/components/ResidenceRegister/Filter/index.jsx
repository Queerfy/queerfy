import React from 'react';

import { Container } from './styles';

export const Filter = ({ image, icon, label, alt }) => {
  return (
    <Container>
      {icon ? icon : <img src={image} alt={alt} />}
      <span>{label}</span>
    </Container>
  );
};
