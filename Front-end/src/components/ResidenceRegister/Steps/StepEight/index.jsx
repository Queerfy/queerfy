import React from 'react';
import Link from 'next/link';

import { Container, InputBox } from './styles';

import { GeneralButton } from '../../../GeneralButton';
import { theme } from '../../../../styles/theme';
import { HeaderMobile } from '../../../HeaderMobile';

export const StepEight = () => {
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
      <GeneralButton text="Continuar" bgColor={theme.gradients.red} />
      <Link href="/">
        <span>Voltar</span>
      </Link>
    </Container>
  );
};
