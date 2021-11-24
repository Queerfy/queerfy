import React, { useRef } from 'react';

import { useResidence } from '../../../../hooks/residence';

import { Container, InputBox } from './styles';

import { GeneralButton } from '../../../GeneralButton';
import { theme } from '../../../../styles/theme';
import { HeaderMobile } from '../../../HeaderMobile';
import { toast } from 'react-toastify';

export const StepEight = () => {
  const { advanceStep, backStep, handleStep } = useResidence();

  const dailyPriceRef = useRef();

  function sendParams() {
    const dailyPrice = parseFloat(dailyPriceRef.current.value);

    if (dailyPrice === 0 || isNaN(dailyPrice)) {
      return toast.error('Informe um preço válido!');
    }

    handleStep({ dailyPrice });
    advanceStep();
  }

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
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
