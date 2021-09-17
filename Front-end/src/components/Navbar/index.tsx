import React, { useState } from 'react';

import Switch from "react-switch";

import { Globe, Inbox, Search, Sun, User } from 'react-feather';

import { Container, IconBox, InputBox, SearchInput, Separator } from './styles';

export const Navbar = () => {
  const [theme, setTheme] = useState(true);

  function handleTheme() {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }

  return (
    <Container>
      <img src="./logo.svg" alt="logo" />
      <InputBox>
        <SearchInput placeholder="Para onde você quer ir?" />
        <IconBox>
          <Search />
        </IconBox>
      </InputBox>
      <span>Sobre nós</span>
      <span>Suporte</span>
      <Separator />
      <Switch
        checked={theme}
        onChange={() => { handleTheme() }}
      />
      <Globe />
      <Inbox />
      <User />
    </Container>
  );
}
