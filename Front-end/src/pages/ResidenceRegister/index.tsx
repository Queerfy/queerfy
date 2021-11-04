import React, { useState } from 'react';
import { NextPage } from 'next';

import { Container, BannerContainer, LogoContainer, FormContainer } from './styles';

import { StepOne } from '../../components/ResidenceRegister/Steps';
import { StepTwo } from '../../components/ResidenceRegister/Steps/StepTwo';
import { StepFour } from '../../components/ResidenceRegister/Steps/StepFour';
import { StepFive } from '../../components/ResidenceRegister/Steps/StepFive';
import { StepSix } from '../../components/ResidenceRegister/Steps/StepSix';
import { StepSeven } from '../../components/ResidenceRegister/Steps/StepSeven';
import { StepEight } from '../../components/ResidenceRegister/Steps/StepEight';
import { StepNine } from '../../components/ResidenceRegister/Steps/StepNine';

const ResidenceRegister: NextPage = () => {
  const [step, setStep] = useState(1);

  return (
    <Container>
      <BannerContainer>
        <LogoContainer>
          <img src="logo.svg" alt="queerfy" />
          <h1>Queerfy</h1>
        </LogoContainer>
        <h1>
          {step === 1 && 'Qual tipo de espaço você deseja hospedar?'}
          {step === 4 && 'Quais são as especificações do espaço que você deseja alugar?'}
          {step === 5 && 'Agora vamos ser mais específicos'}
          {step === 6 && 'Vamos dar um nome e uma descrição ao seu espaço'}
          {step === 8 && 'Agora vem a parte divertida: definir seu preço'}
        </h1>

        {step === 9 && (
          <p>
            <h1>Confira seu anúncio!</h1>
            <span>Este anúncio ficará visível aos hóspedes imediatamente.</span>
          </p>
        )}


        <span>Queerfy © 2021 Todos os direitos reservados</span>
      </BannerContainer>
      <FormContainer>
        {/* <StepOne /> */}
        {/* <StepTwo /> */}
        {/* <StepFour /> */}
        {/* <StepFive /> */}
        {/* <StepSix /> */}
        {/* <StepSeven /> */}
        {/* <StepEight /> */}
        <StepNine />
      </FormContainer>
    </Container>
  );
};

export default ResidenceRegister;
