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

import {
  HeaderBox,
  IconBack,
  TitleHeader,
} from '../../../pages/Register/style';

import { InputsBox, RowInputs } from '../FormRegister/style';
interface IFormFinishProps {
  setStepRegister: any;
  stepRegister: any;
}

const FormFinish: NextPage<IFormFinishProps> = ({
  setStepRegister,
  stepRegister,
}) => {
  const handleSubmit = (data) => {
    console.log(data);

    //Aqui vai fazer a requisição com os dados dos outros componentes
  };

  const handleBackStep = () => {};

  return (
    <>
      <IconBack size={30} />
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
