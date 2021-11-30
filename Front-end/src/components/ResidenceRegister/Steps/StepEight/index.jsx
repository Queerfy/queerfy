import React, { useRef, useEffect } from 'react';

import { useResidence } from '../../../../hooks/residence';

import { Container, InputBox } from './styles';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';
import { toast } from 'react-toastify';

export const StepEight = () => {
  const { advanceStep, backStep, handleStep, residenceData, handleDataUpdate } =
    useResidence();

  const dailyPriceRef = useRef();

  function sendParams() {
    const dailyPrice = parseFloat(dailyPriceRef.current.value);

    if (dailyPrice === 0 || isNaN(dailyPrice)) {
      return toast.error('Informe um preço válido.');
    }

    if (residenceData.dailyPrice === undefined) {
      handleStep({ dailyPrice });
    } else {
      const newData = {
        ...residenceData,
        dailyPrice,
      };
      handleDataUpdate(newData);
    }

    advanceStep();
  }

  useEffect(() => {
    if (residenceData && residenceData.dailyPrice) {
      dailyPriceRef.current.value = parseFloat(
        String(residenceData.dailyPrice).replace(',', '.')
      );
    }
  }, []);

  return (
    <Container>
      <HeaderMobile />
      <InputBox>
        <input ref={dailyPriceRef} type="number" placeholder="00,00" />
      </InputBox>
      <p>
        Agora vem a parte divertida.
        <br />
        Vamos definir seu <strong>PREÇO</strong>.
      </p>
      <GeneralButton
        text="Continuar"
        bgColor='linear-gradient(180deg, #f26b9c 0%, #f15356 80.21%)'
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
