import React, { useState } from 'react';
import { useResidence } from '../../../../hooks/residence';

import { theme } from '../../../../styles/theme';
import { Container, CounterBox } from './styles';

import { HeaderMobile } from '../../../HeaderMobile';
import { Counter } from '../../Counter';
import { GeneralButton } from '../../../GeneralButton';
import { toast } from 'react-toastify';

export const StepFour = () => {
  const { advanceStep, backStep, handleStep, residenceData } = useResidence();

  console.log(residenceData);

  const [guestCounter, setGuestCounter] = useState(0);
  const [roomCounter, setRoomCounter] = useState(0);
  const [bedCounter, setBedCounter] = useState(0);
  const [bathroomCounter, setBathroomCounter] = useState(0);

  function hasEmptyProperties() {
    if (
      guestCounter == 0 ||
      roomCounter == 0 ||
      bedCounter == 0 ||
      bathroomCounter == 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  function sendParams() {
    const specifications = {
      guestsQuantity: guestCounter,
      roomQuantity: roomCounter,
      bedsQuantity: bedCounter,
      bathroomQuantity: bathroomCounter,
    }

    if (hasEmptyProperties()) {
      return toast.error("Sua propriedade deve ter pelo menos 1 de cada item!");
    }

    handleStep(specifications);
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
