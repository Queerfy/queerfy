import { NextPage } from 'next';
import { useRef } from 'react';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import Input from '../../Form/input';

import { toast } from 'react-toastify';

import { HeaderTitle, RowInputs, InputsBox, ButtonSubmit } from './style';

import { ISetDataUser } from '../../../interfaces/Register/interfaces';
import { IconBack } from '../../../pages/Register/style';

const FormRegister: NextPage<ISetDataUser> = ({
  setDataUser,
  setStepRegister,
}) => {
  const genreRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (data) => {
    setDataUser(data);
    setStepRegister({ type: 'normalFinish', step: 3 });
    /* const genre = genreRef.current?.value;

    let idUser;

    const dataUser = {
      ...data.user,
      genre,
    };

    api
      .post('/users', dataUser)
      .then((res) => {
        idUser = res.data.id;

        const dataAdresses = {
          idUser,
          ...data.address,
        };

        api
          .post('/addresses', dataAdresses)
          .then((res) => {
            toast.success('Usuario cadastrado com Sucesso!');

          })
          .catch((err) => {
            console.log(err.message);
            return toast.error('Erro ao cadastrar o Usuario');
          });
      })
      .catch((err) => {
        console.log(err.message);
        return toast.error('Usuario já existente!');
      }); */
  };

  return (
    <>
      <HeaderTitle>Registre-se</HeaderTitle>
      <Form onSubmit={handleSubmit}>
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
              <Input name="rg" type="text" placeholder="_ _-_ _ _-_ _ _-_" />
            </InputsBox>
            <InputsBox fixedSize={'50%'} sizeResponsive={'55%'}>
              <span>CPF</span>
              <Input
                name="cpf"
                type="text"
                placeholder="_ _ _-_ _ _-_ _ _-_ _"
              />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'40%'}>
              <span>Telefone</span>
              <input
                name="telephone"
                type="text"
                placeholder="(_ _)_ _ _ _-_ _ _ _"
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
            {/* <InputsBox fixedSize={'30%'} sizeResponsive={'40%'}>
                  <span>Senha</span>
                  <Input name="password" type="password" placeholder="Senha" />
                </InputsBox> */}
          </RowInputs>
        </Scope>
        <Scope path="address">
          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
              <span>CEP</span>
              <Input name="cep" type="text" placeholder="_ _ _ _ _-_ _ _" />
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
            <InputsBox fixedSize={'50%'} sizeResponsive={'45%'}>
              <span>Rua/Logradouro</span>
              <Input
                name="place"
                type="text"
                placeholder="Rua das Laranjeiras"
              />
            </InputsBox>
            <InputsBox fixedSize={'10%'} sizeResponsive={'15%'}>
              <span>Número</span>
              <Input name="number" type="text" placeholder="290" />
            </InputsBox>
            <InputsBox fixedSize={'40%'} sizeResponsive={'30%'}>
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
