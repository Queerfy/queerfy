import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ArrowLeft, Link } from 'react-feather';
import { Container, HeaderContainer } from '../../pages/Account/Main/styles';
import { ContainerButton } from '../../pages/Account/Payments/styles';
import { theme } from '../../styles/theme';
import { InputsBox } from '../Register/FormRegister/style';
import { ContainerModal, ModalOverlay, ModalStyled } from './style';

const ModalPayment = ({ isOpen, onClickClose }) => {
  const [openModal, setOpenModal] = useState(false);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalStyled size={'100%'}>
        <ContainerModal>
        <HeaderContainer title={theme.colors.red} text={theme.colors.red}>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Informações da conta</h1>
        </HeaderContainer>
          <Container subtitle={theme.colors.orange} text={theme.assets.font}>
            <InputsBox>
              <h2>Nome</h2>
              <input type="text" />
            </InputsBox>
          </Container>
          <ContainerButton background={'#f0bf5a'}>
            <button onClick={onClickClose}>SALVAR</button>
          </ContainerButton>
        </ContainerModal>
      </ModalStyled>
    </ModalOverlay>,
    document.body
  );
};
export default ModalPayment;
