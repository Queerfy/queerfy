import React, { useState } from 'react';
import { NextPage } from 'next';

import { Container, BannerContainer, LogoContainer, FormContainer } from './styles';

import { StepOne } from '../../components/ResidenceRegister/Steps';
import { StepTwo } from '../../components/ResidenceRegister/Steps/StepTwo';
import { StepFour } from '../../components/ResidenceRegister/Steps/StepFour';
import { StepFive } from '../../components/ResidenceRegister/Steps/StepFive';

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
        </h1>

        <span>Queerfy © 2021 Todos os direitos reservados</span>
      </BannerContainer>
      <FormContainer>
        {/* <StepOne /> */}
        {/* <StepTwo /> */}
        {/* <StepFour /> */}
        {<StepFive />}
      </FormContainer>
    </Container>
  );
};

export default ResidenceRegister;
