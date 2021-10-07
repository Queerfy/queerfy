import { NextPage } from 'next';
import Head from 'next/head';

import { api, apiCorreios } from '../../services/api';

import { ToastContainer, toast} from 'react-toastify'

import {
  Container,
  InformationsBox,
  ImageRegister,
} from './style';

import 'react-toastify/dist/ReactToastify.css';

import FormRegister from '../../components/Register/FormRegister';
import InitalRegister from '../../components/Register/InitialRegister';

const Register: NextPage = () => {

  //Função de registro mandando informações do usuario para a api com o unform pegando as informações
  //Trocar isso parar ser por estapas de registro e trocar a logica
  //Mandar os dados para api por ultimo

  return (
    <>
      <Head>
        <title>Registre-se</title>
      </Head>

      <Container>

        <InformationsBox>
          <InitalRegister />
        </InformationsBox>

        <ImageRegister src="./registerImage.jpeg" alt="Register Image" />
      </Container>
      <ToastContainer />
    </>
  );
};

export default Register;
