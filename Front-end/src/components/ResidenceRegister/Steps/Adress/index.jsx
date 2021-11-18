import React from 'react';
import { theme } from '../../../../styles/theme';
import { FormInput } from '../../../FormInput';
import { GeneralButton } from '../../../GeneralButton';
import { HeaderMobile } from '../../../HeaderMobile';

import { Container, InputsSection } from './styles';

export const Adress = () => {
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
      <span>Voltar</span>
    </Container>
  );
}
