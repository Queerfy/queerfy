import React from 'react';

import { Search } from 'react-feather';

import { Container, IconBox, InputBox, SearchInput, Separator } from './styles';

import { MenuDropdown } from './MenuDropdown';

import Link from 'next/link';

type NavbarProps = {
  accountNavbar?: boolean;
};

export const Navbar = ({ accountNavbar }: NavbarProps) => {
  return (
    <Container>
      <Link href="/">
        <img src="../logo.svg" alt="logo" style={{ cursor: 'pointer' }} />
      </Link>
      {!accountNavbar && (
        <>
          <InputBox>
            <SearchInput placeholder="Para onde você quer ir?" />
            <IconBox>
              <Search />
            </IconBox>
          </InputBox>
          <Link href="/AboutUs">
            <span>Sobre nós</span>
          </Link>
          <Link href="/Support">
            <span>Suporte</span>
          </Link>
          <Separator />
        </>
      )}
      <MenuDropdown />
    </Container>
  );
};
