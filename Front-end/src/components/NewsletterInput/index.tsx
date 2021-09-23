import React from 'react';

import { Send } from 'react-feather';

import { IconBox, InputBox } from './styles';

export const NewsletterInput = () => {
  return (
    <InputBox>
      <NewsletterInput />
      <IconBox>
        <Send />
      </IconBox>
    </InputBox>
  );
}
