import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { api, apiCorreios } from '../../services/api';

import { ToastContainer, toast} from 'react-toastify'

import {
  Container,
  InformationsBox,
  ImageRegister,
  ContainerInitial,
  HeaderBox,
  IconBack,
  TitleHeader,
  TextHeader,
  BoxButtons,
  ActionButton,
} from './style';

import 'react-toastify/dist/ReactToastify.css';

import FormRegister from '../../components/Register/FormRegister';
import FormUrgencyRegister from '../../components/Register/FormUrgencyRegister';
import FormFinish from '../../components/Register/FormFinish';

const Register: NextPage = () => {
  //Função de registro mandando informações do usuario para a api com o unform pegando as informações
  //Trocar isso parar ser por estapas de registro e trocar a logica
  //Mandar os dados para api por ultimo

  const [stepRegister, setStepRegister] = useState(0);
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    console.log(dataUser);
  }, [dataUser]);

  return (
    <>
      <Head>
        <title>Registre-se</title>
      </Head>

      <Container>
        <InformationsBox>
          <IconBack size={30} onClick={() => setStepRegister(0)} />
          {stepRegister === 0 && (
            <>
              <ContainerInitial>
                <HeaderBox>
                  <TitleHeader>Precisa alugar com urgencia?</TitleHeader>
                  <TextHeader>
                    Qual nivel de urgencia em relação ao aluguel?
                  </TextHeader>
                  <TextHeader>
                    Foi expulso de casa? Violência doméstica, etc...
                  </TextHeader>
                </HeaderBox>

                <BoxButtons>
                  <ActionButton onClick={() => setStepRegister(1)}>
                    Para Agora
                  </ActionButton>
                  <ActionButton
                    onClick={() => setStepRegister(2)}
                    style={{ background: '#F0BF5A' }}
                  >
                    Planejar
                  </ActionButton>
                </BoxButtons>
              </ContainerInitial>
            </>
          )}

          {stepRegister === 1 && (
            <>
              <FormUrgencyRegister
                setDataUser={setDataUser}
                setStepRegister={setStepRegister}
              />
            </>
          )}

          {stepRegister === 2 && (
            <>
              <FormRegister
                setDataUser={setDataUser}
                setStepRegister={setStepRegister}
              />
            </>
          )}

          {stepRegister === 3 && (
            <>
              <FormFinish />
            </>
          )}
        </InformationsBox>

        <ImageRegister src="./registerImage.jpeg" alt="Register Image" />
      </Container>
      <ToastContainer />
    </>
  );
};

export default Register;
