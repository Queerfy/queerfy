import React from "react";

import { NextPage } from "next";

import { Container, Categories, RoomRow, CategorieItem } from "./styles";

import { Coffee, Droplet, Wifi } from "react-feather";

import { Navbar } from "../../components/Navbar";
import { HeaderMobile } from "../../components/HeaderMobile";
import { NavbarMobile } from "../../components/NavbarMobile";
import { Residence } from "../../components/Residence";
import { Footer } from "../../components/Footer";

const ResidenceList: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeaderMobile />
      <Container>
        <h1>Locações com as melhores avaliações em cidade</h1>
        <p>
          Os hóspedes concordam: estas acomodações foram muito bem avaliadas quanto a localização, limpeza e outros aspectos.
        </p>
        <RoomRow>
          <Residence trend={true}>
            descrição teste
          </Residence>
          <Residence trend={true}>
            descrição teste
          </Residence>
          <Residence trend={true}>
            descrição teste
          </Residence>
        </RoomRow>
      </Container>
      <Container>
        <h1>
          O que você gostaria de ter no local onde está procurando?
        </h1>
        <Categories>
          <CategorieItem>
            <Wifi />
            <span>Wi-Fi</span>
          </CategorieItem>
          <CategorieItem>
            <Coffee />
            <span>Cozinha</span>
          </CategorieItem>
          <CategorieItem>
            <Droplet />
            <span>Piscina</span>
          </CategorieItem>
          <CategorieItem>
            <img src="parking-icon.svg" alt="estacionamento" />
            <span>Garagem</span>
          </CategorieItem>
          <CategorieItem>
            <img src="paw.svg" alt="pata" />
            <span>Animais</span>
          </CategorieItem>
        </Categories>
      </Container>
      <Container>
        <h1>Outros aluguéis excelentes na área selecionada</h1>
        <RoomRow>
          <Residence />
          <Residence />
          <Residence />
          <Residence />
          <Residence />
          <Residence />
        </RoomRow>
      </Container>
      <Footer />
      <NavbarMobile />
    </>
  );
}

export default ResidenceList;
