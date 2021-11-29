import React, { useState, useEffect } from 'react';
import { useResidence } from '../../../../hooks/residence';

import { HeaderMobile } from '../../../HeaderMobile';
import { Filter } from '../../Filter';

import { Coffee, Wifi } from 'react-feather';

import { Container, FiltersBox } from './styles';
import { GeneralButton } from '../../../GeneralButton';
import { theme } from '../../../../styles/theme';
import { toast } from 'react-toastify';

export const StepFive = () => {
  const { advanceStep, backStep, handleStep, residenceData, handleDataUpdate } =
    useResidence();
  const [haveWifi, setHaveWifi] = useState(residenceData.haveWifi ?? false);
  const [haveKitchen, setHaveKitchen] = useState(
    residenceData.haveKitchen ?? false
  );
  const [haveSuite, setHaveSuite] = useState(residenceData.haveSuite ?? false);
  const [haveGarage, setHaveGarage] = useState(
    residenceData.haveGarage ?? false
  );
  const [haveAnimals, setHaveAnimals] = useState(
    residenceData.haveAnimals ?? false
  );

  function handleSelect(state, setState) {
    if (!state) {
      setState(true);
    } else {
      setState(false);
    }
  }

  function hasEmptyProperties() {
    if (
      haveWifi === false &&
      haveKitchen === false &&
      haveSuite === false &&
      haveGarage === false &&
      haveAnimals === false
    ) {
      return true;
    } else {
      return false;
    }
  }

  function sendParams() {
    const filters = {
      haveWifi: haveWifi,
      haveKitchen: haveKitchen,
      haveSuite: haveSuite,
      haveGarage: haveGarage,
      haveAnimals: haveAnimals,
    };

    if (hasEmptyProperties()) {
      return toast.error('Selecione ao menos um filtro.');
    }

    if (residenceData.haveWifi === undefined) {
      handleStep(filters);
    } else {
      const newData = {
        ...residenceData,
        ...filters,
      };
      handleDataUpdate(newData);
    }

    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Quais filtros se encaixam na residência?</h1>
      <FiltersBox>
        <Filter
          onClick={() => handleSelect(haveWifi, setHaveWifi)}
          icon={<Wifi size={30} />}
          label="Wi-Fi"
        />
        <Filter
          onClick={() => handleSelect(haveKitchen, setHaveKitchen)}
          icon={<Coffee size={30} />}
          label="Cozinha"
        />
        <Filter
          onClick={() => handleSelect(haveSuite, setHaveSuite)}
          image="bed.svg"
          label="Suíte"
        />
        <Filter
          onClick={() => handleSelect(haveGarage, setHaveGarage)}
          image="parking.svg"
          label="Garagem"
        />
        <Filter
          onClick={() => handleSelect(haveAnimals, setHaveAnimals)}
          image="cat-paw.svg"
          label="Animais"
        />
      </FiltersBox>
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
