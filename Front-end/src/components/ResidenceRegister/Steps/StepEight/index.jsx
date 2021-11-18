import React from 'react';
import { useResidence } from '../../../../hooks/residence';
import { useAuth } from '../../../../hooks/useAuth'

import { api } from '../../../../services/api';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container, Content } from './styles';
import { theme } from '../../../../styles/theme';
import { toast } from 'react-toastify';

export const StepEight = () => {
  const { backStep, residenceData } = useResidence();
  const { userApp } = useAuth();

  // filtro de data: string
  // latitude, longitude

  const handleSubmit = async () => {
    const defaultValues = {
      idUser: userApp.id,
      active: true,
      likes: 0
    }

    const data = { ...residenceData, defaultValues }

   try {
    await api.post('/properties', data);
   } catch (error) {
     console.log(error);
     return toast.error('Ocorreu um erro. Verifique as informações e tente novamente.')
   }
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Este anúncio ficará visível aos hóspedes imediatamente.</h1>
      <Content>
        <img src="city-example.jpg" alt="casa" />
        <h1>{residenceData.name}</h1>
        <p>{residenceData.description}</p>
        <p><strong>Valor diária: </strong>
          {residenceData.dailyPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
      </Content>
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={handleSubmit}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
