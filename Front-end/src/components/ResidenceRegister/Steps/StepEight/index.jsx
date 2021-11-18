import React from 'react';
import { useResidence } from '../../../../hooks/residence';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container, Content } from './styles';
import { theme } from '../../../../styles/theme';

export const StepEight = () => {
  const { advanceStep, backStep, residenceData } = useResidence();

  return (
    <Container>
      <HeaderMobile />
      <h1>Este anúncio ficará visível aos hóspedes imediatamente.</h1>
      <Content>
        <img src="city-example.jpg" alt="casa" />
        <h1>{residenceData.name}</h1>
        <p>{residenceData.description}</p>
        <p><strong>Valor diária: </strong>
          {residenceData.dailyPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
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
