import { NextPage } from 'next';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import Input from '../../Form/input';

import {
  TextHeader,
  Container,
  BoxContainer,
  Box,
  ButtonContinue,
} from './style';

import {
  HeaderBox,
  IconBack,
  TitleHeader,
} from '../../../pages/Register/style';
import { InputsBox, RowInputs } from '../FormRegister/style';

import { ISetDataUser } from '../../../interfaces/Register/interfaces';

const FormUrgencyRegister: NextPage<ISetDataUser> = ({
  setDataUser,
  setStepRegister,
}) => {
  const handleSubmit = (data) => {
    setDataUser(data);
    setStepRegister(3);
    console.log(data);
  };

  return (
    <>
      <IconBack size={30} onClick={() => setStepRegister(0)} />
      <Container>
        <HeaderBox>
          <TitleHeader>Registre-se</TitleHeader>
          <TextHeader>
            Um cadastro <span>simples</span> e <span>prático</span> para quem
            precisa de ajuda.
          </TextHeader>
        </HeaderBox>
        <Form onSubmit={handleSubmit}>
          <BoxContainer>
            <Box>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>Nome</span>
                  <Input name="name" type="text" placeholder="Nome Completo" />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>CPF</span>
                  <Input
                    type="text"
                    name="cpf"
                    placeholder="_ _ _ . _ _ _ . _ _ _ . _ _"
                  />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>Sexualidade</span>
                  <Input
                    name="gener"
                    type="text"
                    placeholder="Orientação sexual"
                  />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>Telefone</span>
                  <Input
                    name="telephone"
                    type="text"
                    placeholder="(_ _) _ _ _ _ _ - _ _ _ _"
                  />
                </InputsBox>
              </RowInputs>
              <ButtonContinue>Continuar</ButtonContinue>
            </Box>
          </BoxContainer>
        </Form>
      </Container>
    </>
  );
};

export default FormUrgencyRegister;
