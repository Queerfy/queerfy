import React, { useEffect } from 'react';
import { useResidence } from '../../../../hooks/residence';

import { GeneralButton } from '../../../GeneralButton';

import { Container, InputBox } from './styles';
import { Image } from 'react-feather';
import { HeaderMobile } from '../../../HeaderMobile';
import { useAuth } from '../../../../hooks/useAuth';
import { api } from '../../../../services/api';

export const StepSeven = () => {
  const { advanceStep, backStep, setImagesUser, residenceData, images } =
    useResidence();

  const { userApp } = useAuth();

  const getImages = async () => {
    if (userApp?.editResidence?.editing && residenceData.id !== undefined) {
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

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Container>
      <HeaderMobile />
      <InputBox>
        <label htmlFor="arquivo">
          <Image size={100} />
          <h1>Vamos adicionar algumas fotos!</h1>
          <p>Adicione pelo menos 5 fotos</p>
        </label>
        <input
          type="file"
          name="arquivo"
          id="arquivo"
          multiple="multiple"
          accept=".jpg,.png"
          onChange={(e) => setImagesUser(e.target.files)}
        />
      </InputBox>
      <GeneralButton
        text="Continuar"
        bgColor='linear-gradient(180deg, #f26b9c 0%, #f15356 80.21%)'
        onClick={advanceStep}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
