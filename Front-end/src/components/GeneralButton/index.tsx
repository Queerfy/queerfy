import React from 'react';

import { BaseButton } from './styles';

interface GeneralButtonProps {
  text: string;
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
  disable?: boolean;
}

export const GeneralButton = (props: GeneralButtonProps) => {
  return (
    <BaseButton
      onClick={props.onClick}
      color={props.bgColor}
      disabled={props.disable}
    >
      {props.text}
    </BaseButton>
  );
};
