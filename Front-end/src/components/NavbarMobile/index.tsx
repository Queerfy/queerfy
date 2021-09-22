import React from 'react';

import { Container, Item, NavbarSpace } from './styles';

import { Globe, Search, User } from 'react-feather'

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
          <Globe />
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
