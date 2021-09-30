import React from "react";

import { Container } from "./styles";

interface GeneralButtonProps {
  text: string;
  bgColor?: string;
}

export const GeneralButton = (props: GeneralButtonProps) => {
  return (
    <Container
      color={props.bgColor}
    >
      {props.text}
    </Container>
  );
}
