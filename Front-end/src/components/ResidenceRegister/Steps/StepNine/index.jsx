import React from 'react';
import { useResidence } from '../../../../hooks/residence';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container, Content } from './styles';
import { theme } from '../../../../styles/theme';

export const StepNine = () => {
  const { advanceStep, backStep } = useResidence();

  return (
    <Container>
      <HeaderMobile />
      <h1>Este anúncio ficará visível aos hóspedes imediatamente.</h1>
      <Content>
        <img src="city-example.jpg" alt="casa" />
        <h1>Casa de campo</h1>
        <p>Quarto inteiro em casa residencial</p>
      </Content>
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={advanceStep}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
