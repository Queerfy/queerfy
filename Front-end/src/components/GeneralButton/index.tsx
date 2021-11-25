import React from "react";

import { BaseButton } from "./styles";

interface GeneralButtonProps {
  text: string;
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const GeneralButton = (props: GeneralButtonProps) => {
  return (
    <BaseButton
      onClick={props.onClick}
      color={props.bgColor}
    >
      {props.text}
    </BaseButton>
  );
}
