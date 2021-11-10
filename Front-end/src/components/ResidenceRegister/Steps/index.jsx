import React from 'react';

import { useResidence } from '../../../hooks/residence';

import { theme } from '../../../styles/theme';

import { Container } from './styles';

import { Option } from '../Option';
import { GeneralButton } from '../../GeneralButton';
import { HeaderMobile } from '../../HeaderMobile';

export const StepOne = () => {
  const { advanceStep, backStep } = useResidence();

  return (
    <Container>
      <HeaderMobile />
      <h1>Qual tipo de espaço você deseja hospedar?</h1>
      <Option label="Apartamento" image="apartment.png" alt="apartamento" />
      <Option label="Casa" image="house.png" alt="casa" />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={advanceStep}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
