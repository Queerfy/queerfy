import React from 'react';
import { useResidence } from '../../../../hooks/residence';
import { useAuth } from '../../../../hooks/useAuth'

import { api } from '../../../../services/api';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container, Content, Divider, Espefications } from './styles';
import { theme } from '../../../../styles/theme';
import { toast } from 'react-toastify';
import { Coffee, Wifi } from 'react-feather';

export const StepNine = () => {
  const { backStep, residenceData } = useResidence();
  const { userApp } = useAuth();

  // filtro de data: string
  // latitude, longitude

  console.log(residenceData);

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
        <Divider />
        <Espefications>
          <strong>Espeficações</strong>
          <p><strong>Hóspedes: </strong>{residenceData.guestsQuantity}</p>
          <p><strong>Quartos: </strong>{residenceData.roomQuantity}</p>
          <p><strong>Camas: </strong>{residenceData.bedsQuantity}</p>
          <p><strong>Banheiros: </strong>{residenceData.bathroomQuantity}</p>
        </Espefications>
        <Divider />
        <Espefications>
          <strong>Filtros:</strong>
          {residenceData.haveWifi && (<p><Wifi size={20} /> Wi-Fi</p>)}
          {residenceData.haveKitchen && (<p><Coffee size={20} /> Cozinha</p>)}
          {residenceData.haveWifi && (<p><img src="bed.svg" alt="cama" /> Suíte</p>)}
          {residenceData.haveWifi && (<p><img src="parking.svg" /> Garagem</p>)}
          {residenceData.haveWifi && (<p><img src="cat-paw.svg" /> Permitido animais</p>)}
        </Espefications>
        <Divider />
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
