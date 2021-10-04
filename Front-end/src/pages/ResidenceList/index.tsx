import React from "react";

import { NextPage } from "next";

import { Categories, RoomRow, TrendContainer, CategorieItem } from "./styles";

import { Navbar } from "../../components/Navbar";
import { HeaderMobile } from "../../components/HeaderMobile";
import { NavbarMobile } from "../../components/NavbarMobile";
import { Residence } from "../../components/Residence";
import { Coffee, Droplet, Wifi } from "react-feather";

const ResidenceList: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeaderMobile />
      <TrendContainer>
        <h1>Locações com as melhores avaliações em cidade</h1>
        <p>
          Os hóspedes concordam: estas acomodações foram muito bem avaliadas quanto a localização, limpeza e outros aspectos.
        </p>
        <RoomRow>
          <Residence />
          <Residence />
          <Residence />
        </RoomRow>
      </TrendContainer>
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
      <NavbarMobile />
    </>
  );
}

export default ResidenceList;
