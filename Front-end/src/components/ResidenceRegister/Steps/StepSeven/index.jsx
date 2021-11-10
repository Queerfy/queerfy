import React from 'react';
import Link from 'next/link';

import { theme } from '../../../../styles/theme';

import { GeneralButton } from '../../../GeneralButton';

import { Container, InputBox } from './styles';
import { Image } from 'react-feather';
import { HeaderMobile } from '../../../HeaderMobile';

export const StepSeven = () => {
  return (
    <Container>
      <HeaderMobile />
      <h1>A seguir, vamos adicionar algumas fotos</h1>
      <InputBox>
        <label htmlFor="arquivo">
          <Image size={100} />
          <h1>Vamos adicionar algumas fotos!</h1>
          <p>Adicione pelo menos 5 fotos</p>
        </label>
        <input type="file" name="arquivo" id="arquivo" />
      </InputBox>
      <GeneralButton text="Continuar" bgColor={theme.gradients.red} />
      <Link href="/">
        <span>Voltar</span>
      </Link>
    </Container>
  );
};
