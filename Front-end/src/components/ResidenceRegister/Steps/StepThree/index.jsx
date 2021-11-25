import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { useResidence } from '../../../../hooks/residence';
import { theme } from '../../../../styles/theme';
import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container, InputsSection, FormInput } from './styles';

export const StepThree = () => {
  const { advanceStep, backStep, handleStep } = useResidence();

  const streetRef = useRef();
  const cityRef = useRef();
  const ufRef = useRef();
  const cepRef = useRef();
  const complementRef = useRef();
  const neighbourhoodRef = useRef();
  const numberRef = useRef();
  const referencePointRef = useRef();

  function haveEmptyProperties(address) {
    if (
      address.street === "" ||
      address.city === "" ||
      address.uf === "" ||
      address.cep === "" ||
      address.complement === "" ||
      address.neighbourhood === "" ||
      address.number === "" ||
      address.referencePoint === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  function sendParams() {
    const address = {
      street: streetRef.current.value,
      city: cityRef.current.value,
      uf: ufRef.current.value.toUpperCase(),
      cep: cepRef.current.value,
      addressComplement: complementRef.current.value,
      neighbourhood: neighbourhoodRef.current.value,
      houseNumber: numberRef.current.value,
      referencePoint: referencePointRef.current.value
    }

    if (haveEmptyProperties(address)) {
      return toast.error("Preencha todos os campos.")
    }

    handleStep(address);
    advanceStep();
  }

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
          />
        </FormInput>
        <FormInput width="20%" desktopWidth="12%">
          <label htmlFor="inputUf">UF</label>
          <input
            id="inputUf"
            name="inputUf"
            placeholder="SP"
            maxlength="2"
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
            type="number"
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
        <FormInput width="75%" desktopWidth="80% ">
          <label htmlFor="inputNeighbourhood">Bairro</label>
          <input
            id="inputNeighbourhood"
            name="inputNeighbourhood"
            placeholder="Parque Terra Nova"
            ref={neighbourhoodRef}
          />
        </FormInput>
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
      </InputsSection>
      <FormInput>
        <label htmlFor="inputReferencePoint">Ponto de referência</label>
        <input
          id="inputReferencePoint"
          name="inputReferencePoint"
          placeholder="Próximo a panificadora alpha"
          ref={referencePointRef}
        />
      </FormInput>
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
        onClick={sendParams}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
}
