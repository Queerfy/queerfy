import React from 'react';
import { Container, InsideContainer } from './styles';

export const Option = ({ label, image = '', alt = '' }) => {
  return (
    <Container>
      <InsideContainer>
        {image !== '' && <img src={image} alt={alt} />}
        <span>{label}</span>
      </InsideContainer>
    </Container>
  );
};
