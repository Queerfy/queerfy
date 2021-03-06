import React, { useEffect, useState } from 'react';
import { useResidence } from '../../../../hooks/residence';
import { useAuth } from '../../../../hooks/useAuth';

import { api } from '../../../../services/api';

import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container, Content, Divider, Espefications } from './styles';
import { toast } from 'react-toastify';
import { Coffee, Wifi } from 'react-feather';

import { useRouter } from 'next/router';

export const StepNine = () => {
  const { backStep, residenceData, images, setImagesUser } = useResidence();
  const { userApp, handleResidenceEdit } = useAuth();
  const router = useRouter();
  const [image, setImage] = useState('');

  const handleImages = async (newHouse) => {
    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        var bodyFormData = new FormData();
        bodyFormData.append('image', images[i]);
        await api.patch(
          `/properties/image${i + 1}/${newHouse.data.id}`,
          bodyFormData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );
      }
    } else {
      for (let i = 0; i < 5; i++) {
        const { data } = await api.get(
          `/properties/image${i + 1}/${residenceData.id}`
        );
        if (data != '') {
          setImagesUser(data);
        }
      }
    }
  };

  const handleSubmit = async () => {
    const defaultValues = {
      idUser: userApp.id,
      active: true,
      likes: 0,
    };

    const data = { ...residenceData, ...defaultValues };

    try {
      if (
        userApp &&
        userApp?.editResidence?.editing !== undefined &&
        userApp?.editResidence?.idHouse !== undefined
      ) {
        const house = await api.put(
          `/properties/${userApp.editResidence.idHouse}`,
          data
        );
        handleImages(house);
        handleResidenceEdit(false, null);
        toast.success('ResidĂȘncia atualizada com sucesso!');
        router.push('/MyAds');
      } else {
        const newHouse = await api.post('/properties', data);
        handleImages(newHouse);
        toast.success('ResidĂȘncia cadastrada com sucesso!');
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      return toast.error(
        'Ocorreu um erro. Verifique as informaĂ§Ă”es e tente novamente.'
      );
    }
  };

  useEffect(() => {
    if (images.length > 0) {
      console.log(images);
      /*  let image = btoa(
        new Uint8Array(images[0][0]).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
      setImage(`data:${headers['content-type'].toLowerCase()};base64,${image}`); */
    }
  }, []);

  return (
    <Container>
      <HeaderMobile />
      <h1>Este anĂșncio ficarĂĄ visĂ­vel aos hĂłspedes imediatamente.</h1>
      <Content>
        <img src="homePhoto.jpg" alt="casa" />
        <h1>{residenceData.name}</h1>
        <p>{residenceData.description}</p>
        <Divider />
        <Espefications>
          <strong>EspeficaĂ§Ă”es</strong>
          <p>
            <strong>HĂłspedes: </strong>
            {residenceData.guestsQuantity}
          </p>
          <p>
            <strong>Quartos: </strong>
            {residenceData.roomQuantity}
          </p>
          <p>
            <strong>Camas: </strong>
            {residenceData.bedsQuantity}
          </p>
          <p>
            <strong>Banheiros: </strong>
            {residenceData.bathroomQuantity}
          </p>
        </Espefications>
        <Divider />
        <Espefications>
          <strong>Filtros</strong>
          {residenceData.haveWifi && (
            <p>
              <Wifi size={20} /> Wi-Fi
            </p>
          )}
          {residenceData.haveKitchen && (
            <p>
              <Coffee size={20} /> Cozinha
            </p>
          )}
          {residenceData.haveSuite && (
            <p>
              <img src="bed.svg" alt="cama" /> SuĂ­te
            </p>
          )}
          {residenceData.haveGarage && (
            <p>
              <img src="parking.svg" /> Garagem
            </p>
          )}
          {residenceData.haveAnimals && (
            <p>
              <img src="cat-paw.svg" /> Permitido animais
            </p>
          )}
        </Espefications>
        <Divider />
        <p>
          <strong>Valor diĂĄria: </strong>
          {residenceData.dailyPrice.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </Content>
      <GeneralButton
        text="Continuar"
        bgColor="linear-gradient(180deg, #f26b9c 0%, #f15356 80.21%)"
        onClick={handleSubmit}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
