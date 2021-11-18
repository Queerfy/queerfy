import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ArrowLeft, Link } from 'react-feather';
import { HeaderContainer } from '../../pages/Account/styles';
import { theme } from '../../styles/theme';
import { ContainerModal, ModalOverlay, ModalStyled, InputBox, InputContainer, ContainerButton } from './style';

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
          </HeaderContainer>
          <InputContainer subtitle={theme.colors.orange} text={theme.assets.font}>
            <InputBox>
              <h2>Número do cartão</h2>
              <input type="text" />
            </InputBox>
          </InputContainer>
          <ContainerButton color={'#f0bf5a'}>
            <button onClick={onClickClose}>SALVAR</button>
          </ContainerButton>
        </ContainerModal>
      </ModalStyled>
    </ModalOverlay>,
    document.body
  );
};
export default ModalPayment;
