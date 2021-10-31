import React from 'react';
import Link from 'next/link';

import { theme } from '../../../../styles/theme';

import { Container } from './styles';

import { Option } from '../../Option';
import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

export const StepTwo = () => {
  return (
    <Container>
      <HeaderMobile />
      <h1>Qual tipo de espaço você deseja hospedar?</h1>
      <Option label="Lugar inteiro" />
      <Option label="Quarto inteiro" />
      <Option label="Quarto compartilhado" />
      <GeneralButton text="Continuar" bgColor={theme.gradients.red} />
      <Link href="/">
        <span>Voltar</span>
      </Link>
    </Container>
  );
};
