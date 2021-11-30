import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { useResidence } from '../../hooks/residence';

import {
  Container,
  BannerContainer,
  LogoContainer,
  FormContainer,
} from '../../components/ResidenceRegister/styles';

import { StepOne } from '../../components/ResidenceRegister/Steps';
import { StepTwo } from '../../components/ResidenceRegister/Steps/StepTwo';
import { StepThree } from './Steps/StepThree';
import { StepFour } from './Steps/StepFour';
import { StepFive } from './Steps/StepFive';
import { StepSix } from './Steps/StepSix';
import { StepSeven } from './Steps/StepSeven';
import { StepEight } from './Steps/StepEight';
import { StepNine } from './Steps/StepNine';

export const ResidenceForm = () => {
  const { step } = useResidence();

  return (
    <>
      <Head>
        <title>Registro de propriedades</title>
      </Head>
      <Container>
        <BannerContainer>
          <Link href="/">
            <LogoContainer>
              <img src="logo.svg" alt="queerfy" />
              <h1>Queerfy</h1>
            </LogoContainer>
          </Link>
          <h1>
            {(step === 1 || step === 2) &&
              'Qual tipo de espaço você deseja hospedar?'}
            {step === 3 && 'Insira o endereço da sua locação '}
            {step === 4 &&
              'Quais são as especificações do espaço que você deseja hospedar?'}
            {step === 5 && 'Agora vamos ser mais específicos'}
            {step === 6 && 'Vamos dar um nome e uma descrição ao seu espaço'}
            {step === 7 && 'A seguir, vamos adicionar algumas fotos'}
            {step === 8 && `Agora vem a parte divertida: definir seu preço`}
          </h1>
          {step === 9 && (
            <p>
              <h1>Confira seu anúncio!</h1>
              <span>
                Este anúncio ficará visível aos hóspedes imediatamente.
              </span>
            </p>
          )}
          <span>Queerfy © 2021 Todos os direitos reservados</span>
        </BannerContainer>
        <FormContainer>
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step === 4 && <StepFour />}
          {step === 5 && <StepFive />}
          {step === 6 && <StepSix />}
          {step === 7 && <StepSeven />}
          {step === 8 && <StepEight />}
          {step === 9 && <StepNine />}
        </FormContainer>
      </Container>
    </>
  );
};
