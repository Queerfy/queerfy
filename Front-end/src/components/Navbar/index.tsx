import React, { useState } from 'react';

import Switch from "react-switch";

import { Globe, Inbox, Moon, Search, Sun, User } from 'react-feather';

import { Container, Functions, IconBox, InputBox, SearchInput, Separator } from './styles';

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
      <Functions>
        <Switch
          checked={theme}
          onChange={() => { handleTheme() }}
          onColor="#F0BF5A"
          offColor="#A993F5"
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <Globe size={30} />
        <Inbox size={30} />
        <User size={30} />
      </Functions>
    </Container>
  );
}
