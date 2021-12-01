import React from 'react';

import { Container, Item, NavbarSpace } from './styles';

import { Download, Search, User } from 'react-feather'

export const NavbarMobile = () => {

  return (
    <>
      <NavbarSpace />
      <Container>
        <Item>
          <Search />
          <span>Explorar</span>
        </Item>
        <Item>
          <Download />
          <span>Idioma</span>
        </Item>
        <Item>
          <User />
          <span>Conta</span>
        </Item>
      </Container>
    </>
  );
};
