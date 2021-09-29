import { useRef } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Form } from "@unform/web";
import { Scope } from "@unform/core";

import Input from "../../components/Form/input";

import { api } from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';

import {
  Container,
  InformationsBox,
  ImageRegister,
  RowInputs,
  InputsBox,
} from './style';

import 'react-toastify/dist/ReactToastify.css';

const Register: NextPage = () => {
  const router = useRouter();

  const generRef = useRef<HTMLSelectElement>(null);


  /* const handleSubmit = () => {

    let idUser;

    const dataRegisterUser = {
      name,
      birth_date,
      rg,
      cpf,
      gener,
      email,
      password,
      perfil_img: null,
      desc_user: null,
      likes: null,
      admin: false,
    };

    api
      .post('/users', dataRegisterUser)
      .then((res) => {
        idUser = res.data.data.id;
        const dataRegisterAdresses = {
          idUser,
          cep,
          district,
          city,
          number,
          place,
        };

        api
          .post('/lesse/adresses', dataRegisterAdresses)
          .then((res) => {
            toast.success('Usuario cadastrado com Sucesso!');

            setTimeout(() => {
              router.push('/');
            }, 2000);
          })
          .catch((err) => {
            if (err.response.status === 400) {
              console.log('Message Error:', err.response.data.message);
              console.log('Status Error:', err.response.data.status);
              return toast.error('Erro ao cadastrar o Usuario');
            }
          });
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.log('Message Error:', err.response.data.message);
          console.log('Status Error:', err.response.data.status);
          return toast.error('Usuario já existente!');
        }
      });
  }; */

  const handleSubmit = (data) => {
    const gener = generRef.current?.value;

    const dataUser = {
      ...data,
      gener
    }

    console.log(dataUser);
  }

  return (
    <>
      <Head>
        <title>Registre-se</title>
      </Head>

      <Container>
        <InformationsBox>
          <h2>Registre-se</h2>
          <Form onSubmit={handleSubmit}>
          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
              <span>Nome</span>
              <Input name="name" type="text" placeholder="Nome Completo" />
            </InputsBox>
            <InputsBox fixedSize={'25%'} sizeResponsive={'40%'}>
              <span>Gênero</span>
              <select ref={generRef}>
                <option value="">Masculino</option>
                <option value="">Feminino</option>
              </select>
            </InputsBox>
            <InputsBox fixedSize={'25%'} sizeResponsive={'55%'}>
              <span>Data de Nascimento</span>
              <Input
                name="birth_date"
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
            <InputsBox fixedSize={'30%'} sizeResponsive={'100%'}>
              <span>Telefone</span>
              <Input
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
            <InputsBox fixedSize={'30%'} sizeResponsive={'40%'}>
              <span>Senha</span>
              <Input name="password" type="password" placeholder="Senha" />
            </InputsBox>
          </RowInputs>
          <Scope path="address">
            <RowInputs>
              <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
                <span>CEP</span>
                <Input name="cep" type="text" placeholder="_ _ _ _ _-_ _ _" />
              </InputsBox>
              <InputsBox fixedSize={'10%'} sizeResponsive={'45%'}>
                <span>UF</span>
                <Input name="uf" type="text" placeholder="SP" />
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
                  name="street"
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

          <button>Continuar</button>
          </Form>
        </InformationsBox>
        <ImageRegister src="./registerImage.jpeg" alt="Register Image" />
      </Container>
      <ToastContainer />
    </>
  );
};

export default Register;
