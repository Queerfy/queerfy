import React from 'react';
import Link from 'next/link';

import { Container, BannerContainer, LogoContainer, FormContainer } from '../../components/ResidenceRegister/styles';

import { StepOne } from '../../components/ResidenceRegister/Steps';
import { StepTwo } from '../../components/ResidenceRegister/Steps/StepTwo';
import { StepFour } from '../../components/ResidenceRegister/Steps/StepFour';
import { StepFive } from '../../components/ResidenceRegister/Steps/StepFive';
import { StepSix } from '../../components/ResidenceRegister/Steps/StepSix';
import { StepSeven } from '../../components/ResidenceRegister/Steps/StepSeven';
import { StepEight } from '../../components/ResidenceRegister/Steps/StepEight';
import { StepNine } from '../../components/ResidenceRegister/Steps/StepNine';
import { useResidence } from '../../hooks/residence';

export const ResidenceForm = () => {
  const { step } = useResidence();

  return (
    <Container>
      <BannerContainer>
        <Link href="/">
          <LogoContainer>
            <img src="logo.svg" alt="queerfy" />
            <h1>Queerfy</h1>
          </LogoContainer>
        </Link>
        <h1>
          {(step === 1 || step === 2) && 'Qual tipo de espaço você deseja hospedar?'}
          {step === 3 && 'Quais são as especificações do espaço que você deseja alugar?'}
          {step === 4 && 'Agora vamos ser mais específicos'}
          {step === 5 && 'Vamos dar um nome e uma descrição ao seu espaço'}
          {step === 6 && `Agora vem a parte divertida. Vamos definir seu preço`}
        </h1>
        {step === 8 && (
          <p>
            <h1>Confira seu anúncio!</h1>
            <span>Este anúncio ficará visível aos hóspedes imediatamente.</span>
          </p>
        )}
        <span>Queerfy © 2021 Todos os direitos reservados</span>
      </BannerContainer>
      <FormContainer>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepFour />}
        {step === 4 && <StepFive />}
        {step === 5 && <StepSix />}
        {step === 7 && <StepSeven />}
        {step === 6 && <StepEight />}
        {step === 8 && <StepNine />}
      </FormContainer>
    </Container>
  );
}
