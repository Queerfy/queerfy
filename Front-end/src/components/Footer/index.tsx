import React from "react";

import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

import { Address, Container, DownContent, IconsBox, UpContent } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <UpContent>
        <IconsBox>
          <Instagram />
          <Facebook />
          <Twitter />
          <Linkedin />
        </IconsBox>
        <Address>
          <p>Rua Haddock Lobo, 595 - 8° Andar</p>
          <p>Cerqueira César - CEP: 01414-001</p>
          <p>São Paulo - SP</p>
        </Address>
      </UpContent>
      <DownContent>
        <img src="../logo.svg" alt="logo" />
        <span>Queerfy © 2021 Todos os direitos reservados</span>
      </DownContent>
    </Container>
  );
}
