import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { useResidence } from '../../../../hooks/residence';

import { theme } from '../../../../styles/theme';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container } from './styles';

export const StepSix = () => {
  const { advanceStep, backStep, handleStep } = useResidence();

  const nameRef = useRef();
  const descriptionRef = useRef();

  function hasEmptyProperties(name, description) {
    if (name === "" || description === "") {
      return true;
    } else {
      return false;
    }
  }

  function sendParams() {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    if (hasEmptyProperties(name, description)) {
      return toast.error("Preencha todos os campos.");
    }

    handleStep({ name, description });
    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Vamos dar um nome e uma descrição ao seu espaço</h1>
      <h2>Crie seu título</h2>
      <input ref={nameRef} type="text" placeholder="Casa em frente ao mar" />
      <h2>Crie sua descrição</h2>
      <textarea ref={descriptionRef} maxLength="100" placeholder="Casa belíssima em frente ao mar na praia do Porto" />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
