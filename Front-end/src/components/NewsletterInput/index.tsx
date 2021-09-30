import React from 'react';

import { Send } from 'react-feather';

import { IconBox, Input, InputBox } from './styles';

export const NewsletterInput = () => {
  return (
    <InputBox>
      <Input placeholder="email@email.com.br" />
      <IconBox>
        <Send />
      </IconBox>
    </InputBox>
  );
}
