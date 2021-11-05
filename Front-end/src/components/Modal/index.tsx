import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalStyled } from './style';

const ModalPayment = ({ isOpen, onClickClose }) => {
  const [openModal, setOpenModal] = useState(false);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalStyled>
          <button onClick={onClickClose}>Fechar</button>
      </ModalStyled>
    </ModalOverlay>,
    document.body
  );
};
export default ModalPayment;
