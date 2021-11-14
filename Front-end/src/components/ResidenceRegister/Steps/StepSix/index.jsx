import React from 'react';
import { useResidence } from '../../../../hooks/residence';

import { theme } from '../../../../styles/theme';

import { GeneralButton } from '../../../GeneralButton';

import { Container, InputBox } from './styles';
import { Image } from 'react-feather';
import { HeaderMobile } from '../../../HeaderMobile';

export const StepSix = () => {
  const { advanceStep, backStep, residenceData } = useResidence();

  console.log(residenceData);

  return (
    <Container>
      <HeaderMobile />
      <InputBox>
        <label htmlFor="arquivo">
          <Image size={100} />
          <h1>Vamos adicionar algumas fotos!</h1>
          <p>Adicione pelo menos 5 fotos</p>
        </label>
        <input type="file" name="arquivo" id="arquivo" />
      </InputBox>
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={advanceStep}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
