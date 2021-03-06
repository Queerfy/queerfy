import { NextPage } from 'next';
import { useRef, useState } from 'react';

import Input from '../../Form/input';

import {
  HeaderTitle,
  FormStyled,
  LabelInputs,
  RowInputs,
  InputsBox,
  ButtonSubmit,
} from './style';

import InputMask from '../../Form/inputMask';

import { registerUser } from '../../../utils/requestsUser';

const FormRegister: NextPage = () => {
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');

  const genreRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (data) => {
    const gener = genreRef.current.value;
    const dataUser = {
      ...data,
      gener,
    };
    registerUser(dataUser);
  };

  return (
    <>
      <HeaderTitle>Registre-se</HeaderTitle>
      <FormStyled onSubmit={handleSubmit}>
        <RowInputs>
          <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
            <LabelInputs>Nome</LabelInputs>
            <Input name="name" type="text" placeholder="Nome completo" />
          </InputsBox>
          <InputsBox fixedSize={'25%'} sizeResponsive={'40%'}>
            <LabelInputs>Identidade de gênero</LabelInputs>
            <select ref={genreRef}>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Feminino">Não informar</option>
            </select>
          </InputsBox>
          <InputsBox fixedSize={'25%'} sizeResponsive={'55%'}>
            <LabelInputs>Data de nascimento</LabelInputs>
            <Input
              name="birthDate"
              type="date"
              placeholder="Data de Nascimento"
            />
          </InputsBox>
        </RowInputs>

        <RowInputs>
          <InputsBox fixedSize={'50%'} sizeResponsive={'40%'}>
            <LabelInputs>RG</LabelInputs>
            <InputMask name="rg" type="text" mask="99-999-999-*" />
          </InputsBox>
          <InputsBox fixedSize={'50%'} sizeResponsive={'55%'}>
            <LabelInputs>CPF</LabelInputs>
            <InputMask name="cpf" type="text" mask="999.999.999-99" />
          </InputsBox>
        </RowInputs>

        <RowInputs>
          <InputsBox fixedSize={'50%'} sizeResponsive={'55%'}>
            <LabelInputs>E-mail</LabelInputs>
            <Input
              name="email"
              type="text"
              placeholder="contato@purple.com.br"
            />
          </InputsBox>
          <InputsBox fixedSize={'50%'} sizeResponsive={'40%'}>
            <LabelInputs>Telefone</LabelInputs>
            <InputMask
              name="telephone"
              type="text"
              mask={maskPhone}
              onBlur={(e) => {
                if (e.target.value.replace('_', '').length === 14) {
                  setMaskPhone('(99) 99999-9999');
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
          <InputsBox fixedSize={'50%'} sizeResponsive={'45%'}>
            <LabelInputs>Senha</LabelInputs>
            <Input
              name="password"
              type="password"
              placeholder="**************"
            />
          </InputsBox>
          <InputsBox fixedSize={'50%'} sizeResponsive={'45%'}>
            <LabelInputs minSize>Confirmação de senha</LabelInputs>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="**************"
            />
          </InputsBox>
        </RowInputs>
        <ButtonSubmit>Finalizar</ButtonSubmit>
      </FormStyled>
    </>
  );
};

export default FormRegister;
