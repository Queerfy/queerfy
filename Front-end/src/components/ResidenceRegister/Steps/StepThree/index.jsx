import React, { useRef, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useResidence } from '../../../../hooks/residence';
import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container, InputsSection, FormInput } from './styles';

import { apiGeocode } from '../../../../services/api';

import InputMask from 'react-input-mask';

export const StepThree = () => {
  const { advanceStep, backStep, handleStep, residenceData, handleDataUpdate } =
    useResidence();

  const streetRef = useRef();
  const cityRef = useRef();
  const ufRef = useRef();
  const cepRef = useRef(null);
  const complementRef = useRef();
  const neighbourhoodRef = useRef();
  const numberRef = useRef();
  const referencePointRef = useRef();

  function haveEmptyProperties(address) {
    if (
      address.street === '' ||
      address.city === '' ||
      address.uf === '' ||
      address.cep === '' ||
      address.complement === '' ||
      address.number === ''
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Função para tratar o envio do campo cidade para o banco. Ex: São Paulo -> sao-paulo
  function treatCity(city) {
    return city
      .toLowerCase()
      .replace(' ', '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function treatCep(cep) {
    return cep.replace('-', '');
  }

  async function sendParams() {
    const { data } = await apiGeocode.get('/address', {
      params: {
        key: '38GhVvh0oG1ELtq8z7FDb7UI6S3ymwHU',
        location: `${numberRef.current.value} ${streetRef.current.value}, ${cityRef.current.value}`,
      },
    });

    const latitude = data.results[0].locations[0].latLng.lat;
    const longitude = data.results[0].locations[0].latLng.lng;

    const city = String(cityRef.current.value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/( )+/g, '-');

    const address = {
      street: streetRef.current.value,
      city,
      uf: ufRef.current.value.toUpperCase(),
      cep: treatCep(cepRef.current.value),
      addressComplement: complementRef.current.value,
      /* neighbourhood: neighbourhoodRef.current.value, */
      houseNumber: numberRef.current.value,
      referencePoint: referencePointRef.current.value,
      latitude,
      longitude,
    };

    if (address.cep.length !== 8) {
      return toast.error('Preencha o campo de CEP corretamente.');
    }

    if (haveEmptyProperties(address)) {
      return toast.error('Preencha todos os campos.');
    }

    if (residenceData.street === undefined) {
      handleStep(address);
    } else {
      const newData = {
        ...residenceData,
        ...address,
      };
      handleDataUpdate(newData);
    }

    advanceStep();
  }

  useEffect(() => {
    if (residenceData && residenceData.street) {
      streetRef.current.value = residenceData.street;
      cityRef.current.value = residenceData.city.replace('-', ' ');
      ufRef.current.value = residenceData.uf;
      cepRef.current.value = residenceData.cep;
      complementRef.current.value = residenceData.addressComplement;
      numberRef.current.value = residenceData.houseNumber;
      referencePointRef.current.value = residenceData.referencePoint;
    }
  }, []);

  return (
    <Container>
      <HeaderMobile />
      <h1>Insira o endereço da sua locação</h1>
      <FormInput>
        <label htmlFor="streetInput">Rua / Logradouro</label>
        <input
          id="streetInput"
          name="streetInput"
          placeholder="Rua das Laranjeiras"
          ref={streetRef}
        />
      </FormInput>
      <InputsSection>
        <FormInput width="75%" desktopWidth="83% ">
          <label htmlFor="inputCidade">Cidade</label>
          <input
            id="inputCidade"
            name="inputCidade"
            placeholder="São Paulo"
            ref={cityRef}
            style={{ textTransform: 'capitalize' }}
          />
        </FormInput>
        <FormInput width="20%" desktopWidth="12%">
          <label htmlFor="inputUf">UF</label>
          <input
            id="inputUf"
            name="inputUf"
            placeholder="SP"
            maxLength="2"
            ref={ufRef}
          />
        </FormInput>
      </InputsSection>
      <InputsSection>
        <FormInput width="45%" desktopWidth="45%">
          <label htmlFor="inputCep">CEP</label>
          <input
            id="inputCep"
            name="inputCep"
            placeholder="_____-___"
            ref={cepRef}
            value={cepRef?.current?.value}
            /* mask="99999-999" */
          />
        </FormInput>
        <FormInput width="50%" desktopWidth="50%">
          <label htmlFor="inputComplement">Complemento</label>
          <input
            id="inputComplement"
            name="inputComplement"
            placeholder="Ap. 34 Bloco 4"
            ref={complementRef}
          />
        </FormInput>
      </InputsSection>
      <InputsSection>
        {/* <FormInput width="75%" desktopWidth="80% ">
          <label htmlFor="inputNeighbourhood">Bairro</label>
          <input
            id="inputNeighbourhood"
            name="inputNeighbourhood"
            placeholder="Parque Terra Nova"
            ref={neighbourhoodRef}
          />
        </FormInput> */}
        <FormInput width="20%" desktopWidth="15%">
          <label htmlFor="inputNumber">Número</label>
          <input
            id="inputNumber"
            name="inputNumber"
            placeholder="290"
            ref={numberRef}
            type="number"
          />
        </FormInput>
        <FormInput width="75%" desktopWidth="80% ">
        <label htmlFor="inputReferencePoint">Ponto de referência</label>
        <input
          id="inputReferencePoint"
          name="inputReferencePoint"
          placeholder="Próximo a panificadora alpha"
          ref={referencePointRef}
        />
      </FormInput>
      </InputsSection>
      
      <GeneralButton
        text="Continuar"
        bgColor='linear-gradient(180deg, #f26b9c 0%, #f15356 80.21%)'
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
};
