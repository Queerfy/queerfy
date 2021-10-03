import React from "react";

import { NextPage } from "next";

import { Categories, RoomRow, TrendContainer } from "./styles";

import { Navbar } from "../../components/Navbar";
import { HeaderMobile } from "../../components/HeaderMobile";
import { NavbarMobile } from "../../components/NavbarMobile";
import { Residence } from "../../components/Residence";

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
        oi
      </Categories>
      <NavbarMobile />
    </>
  );
}

export default ResidenceList;
