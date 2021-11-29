import React, { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useResidence } from '../../../../hooks/residence';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container } from './styles';

export const StepSix = () => {
  const { advanceStep, backStep, handleStep, residenceData, handleDataUpdate } =
    useResidence();

  const nameRef = useRef();
  const descriptionRef = useRef();

  function hasEmptyProperties(name, description) {
    if (name === '' || description === '') {
      return true;
    } else {
      return false;
    }
  }

  function sendParams() {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    if (hasEmptyProperties(name, description)) {
      return toast.error('Preencha todos os campos.');
    }

    if (
      (residenceData.name === undefined) &
      (residenceData.description === undefined)
    ) {
      handleStep({ name, description });
    } else {
      const newData = {
        ...residenceData,
        name,
        description,
      };
      handleDataUpdate(newData);
    }

    advanceStep();
  }

  useEffect(() => {
    if (residenceData && residenceData.name && residenceData.description) {
      nameRef.current.value = residenceData.name;
      descriptionRef.current.value = residenceData.description;
    }
  }, []);

  return (
    <Container>
      <HeaderMobile />
      <h1>Vamos dar um nome e uma descrição ao seu espaço</h1>
      <h2>Crie seu título</h2>
      <input ref={nameRef} type="text" placeholder="Casa em frente ao mar" />
      <h2>Crie sua descrição</h2>
      <textarea
        ref={descriptionRef}
        maxLength="100"
        placeholder="Casa belíssima em frente ao mar na praia do Porto"
      />
      <GeneralButton
        text="Continuar"
        bgColor='linear-gradient(180deg, #f26b9c 0%, #f15356 80.21%)'
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
