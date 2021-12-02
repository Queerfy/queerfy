import React from 'react';
import { Container, InsideContainer } from './styles';

export const Option = ({ label, image = '', alt = '', onClick, selected }) => {
  return (
    <Container selected={selected}>
      <InsideContainer onClick={onClick}>
        {image !== '' && <img src={image} alt={alt} />}
        <span>{label}</span>
      </InsideContainer>
    </Container>
  );
};
