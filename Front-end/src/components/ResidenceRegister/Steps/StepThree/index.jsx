import React, { useEffect, useState } from 'react';
import { useResidence } from '../../../../hooks/residence';
import { theme } from '../../../../styles/theme';
import { FormInput } from '../../../FormInput';
import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container, InputsSection } from './styles';

export const StepThree = () => {
  const { advanceStep, backStep, handleStep } = useResidence();

  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [uf, setUf] = useState(null);
  const [cep, setCep] = useState(null);
  const [complement, setComplement] = useState(null);
  const [neighbor, setNeighbor] = useState(null);
  const [number, setNumber] = useState(null);
  const [referencePoint, setReferencePoint] = useState(null);

  function sendParams() {
    const address = {
      street: street,
      city: city,
      uf: uf,
      cep: cep,
      addressComplement: complement,
      neighbor: neighbor,
      houseNumber: number,
      referencePoint: referencePoint
    }

    handleStep(address);
    advanceStep();
  }

  return (
    <Container>
      <HeaderMobile />
      <h1>Insira o endereço da sua locação</h1>
      <FormInput
        label="Rua / Logradouro"
        placeholder="Rua das Laranjeiras"
      />
      <InputsSection>
        <FormInput
          label="Cidade"
          placeholder="São Paulo"
          width="75%"
        />
        <FormInput
          label="UF"
          placeholder="SP"
          width="20%"
        />
      </InputsSection>
      <InputsSection>
        <FormInput
          label="CEP"
          placeholder="_____-___"
          width="45%"
        />
        <FormInput
          label="Complemento"
          placeholder="Ap. 34 Bloco 4"
          width="50%"
        />
      </InputsSection>
      <InputsSection>
        <FormInput
          label="Bairro"
          placeholder="Parque Terra Nova"
          width="75%"
        />
        <FormInput
          label="Número"
          placeholder="290"
          width="20%"
        />
      </InputsSection>
      <FormInput
        label="Ponto de referência"
        placeholder="Próximo a padaria alpha"
      />
      <GeneralButton
        text="Continuar"
        bgColor={theme.gradients.red}
      />
      <span onClick={backStep}>Voltar</span>
    </Container>
  );
}
