import React from 'react';

import { NextPage } from 'next';
import { Container, BannerContainer, LogoContainer, FormContainer } from './styles';
import { StepOne } from '../../components/ResidenceRegister/Steps';
import { StepTwo } from '../../components/ResidenceRegister/Steps/StepTwo';

const ResidenceRegister: NextPage = () => {
  return (
    <Container>
      <BannerContainer>
        <LogoContainer>
          <img src="logo.svg" alt="queerfy" />
          <h1>Queerfy</h1>
        </LogoContainer>
        <h1>Qual tipo de espaço você deseja hospedar?</h1>
        <span>Queerfy © 2021 Todos os direitos reservados</span>
      </BannerContainer>
      <FormContainer>
        {/* <StepOne /> */}
        <StepTwo />
      </FormContainer>
    </Container>
  );
};

export default ResidenceRegister;
