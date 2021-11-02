import React, { useState } from 'react';

import { MinusCircle, PlusCircle } from 'react-feather';

import { Container, CounterBox } from './styles';

export const Counter = ({ label }) => {
  const [counter, setCounter] = useState(0);

  return (
    <Container>
      <h1>{label}</h1>
      <CounterBox>
        <MinusCircle onClick={() => setCounter(counter - 1)} size={30} />
        <span>{counter}</span>
        <PlusCircle onClick={() => setCounter(counter + 1)} size={30} />
      </CounterBox>
    </Container>
  );
};
