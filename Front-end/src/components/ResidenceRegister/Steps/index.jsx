import React, { useEffect, useState } from 'react';

import { useAuth } from '../../../hooks/useAuth';

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
  const [apartmentSelected, setApartmentSelected] = useState(false);
  const [houseSelected, setHouseSelected] = useState(false);

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

  function handleSelectApartment() {
    setPropertyType('apartamento');

    if (apartmentSelected) {
      setApartmentSelected(false);
      setHouseSelected(false);
    } else {
      setHouseSelected(false);
      setApartmentSelected(true);
    }
  }

  function handleSelectHouse() {
    setPropertyType('casa')

    if (houseSelected) {
      setApartmentSelected(false);
      setHouseSelected(false);
    } else {
      setApartmentSelected(false);
      setHouseSelected(true);
    }
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Qual tipo de espaço você deseja hospedar?</h1>
      <Option
        onClick={handleSelectApartment}
        label="Apartamento"
        image="apartment.png"
        alt="apartamento"
        selected={apartmentSelected}
      />
      <Option
        onClick={handleSelectHouse}
        label="Casa"
        image="house.png"
        alt="casa"
        selected={houseSelected}
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
