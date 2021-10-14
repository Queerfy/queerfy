import React from 'react';

import { Search } from 'react-feather';

import {
  Container,
  IconBox,
  InputBox,
  SearchInput,
  Separator,
} from './styles';

import { MenuDropdown } from './MenuDropdown';

type NavbarProps = {
  accountNavbar?: boolean;
};

export const Navbar = ({ accountNavbar }: NavbarProps) => {
  return (
    <Container>
      <img src="../logo.svg" alt="logo" />
      {!accountNavbar && (
        <>
          <InputBox>
            <SearchInput placeholder="Para onde você quer ir?" />
            <IconBox>
              <Search />
            </IconBox>
          </InputBox>
          <span>Sobre nós</span>
          <span>Suporte</span>
          <Separator />
        </>
      )}
      <MenuDropdown />
    </Container>
  );
};
