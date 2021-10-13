import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { api, apiCorreios } from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';

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
import { log } from 'console';

const Register: NextPage = () => {
  //Função de registro mandando informações do usuario para a api com o unform pegando as informações
  //Trocar isso parar ser por estapas de registro e trocar a logica
  //Mandar os dados para api por ultimo

  const [stepRegister, setStepRegister] = useState({
    type: 'initial',
    step: 0,
  });

  const [dataUser, setDataUser] = useState(null);

  const handleBackStep = () => {
    if (stepRegister.step === 1 || stepRegister.step === 2) {
      setStepRegister({ type: 'initial', step: 0 });
    } else if (stepRegister.type === 'urgencyFinish') {
      setStepRegister({ type: 'urgency', step: 1 });
    } else {
      setStepRegister({ type: 'normal', step: 2 });
    }
  };

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
          <IconBack size={30} onClick={() => handleBackStep()} />
          {stepRegister.type === 'initial' && (
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
                  <ActionButton
                    onClick={() =>
                      setStepRegister({ type: 'urgency', step: 1 })
                    }
                  >
                    Para Agora
                  </ActionButton>
                  <ActionButton
                    onClick={() => setStepRegister({ type: 'normal', step: 2 })}
                    style={{ background: '#F0BF5A' }}
                  >
                    Planejar
                  </ActionButton>
                </BoxButtons>
              </ContainerInitial>
            </>
          )}

          {stepRegister.type === 'urgency' && (
            <>
              <FormUrgencyRegister
                setDataUser={setDataUser}
                setStepRegister={setStepRegister}
              />
            </>
          )}

          {stepRegister.type === 'normal' && (
            <>
              <FormRegister
                setDataUser={setDataUser}
                setStepRegister={setStepRegister}
              />
            </>
          )}

          {stepRegister.step === 3 && (
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
