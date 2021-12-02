import React from 'react';

import { MinusCircle, PlusCircle } from 'react-feather';

import { Container, CounterBox } from './styles';

export const Counter = ({ label, counter, setCounter }) => {

  function minusCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <Container>
      <h1>{label}</h1>
      <CounterBox>
        <MinusCircle onClick={minusCounter} size={30} />
        <span>{counter}</span>
        <PlusCircle onClick={() => setCounter(counter + 1)} size={30} />
      </CounterBox>
    </Container>
  );
};
