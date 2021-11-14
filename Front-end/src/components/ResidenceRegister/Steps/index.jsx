import React, { useState } from 'react';

import { useResidence } from '../../../hooks/residence';

import { theme } from '../../../styles/theme';

import { Container } from './styles';

import { Option } from '../Option';
import { GeneralButton } from '../../GeneralButton';
import { HeaderMobile } from '../../HeaderMobile';

export const StepOne = () => {
  const { advanceStep, backStep, handleStep } = useResidence();
  const [residenceType, setTesidenceType] = useState(null);

  function sendParams() {
    handleStep({ residenceType });
    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Qual tipo de espaço você deseja hospedar?</h1>
      <Option onClick={() => setTesidenceType('apartamento')} label="Apartamento" image="apartment.png" alt="apartamento" />
      <Option onClick={() => setTesidenceType('casa')} label="Casa" image="house.png" alt="casa" />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
