import { NextPage } from 'next';
import { useState } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import Input from '../../Form/input';
import InputMask from '../../Form/inputMask';

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
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');

  const handleSubmit = (data) => {
    setDataUser(data);
    setStepRegister({ type: 'urgencyFinish', step: 3 });
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
                  <span>Nome</span>
                  <Input name="name" type="text" placeholder="Nome Completo" />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>CPF</span>
                  <InputMask type="text" name="cpf" mask="999.999.999-99" />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>Sexualidade</span>
                  <Input
                    name="genre"
                    type="text"
                    placeholder="Orientação sexual"
                  />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>Telefone</span>
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
              <ButtonContinue>Continuar</ButtonContinue>
            </Box>
          </BoxContainer>
        </Form>
      </Container>
    </>
  );
};

export default FormUrgencyRegister;
