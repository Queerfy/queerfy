import React, { useState } from 'react';
import { useResidence } from '../../../../hooks/residence';

import { Container } from './styles';

import { Option } from '../../Option';
import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';
import { toast } from 'react-toastify';

export const StepTwo = () => {
  const [spaceType, setSpaceType] = useState(null);

  const { advanceStep, backStep, handleStep, residenceData, handleDataUpdate } =
    useResidence();

  const [intireSpace, setIntireSpace] = useState(false);
  const [intireRoom, setIntireRoom] = useState(false);
  const [sharedRoom, setSharedRoom] = useState(false);

  function sendParams() {
    if (spaceType === null && residenceData.spaceType === undefined) {
      return toast.error('Selecione um tipo de espaço.');
    }

    if (residenceData.spaceType === undefined) {
      handleStep({ spaceType });
    } else {
      const newData = {
        ...residenceData,
        spaceType: spaceType === null ? residenceData.spaceType : spaceType,
      };
      handleDataUpdate(newData);
    }

    advanceStep();
  }

  function handleSelectIntireSpace() {
    setSpaceType('lugar inteiro');

    if (intireSpace) {
      setIntireSpace(false);
      setIntireRoom(false);
      setSharedRoom(false);
    } else {
      setIntireSpace(true);
      setIntireRoom(false);
      setSharedRoom(false);
    }
  }

  function handleSelectIntireRoom() {
    setSpaceType('quarto inteiro');

    if (intireRoom) {
      setIntireRoom(false);
      setIntireSpace(false);
      setSharedRoom(false);
    } else {
      setIntireRoom(true);
      setIntireSpace(false);
      setSharedRoom(false);
    }
  }

  function handleSelectSharedRoom() {
    setSpaceType('quarto compartilhado');

    if (sharedRoom) {
      setSharedRoom(false);
      setIntireSpace(false);
      setIntireRoom(false);
    } else {
      setSharedRoom(true);
      setIntireSpace(false);
      setIntireRoom(false);
    }
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Qual tipo de espaço você deseja hospedar?</h1>
      <Option
        onClick={handleSelectIntireSpace}
        label="Lugar inteiro"
        selected={intireSpace}
      />
      <Option
        onClick={handleSelectIntireRoom}
        label="Quarto inteiro"
        selected={intireRoom}
      />
      <Option
        onClick={handleSelectSharedRoom}
        label="Quarto compartilhado"
        selected={sharedRoom}
      />
      <GeneralButton
        text="Continuar"
        bgColor='linear-gradient(180deg, #f26b9c 0%, #f15356 80.21%)'
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
