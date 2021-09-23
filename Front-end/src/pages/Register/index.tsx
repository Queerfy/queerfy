import { NextPage } from 'next';
import Head from 'next/head';

import {
  Container,
  InformationsBox,
  ImageRegister,
  RowInputs,
  InputsBox,
} from './style';

const Register: NextPage = () => {
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
              <input type="text" placeholder="Nome Completo" />
            </InputsBox>
            <InputsBox fixedSize={'25%'} sizeResponsive={'40%'}>
              <span>Gênero</span>
              <select name="" id="">
                <option value="">Masculino</option>
                <option value="">Feminino</option>
              </select>
            </InputsBox>
            <InputsBox fixedSize={'25%'} sizeResponsive={'55%'}>
              <span>Data de Nascimento</span>
              <input type="date" placeholder="Data de Nascimento" />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'40%'}>
              <span>RG</span>
              <input type="text" placeholder="_ _-_ _ _-_ _ _-_" />
            </InputsBox>
            <InputsBox fixedSize={'50%'} sizeResponsive={'55%'}>
              <span>CPF</span>
              <input type="text" placeholder="_ _ _-_ _ _-_ _ _-_ _" />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'40%'}>
              <span>Telefone</span>
              <input type="text" placeholder="(_ _)_ _ _ _-_ _ _ _" />
            </InputsBox>
            <InputsBox fixedSize={'50%'} sizeResponsive={'55%'}>
              <span>E-mail</span>
              <input type="text" placeholder="contato@purple.com.br" />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'100%'}>
              <span>CEP</span>
              <input type="text" placeholder="_ _ _ _ _-_ _ _" />
            </InputsBox>
            <InputsBox fixedSize={'10%'} sizeResponsive={'45%'}>
              <span>UF</span>
              <input type="text" placeholder="SP" />
            </InputsBox>
            <InputsBox fixedSize={'40%'} sizeResponsive={'50%'}>
              <span>Cidade</span>
              <input type="text" placeholder="São Paulo" />
            </InputsBox>
          </RowInputs>

          <RowInputs>
            <InputsBox fixedSize={'50%'} sizeResponsive={'45%'}>
              <span>Rua/Logradouro</span>
              <input type="text" placeholder="Rua das Laranjeiras" />
            </InputsBox>
            <InputsBox fixedSize={'10%'} sizeResponsive={'15%'}>
              <span>Número</span>
              <input type="text" placeholder="290" />
            </InputsBox>
            <InputsBox fixedSize={'40%'} sizeResponsive={'30%'}>
              <span>Complemento</span>
              <input type="text" placeholder="Casa" />
            </InputsBox>
          </RowInputs>

          <button>Continuar</button>
        </InformationsBox>
        <ImageRegister src="./registerImage.jpeg" alt="Register Image" />
      </Container>
    </>
  );
};

export default Register;
