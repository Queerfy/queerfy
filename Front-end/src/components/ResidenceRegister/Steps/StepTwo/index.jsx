import React, { useState } from 'react';
import { useResidence } from '../../../../hooks/residence';

import { theme } from '../../../../styles/theme';

import { Container } from './styles';

import { Option } from '../../Option';
import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';
import { toast } from 'react-toastify';

export const StepTwo = () => {
  const [spaceType, setSpaceType] = useState(null);

  const {
    advanceStep,
    backStep,
    handleStep
  } = useResidence();

  function sendParams() {
    if (spaceType === null) {
      return toast.error("Selecione uma tipo de espaço!");
    }

    handleStep({ spaceType });
    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Qual tipo de espaço você deseja hospedar?</h1>
      <Option onClick={() => setSpaceType('lugar inteiro')} label="Lugar inteiro" />
      <Option onClick={() => setSpaceType('quarto inteiro')} label="Quarto inteiro" />
      <Option onClick={() => setSpaceType('quarto compartilhado')} label="Quarto compartilhado" />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
