import { NextPage } from 'next';
import { useRef, useState } from 'react';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import Input from '../../Form/input';

import { toast } from 'react-toastify';

import { HeaderTitle, RowInputs, InputsBox, ButtonSubmit } from './style';

import { ISetDataUser } from '../../../interfaces/Register/interfaces';
import { IconBack } from '../../../pages/Register/style';
import InputMask from '../../Form/inputMask';

const FormRegister: NextPage<ISetDataUser> = ({
  setDataUser,
  setStepRegister,
}) => {
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');

  const genreRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (data) => {
    setDataUser({ ...data, genre: genreRef.current.value });
    setStepRegister({ type: 'normalFinish', step: 3 });
  };

  return (
    <>
      <HeaderTitle>Registre-se</HeaderTitle>
      <Form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Scope path="user">
          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
              <span>Nome</span>
              <Input name="name" type="text" placeholder="Nome Completo" />
            </InputsBox>
            <InputsBox fixedSize={'25%'} sizeResponsive={'40%'}>
              <span>Gênero</span>
              <select ref={genreRef}>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </InputsBox>
            <InputsBox fixedSize={'25%'} sizeResponsive={'55%'}>
              <span>Data de Nascimento</span>
              <Input
                name="birthDate"
                type="date"
                placeholder="Data de Nascimento"
              />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'40%'}>
              <span>RG</span>
              <InputMask name="rg" type="text" mask="99-999-999-*" />
            </InputsBox>
            <InputsBox fixedSize={'50%'} sizeResponsive={'55%'}>
              <span>CPF</span>
              <InputMask name="cpf" type="text" mask="999.999.999-99" />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'40%'}>
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
            <InputsBox fixedSize={'50%'} sizeResponsive={'55%'}>
              <span>E-mail</span>
              <Input
                name="email"
                type="text"
                placeholder="contato@purple.com.br"
              />
            </InputsBox>
          </RowInputs>
        </Scope>
        <Scope path="address">
          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
              <span>CEP</span>
              <InputMask name="cep" type="text" mask="99999-999" />
            </InputsBox>
            <InputsBox fixedSize={'10%'} sizeResponsive={'45%'}>
              <span>UF</span>
              <Input name="district" type="text" placeholder="SP" />
            </InputsBox>
            <InputsBox fixedSize={'40%'} sizeResponsive={'50%'}>
              <span>Cidade</span>
              <Input name="city" type="text" placeholder="São Paulo" />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
              <span>Rua/Logradouro</span>
              <Input
                name="place"
                type="text"
                placeholder="Rua das Laranjeiras"
              />
            </InputsBox>
            <InputsBox fixedSize={'10%'} sizeResponsive={'45%'}>
              <span>Número</span>
              <Input name="number" type="text" placeholder="290" />
            </InputsBox>
            <InputsBox fixedSize={'40%'} sizeResponsive={'50%'}>
              <span>Complemento</span>
              <Input name="complement" type="text" placeholder="Casa" />
            </InputsBox>
          </RowInputs>
        </Scope>

        <ButtonSubmit>Continuar</ButtonSubmit>
      </Form>
    </>
  );
};

export default FormRegister;
