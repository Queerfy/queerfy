import React, { useEffect, useState } from 'react';

import { useResidence } from '../../../hooks/residence';
import { useAuth } from '../../../hooks/useAuth';

import { theme } from '../../../styles/theme';

import { useResidence } from '../../../hooks/residence';

import { Option } from '../Option';
import { GeneralButton } from '../../GeneralButton';
import { HeaderMobile } from '../../HeaderMobile';

import { Container } from './styles';

import { toast } from 'react-toastify';
import { api } from '../../../services/api';

export const StepOne = () => {
  const { advanceStep, backStep, handleStep, residenceData, handleDataUpdate } =
    useResidence();
  const { userApp } = useAuth();
  const [propertyType, setPropertyType] = useState(null);

  function sendParams() {
    if (propertyType === null && residenceData.propertyType === undefined) {
      return toast.error('Selecione o tipo da sua propriedade.');
    }
    if (residenceData.propertyType === undefined) {
      handleStep({ propertyType });
    } else {
      const newData = {
        ...residenceData,
        propertyType:
          propertyType === null ? residenceData.propertyType : propertyType,
      };
      handleDataUpdate(newData);
    }

    advanceStep();
  }

  useEffect(() => {
    if (userApp) {
      if (
        userApp.editResidence.editing != false &&
        userApp.editResidence.idHouse
      ) {
        api.get(`/properties/${userApp.editResidence.idHouse}`).then((res) => {
          handleDataUpdate(res.data);
        });
      }
    }
  }, [userApp]);

  return (
    <Container>
      <HeaderMobile />
      <h1>Qual tipo de espaço você deseja hospedar?</h1>
      <Option
        onClick={() => setPropertyType('apartamento')}
        label="Apartamento"
        image="apartment.png"
        alt="apartamento"
      />
      <Option
        onClick={() => setPropertyType('casa')}
        label="Casa"
        image="house.png"
        alt="casa"
      />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
