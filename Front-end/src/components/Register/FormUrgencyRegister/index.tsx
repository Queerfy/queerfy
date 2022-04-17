import { NextPage } from 'next';
import { useState } from 'react';
import { Form } from '@unform/web';

import Input from '../../Form/input';
import InputMask from '../../Form/inputMask';

import {
  TextHeader,
  Container,
  BoxContainer,
  Box,
  ButtonContinue,
} from './style';

import { HeaderBox, TitleHeader } from '../../../styles/register';
import { LabelInputs, InputsBox, RowInputs } from '../FormRegister/style';

import { registerUser } from '../../../utils/requestsUser';

const FormUrgencyRegister: NextPage = () => {
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');

  const handleSubmit = (data) => {
    registerUser(data);
  };

  return (
    <>
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
                  <LabelInputs>Nome</LabelInputs>
                  <Input name="name" type="text" placeholder="Nome completo" />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <LabelInputs>CPF</LabelInputs>
                  <InputMask type="text" name="cpf" mask="999.999.999-99" />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <LabelInputs>E-mail</LabelInputs>
                  <Input
                    name="email"
                    type="text"
                    placeholder="contato@queerfy.com.br"
                  />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'50%'} sizeResponsive={'50%'}>
                  <LabelInputs>Orientação sexual</LabelInputs>
                  <Input
                    name="gener"
                    type="text"
                    placeholder="Lésbica"
                  />
                </InputsBox>
                <InputsBox fixedSize={'50%'} sizeResponsive={'45%'}>
                  <LabelInputs>Telefone</LabelInputs>
                  <InputMask
                    name="telephone"
                    type="text"
                    mask={maskPhone}
                    onBlur={(e) => {
                      if (e.target.value.replace('_', '').length === 14) {
                        setMaskPhone('(99) 9999-9999');
                      }
                    }}
                    onFocus={(e) => {
                      if (e.target.value.replace('_', '').length === 14) {
                        setMaskPhone('(99) 99999-9999');
                      }
                    }}
                  />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'50%'} sizeResponsive={'50%'}>
                  <LabelInputs>Senha</LabelInputs>
                  <Input
                    name="password"
                    type="password"
                    placeholder="**************"
                  />
                </InputsBox>
                <InputsBox fixedSize={'50%'} sizeResponsive={'45%'}>
                  <LabelInputs>Confirmação de senha</LabelInputs>
                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="**************"
                  />
                </InputsBox>
              </RowInputs>
              <ButtonContinue>Finalizar</ButtonContinue>
            </Box>
          </BoxContainer>
        </Form>
      </Container>
    </>
  );
};

export default FormUrgencyRegister;
