import React from 'react';
import { useResidence } from '../../../../hooks/residence';

import { theme } from '../../../../styles/theme';
import { Container, CounterBox } from './styles';

import { HeaderMobile } from '../../../HeaderMobile';
import { Counter } from '../../Counter';
import { GeneralButton } from '../../../GeneralButton';

export const StepThree = () => {
  const { advanceStep, backStep } = useResidence();

  return (
    <Container>
      <HeaderMobile />
      <h1>Quais são as especificações do espaço que você deseja alugar?</h1>
      <CounterBox>
        <Counter label="Hóspedes" />
        <Counter label="Quartos" />
        <Counter label="Camas" />
        <Counter label="Banheiros" />
      </CounterBox>
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={advanceStep}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
