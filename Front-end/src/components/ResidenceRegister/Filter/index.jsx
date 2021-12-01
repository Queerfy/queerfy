import React, { useState } from 'react';

import { Container } from './styles';

export const Filter = ({ onClick, image, icon, label, alt }) => {
  const [selected, setSelected] = useState(false);

  function handleSelection() {
    onClick();

    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  }

  return (
    <Container selected={selected} onClick={handleSelection}>
      {icon ? icon : <img src={image} alt={alt} />}
      <span>{label}</span>
    </Container>
  );
};
