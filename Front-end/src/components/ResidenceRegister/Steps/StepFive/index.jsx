import React from 'react';
import Link from 'next/link';

import { HeaderMobile } from '../../../HeaderMobile';
import { Filter } from '../../Filter';

import { Coffee, Wifi } from 'react-feather';

import { Container, FiltersBox } from './styles';
import { GeneralButton } from '../../../GeneralButton';
import { theme } from '../../../../styles/theme';

export const StepFive = () => {
  return (
    <Container>
      <HeaderMobile />
      <h1>Quais filtros se encaixam na residência?</h1>
      <FiltersBox>
        <Filter icon={<Wifi size={30} />} label="Wi-Fi" />
        <Filter icon={<Coffee size={30} />} label="Cozinha" />
        <Filter image="bed.svg" label="Suíte" />
        <Filter image="parking.svg" label="Garagem" />
        <Filter image="cat-paw.svg" label="Animais" />
      </FiltersBox>
      <GeneralButton text="Continuar" bgColor={theme.gradients.red} />
      <Link href="/">
        <span>Voltar</span>
      </Link>
    </Container>
  );
};
