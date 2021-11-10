import React from 'react';
import { useResidence } from '../../../../hooks/residence';

import { theme } from '../../../../styles/theme';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container } from './styles';

export const StepSix = () => {
  const { advanceStep, backStep } = useResidence();

  return (
    <Container>
      <HeaderMobile />
      <h1>Vamos dar um nome e uma descrição ao seu espaço</h1>
      <h2>Crie seu título</h2>
      <input type="text" placeholder="Casa em frente ao mar de Penha" />
      <h2>Crie sua descrição</h2>
      <textarea placeholder="Casa bélissima em frente a lagoa do porto." />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={advanceStep}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
