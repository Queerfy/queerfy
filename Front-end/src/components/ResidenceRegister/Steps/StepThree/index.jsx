import React, { useState } from 'react';
import { useResidence } from '../../../../hooks/residence';

import { theme } from '../../../../styles/theme';
import { Container, CounterBox } from './styles';

import { HeaderMobile } from '../../../HeaderMobile';
import { Counter } from '../../Counter';
import { GeneralButton } from '../../../GeneralButton';

export const StepThree = () => {
  const { advanceStep, backStep, handleStep } = useResidence();

  const [guestCounter, setGuestCounter] = useState(0);
  const [roomCounter, setRoomCounter] = useState(0);
  const [bedCounter, setBedCounter] = useState(0);
  const [bathroomCounter, setBathroomCounter] = useState(0);

  function sendParams() {
    const specifications = {
      guest: guestCounter,
      room: roomCounter,
      bed: bedCounter,
      bathroom: bathroomCounter,
    }

    handleStep({ specifications });
    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Quais são as especificações do espaço que você deseja alugar?</h1>
      <CounterBox>
        <Counter
          counter={guestCounter}
          setCounter={setGuestCounter}
          label="Hóspedes"
        />
        <Counter
          counter={roomCounter}
          setCounter={setRoomCounter}
          label="Quartos"
        />
        <Counter
          counter={bedCounter}
          setCounter={setBedCounter}
          label="Camas"
        />
        <Counter
          counter={bathroomCounter}
          setCounter={setBathroomCounter}
          label="Banheiros"
        />
      </CounterBox>
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
