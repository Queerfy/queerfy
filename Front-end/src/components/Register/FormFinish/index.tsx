import { NextPage } from 'next';

import { Form } from '@unform/web';

import { api } from '../../../services/api';

import Input from '../../Form/input';

import { TitleConfirm, BoxContainerConfirm, InputBoxConfirm, RowInputsConfirm, ButtonFinishConfirm } from './style';

import {
  Container,
  TextHeader,
  Box
} from '../FormUrgencyRegister/style';

import { HeaderBox, TitleHeader } from '../../../pages/Register/style';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
interface IPropsDataFormFinish {
  dataUser: object;
}

const FormFinish: NextPage<IPropsDataFormFinish> = ({ dataUser }) => {

  const handleSubmitUrgency = (userData) => {
    api
      .post('/users', userData)
      .then((res) => {
        return toast.success('Usuario cadastrado com Sucesso!');
      })
      .catch((err) => {
        console.log(err.message);
        return toast.error('Usuario já existente!');
      });
  }

  const handleSubmitNormal = (userData) => {
    api
      .post('/users', userData.user)
      .then((res) => {
        let idUser = res.data.id;

        const dataAdresses = {
          idUser,
          ...userData.address,
        };

        api
          .post('/addresses', dataAdresses)
          .then((res) => {
            return toast.success('Usuario cadastrado com Sucesso!');

          })
          .catch((err) => {
            console.log(err.message);
            return toast.error('Erro ao cadastrar o Usuario');
          });
      })
      .catch((err) => {
        console.log(err.message);
        return toast.error('Usuario já existente!');
      });
  }

  const handleSubmit = (data) => {

    if(!dataUser.address) {
      console.log("Não Contem Endereço");
      const userData = {
        ...dataUser,
        ...data
      }
      handleSubmitUrgency(userData);
    }else {
      console.log("Contem Endereço");
      const userData = {
        ...dataUser,
        user: {
          ...dataUser.user,
          ...data,
        },
      }
      handleSubmitNormal(userData);
    }

  };

  return (
    <>
      <Container>
        <HeaderBox>
          <TitleHeader style={{ textDecoration: 'underline' }}>
            Registre-se
          </TitleHeader>
          <TextHeader>
            Agora só precisamos que você escolha um <span>usuário</span> e{' '}
            <span>senha</span> par que você acesse sua conta{' '}
            <b>
              <span>usuário</span>
            </b>
          </TextHeader>
        </HeaderBox>
        <Form onSubmit={handleSubmit}>
          <BoxContainerConfirm>
            <Box>
              <TitleConfirm>Conclua seu cadastro</TitleConfirm>
              <RowInputsConfirm>
                <InputBoxConfirm fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>Senha</span>
                  <Input name="password" type="password" placeholder="Senha" />
                </InputBoxConfirm>
              </RowInputsConfirm>
              <RowInputsConfirm>
                <InputBoxConfirm fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>Confirmação de Senha</span>
                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Senha"
                  />
                </InputBoxConfirm>
              </RowInputsConfirm>
              <ButtonFinishConfirm>Continuar</ButtonFinishConfirm>
            </Box>
          </BoxContainerConfirm>
        </Form>
        <ToastContainer />
      </Container>
    </>
  );
};

export default FormFinish;
