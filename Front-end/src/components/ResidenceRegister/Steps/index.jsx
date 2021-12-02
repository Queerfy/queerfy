import React, { useEffect, useState } from 'react';

import { useAuth } from '../../../hooks/useAuth';

import { useResidence } from '../../../hooks/residence';

import { Option } from '../Option';
import { GeneralButton } from '../../GeneralButton';
import { HeaderMobile } from '../../HeaderMobile';

import { Container, InputBox, ContainerInputBox } from './styles';

import { toast } from 'react-toastify';
import { api } from '../../../services/api';

import { FilePlus } from 'react-feather';
import { useRouter } from 'next/router';

export const StepOne = () => {
  const { advanceStep, backStep, handleStep, residenceData, handleDataUpdate } =
    useResidence();
  const { userApp } = useAuth();
  const router = useRouter();
  const [propertyType, setPropertyType] = useState(null);
  const [apartmentSelected, setApartmentSelected] = useState(false);
  const [houseSelected, setHouseSelected] = useState(false);
  const [txt, setTxt] = useState([]);

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
        userApp?.editResidence?.editing != false &&
        userApp?.editResidence?.idHouse
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
    setPropertyType('casa');

    if (houseSelected) {
      setApartmentSelected(false);
      setHouseSelected(false);
    } else {
      setApartmentSelected(false);
      setHouseSelected(true);
    }
  }

  async function setTxtUser(localTxt) {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append('file', localTxt[0]);
      await api.post('/properties/import', bodyFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Arquivo importado com sucesso!');
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      console.log(error.message);
      return toast.error('Erro ao importar o arquivo');
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
      <ContainerInputBox>
        <GeneralButton
          text="Continuar"
          bgColor="linear-gradient(180deg, #f26b9c 0%, #f15356 80.21%)"
          onClick={sendParams}
        />
        <InputBox>
          <label htmlFor="arquivo">
            <FilePlus size={30} />
          </label>
          <input
            type="file"
            name="arquivo"
            id="arquivo"
            accept=".txt,.md,.markdown"
            onChange={(e) => setTxtUser(e.target.files)}
          />
          <p>Deseja adicionar</p>
          <p>várias residências?</p>
        </InputBox>
      </ContainerInputBox>
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
