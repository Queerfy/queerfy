import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { ToastContainer } from 'react-toastify';

import { AlertOctagon, Sun } from 'react-feather';

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
const Register: NextPage = () => {
  const [stepRegister, setStepRegister] = useState({
    type: 'initial',
    step: 0,
  });

  const router = useRouter();

  const handleBackStep = () => {
    if (stepRegister.step === 0) {
      router.push('/Login');
    } else {
      setStepRegister({ type: 'initial', step: 0 });
    }
  };

  return (
    <>
      <Head>
        <title>Queerfy | Registro</title>
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
                    <p>Urgente</p>
                    <AlertOctagon size={40} />
                  </ActionButton>
                  <ActionButton
                    onClick={() => setStepRegister({ type: 'normal', step: 2 })}
                    style={{ background: '#F0BF5A' }}
                  >
                    <p>Planejar</p>
                    <Sun size={40} />
                  </ActionButton>
                </BoxButtons>
              </ContainerInitial>
            </>
          )}

          {stepRegister.type === 'urgency' && (
            <>
              <FormUrgencyRegister />
            </>
          )}

          {stepRegister.type === 'normal' && (
            <>
              <FormRegister />
            </>
          )}
        </InformationsBox>
        <ImageRegister src="register-image.jpeg" alt="Register Image" />
      </Container>
      <ToastContainer />
    </>
  );
};

export default Register;
