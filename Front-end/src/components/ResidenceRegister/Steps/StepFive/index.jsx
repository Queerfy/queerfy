import React, { useRef } from 'react';
import { useResidence } from '../../../../hooks/residence';

import { theme } from '../../../../styles/theme';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container } from './styles';

export const StepFive = () => {
  const { advanceStep, backStep, handleStep } = useResidence();

  const titleRef = useRef();
  const descriptionRef = useRef();

  function sendParams() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    handleStep({ title, description });
    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Vamos dar um nome e uma descrição ao seu espaço</h1>
      <h2>Crie seu título</h2>
      <input ref={titleRef} type="text" placeholder="Casa em frente ao mar de Penha" />
      <h2>Crie sua descrição</h2>
      <textarea ref={descriptionRef} maxlength="100" placeholder="Casa bélissima em frente a lagoa do porto." />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
