import React, { useState } from 'react';
import { useResidence } from '../../../../hooks/residence';

import { HeaderMobile } from '../../../HeaderMobile';
import { Filter } from '../../Filter';

import { Coffee, Wifi } from 'react-feather';

import { Container, FiltersBox } from './styles';
import { GeneralButton } from '../../../GeneralButton';
import { theme } from '../../../../styles/theme';

export const StepFour = () => {
  const { advanceStep, backStep, handleStep } = useResidence();
  const [selectedItems, setSelectedItems] = useState([]);

  function handleSelect(id) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  function sendParams() {
    handleStep({ filters: selectedItems });
    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Quais filtros se encaixam na residência?</h1>
      <FiltersBox>
        <Filter onClick={() => handleSelect("wifi")} icon={<Wifi size={30} />} label="Wi-Fi" />
        <Filter onClick={() => handleSelect("cozinha")} icon={<Coffee size={30} />} label="Cozinha" />
        <Filter onClick={() => handleSelect("suite")} image="bed.svg" label="Suíte" />
        <Filter onClick={() => handleSelect("garagem")} image="parking.svg" label="Garagem" />
        <Filter onClick={() => handleSelect("animais")} image="cat-paw.svg" label="Animais" />
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
