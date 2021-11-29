import React, { useEffect, useState } from 'react';
import { useResidence } from '../../../../hooks/residence';

import { theme } from '../../../../styles/theme';

import { Container } from './styles';

import { Option } from '../../Option';
import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';
import { toast } from 'react-toastify';

export const StepTwo = () => {
  const [spaceType, setSpaceType] = useState(null);

  const { advanceStep, backStep, handleStep, residenceData, handleDataUpdate } =
    useResidence();

  function sendParams() {
    if (spaceType === null && residenceData.spaceType === undefined) {
      return toast.error('Selecione um tipo de espaço.');
    }

    if (residenceData.spaceType === undefined) {
      handleStep({ spaceType });
    } else {
      const newData = {
        ...residenceData,
        spaceType: spaceType === null ? residenceData.spaceType : spaceType,
      };
      handleDataUpdate(newData);
    }

    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Qual tipo de espaço você deseja hospedar?</h1>
      <Option
        onClick={() => setSpaceType('lugar inteiro')}
        label="Lugar inteiro"
      />
      <Option
        onClick={() => setSpaceType('quarto inteiro')}
        label="Quarto inteiro"
      />
      <Option
        onClick={() => setSpaceType('quarto compartilhado')}
        label="Quarto compartilhado"
      />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
