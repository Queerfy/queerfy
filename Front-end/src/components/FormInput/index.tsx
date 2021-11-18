import React from 'react'

import { Container, DefaultInput } from './styles';

interface InputProps {
  label: string;
  placeholder: string;
  name?: string;
  type?: string;
  width?: string;
}

export const FormInput = (props: InputProps) => {
  return (
    <Container width={props.width}>
      <label htmlFor="input">{props.label}</label>
      <DefaultInput
        id="input"
        name={props.name}
        placeholder={props.placeholder}
        type={props.type ? props.type : "text"}
      />
    </Container>
  );
}
