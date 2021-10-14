import { NextPage } from 'next';
import Head from 'next/head';

import { api, apiCorreios } from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';

import {
  Container,
  InformationsBox,
  ImageRegister,
} from './style';

import 'react-toastify/dist/ReactToastify.css';

const Register: NextPage = () => {
  const router = useRouter();

  const nameRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const birthDateRef = useRef<HTMLInputElement>(null);
  const rgRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
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
    const gender = genderRef.current?.value;
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
      gender,
      email,
      password,
      profile_img: null,
      desc_user: null,
      likes: null,
      admin: false,
    };

    api
      .post('/lesse', dataRegisterUser)
      .then((res) => {
        idUser = res.data.id;
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
            toast.success('Usuário cadastrado com sucesso!');

            setTimeout(() => {
              router.push('/');
            }, 2000);
          })
          .catch((err) => {
            if (err.response.status === 400) {
              console.log('Message Error:', err.response.data.message);
              console.log('Status Error:', err.response.data.status);
              return toast.error('Erro ao cadastrar o usuário');
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
        <title>Queerfy | Registro</title>
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
              <select ref={genderRef}>
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
                ref={phoneRef}
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

        <InformationsBox>
          <InitalRegister />
        </InformationsBox>
        <ImageRegister src="register-image.jpeg" alt="Register Image" />
      </Container>
      <ToastContainer />
    </>
  );
};

export default Register;
