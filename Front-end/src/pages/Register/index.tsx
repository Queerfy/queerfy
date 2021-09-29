import { useRef } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

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

  const nameRef = useRef<HTMLInputElement>(null);
  const generRef = useRef<HTMLSelectElement>(null);
  const birthDateRef = useRef<HTMLInputElement>(null);
  const rgRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);
  const telephoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const cepRef = useRef<HTMLInputElement>(null);
  const districtRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const placeRef = useRef<HTMLInputElement>(null);
  const complementRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const name = nameRef.current?.value;
    const birth_date = birthDateRef.current?.value;
    const rg = rgRef.current?.value;
    const cpf = cpfRef.current?.value;
    const gener = generRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const cep = cepRef.current?.value;
    const district = districtRef.current?.value;
    const city = cityRef.current?.value;
    const number = numberRef.current?.value;
    const place = placeRef.current?.value;
    const complement = complementRef.current?.value;

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
      .post('/lesse', dataRegisterUser)
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
  };

  return (
    <>
      <Head>
        <title>Registre-se</title>
      </Head>

      <Container>
        <InformationsBox>
          <h2>Registre-se</h2>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
              <span>Nome</span>
              <input ref={nameRef} type="text" placeholder="Nome Completo" />
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
              <input
                ref={birthDateRef}
                type="date"
                placeholder="Data de Nascimento"
              />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'40%'}>
              <span>RG</span>
              <input ref={rgRef} type="text" placeholder="_ _-_ _ _-_ _ _-_" />
            </InputsBox>
            <InputsBox fixedSize={'50%'} sizeResponsive={'55%'}>
              <span>CPF</span>
              <input
                ref={cpfRef}
                type="text"
                placeholder="_ _ _-_ _ _-_ _ _-_ _"
              />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'30%'} sizeResponsive={'100%'}>
              <span>Telefone</span>
              <input
                ref={telephoneRef}
                type="text"
                placeholder="(_ _)_ _ _ _-_ _ _ _"
              />
            </InputsBox>
            <InputsBox fixedSize={'50%'} sizeResponsive={'55%'}>
              <span>E-mail</span>
              <input
                ref={emailRef}
                type="text"
                placeholder="contato@purple.com.br"
              />
            </InputsBox>
            <InputsBox fixedSize={'30%'} sizeResponsive={'40%'}>
              <span>Senha</span>
              <input ref={passwordRef} type="password" placeholder="Senha" />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
              <span>CEP</span>
              <input ref={cepRef} type="text" placeholder="_ _ _ _ _-_ _ _" />
            </InputsBox>
            <InputsBox fixedSize={'10%'} sizeResponsive={'45%'}>
              <span>UF</span>
              <input ref={districtRef} type="text" placeholder="SP" />
            </InputsBox>
            <InputsBox fixedSize={'40%'} sizeResponsive={'50%'}>
              <span>Cidade</span>
              <input ref={cityRef} type="text" placeholder="São Paulo" />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'45%'}>
              <span>Rua/Logradouro</span>
              <input
                ref={placeRef}
                type="text"
                placeholder="Rua das Laranjeiras"
              />
            </InputsBox>
            <InputsBox fixedSize={'10%'} sizeResponsive={'15%'}>
              <span>Número</span>
              <input ref={numberRef} type="text" placeholder="290" />
            </InputsBox>
            <InputsBox fixedSize={'40%'} sizeResponsive={'30%'}>
              <span>Complemento</span>
              <input ref={complementRef} type="text" placeholder="Casa" />
            </InputsBox>
          </RowInputs>

          <button onClick={handleSubmit}>Continuar</button>
        </InformationsBox>
        <ImageRegister src="./registerImage.jpeg" alt="Register Image" />
      </Container>
      <ToastContainer />
    </>
  );
};

export default Register;
