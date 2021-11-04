import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalStyled } from './style';

const Modal = ({ isOpen, isClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay>
        <ModalStyled size={'800px'}></ModalStyled>
      </ModalOverlay>
    </>
  );
};

export default Modal;
