import React, { useState } from 'react';

import { theme } from '../../../styles/theme';

import { useResidence } from '../../../hooks/residence';

import { Option } from '../Option';
import { GeneralButton } from '../../GeneralButton';
import { HeaderMobile } from '../../HeaderMobile';

import { Container } from './styles';

import { toast } from 'react-toastify';

export const StepOne = () => {
  const { advanceStep, backStep, handleStep, residenceData } = useResidence();
  const [propertyType, setPropertyType] = useState(null);

  function sendParams() {
    if (propertyType === null) {
      return toast.error('Selecione o tipo da sua propriedade.');
    }

    handleStep({ propertyType });
    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Qual tipo de espaço você deseja hospedar?</h1>
      <Option onClick={() => setPropertyType('apartamento')} label="Apartamento" image="apartment.png" alt="apartamento" />
      <Option onClick={() => setPropertyType('casa')} label="Casa" image="house.png" alt="casa" />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
