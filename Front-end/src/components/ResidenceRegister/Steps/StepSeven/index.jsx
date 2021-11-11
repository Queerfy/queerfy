import React from 'react';

import { useResidence } from '../../../../hooks/residence';

import { Container, InputBox } from './styles';

import { GeneralButton } from '../../../GeneralButton';
import { theme } from '../../../../styles/theme';
import { HeaderMobile } from '../../../HeaderMobile';

export const StepSeven = () => {
  const { advanceStep, backStep } = useResidence();

  return (
    <Container>
      <HeaderMobile />
      <InputBox>
        <input type="number" placeholder="00,00" />
      </InputBox>
      <p>
        Lembre-se de que os preços de lugares como o seu geralmente variam de:
        <br />
        <strong>R$117</strong> a <strong>R$196</strong>.
      </p>
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={advanceStep}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
