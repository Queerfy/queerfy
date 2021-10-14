import { NextPage } from 'next';
import { Form } from '@unform/web';

import Input from '../../Form/input';

import { TitleConfirm, BoxContainerConfirm } from './style';

import {
  Container,
  TextHeader,
  Box,
  ButtonContinue,
} from '../FormUrgencyRegister/style';

import { HeaderBox, TitleHeader } from '../../../pages/Register/style';

import { InputsBox, RowInputs } from '../FormRegister/style';

interface IPropsDataFormFinish {
  dataUser: object;
}

const FormFinish: NextPage<IPropsDataFormFinish> = ({ dataUser }) => {
  const handleSubmit = (data) => {
    console.log(dataUser);
    console.log(data);

    //Aqui vai fazer a requisição com os dados dos outros componentes
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
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>Senha</span>
                  <Input name="password" type="password" placeholder="Senha" />
                </InputsBox>
              </RowInputs>
              <RowInputs>
                <InputsBox fixedSize={'100%'} sizeResponsive={'100%'}>
                  <span>Confirmação de Senha</span>
                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Senha"
                  />
                </InputsBox>
              </RowInputs>
              <ButtonContinue>Continuar</ButtonContinue>
            </Box>
          </BoxContainerConfirm>
        </Form>
      </Container>
    </>
  );
};

export default FormFinish;
