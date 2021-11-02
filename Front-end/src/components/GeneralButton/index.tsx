import React from "react";

import { BaseButton } from "./styles";

interface GeneralButtonProps {
  text: string;
  bgColor?: string;
}

export const GeneralButton = (props: GeneralButtonProps) => {
  return (
    <BaseButton
      color={props.bgColor}
    >
      {props.text}
    </BaseButton>
  );
}
