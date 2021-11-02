import React from 'react';
import Link from 'next/link';

import { theme } from '../../../../styles/theme';

import { GeneralButton } from '../../../GeneralButton';

import { Container } from './styles';

export const StepSeven = () => {
  return (
    <Container>
      <h1>A seguir, vamos adicionar algumas fotos do seu coração</h1>

      <div>
        <h1>Arraste suas fotos para cá</h1>
        <p>Adicione pelo menos 5 fotos</p>
        <input type="file" />
      </div>

      <GeneralButton text="Continuar" bgColor={theme.gradients.red} />
      <Link href="/">
        <span>Voltar</span>
      </Link>
    </Container>
  );
};
