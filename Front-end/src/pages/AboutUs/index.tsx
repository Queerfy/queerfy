import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Navbar } from '../../components/Navbar';
import { HeaderMobile } from '../../components/HeaderMobile';
import { Footer } from '../../components/Footer';
import { NavbarMobile } from '../../components/NavbarMobile';

import Link from 'next/link';

import {
  Header,
  BoxContent,
  TitleContent,
  Content,
  BoxTeam,
  Team,
  BoxContact,
  ButtonContact,
} from './styles';

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Sobre nós</title>
      </Head>

      <Navbar />
      <HeaderMobile />

      <Header>
        <h1>Sobre a Queerfy</h1>
        <img src="../working-office.svg" alt="Imagem ilustrativa" />
        <h2>2021</h2>
        <p>
          Se inicia a formalização da Queerfy em agosto de 2021, com previsão da
          plataforma ser oficialmente lançada em julho de 2022. A Queerfy nasceu
          para ajudar a comunidade LGBTQIA+ de alguma forma, com o propósito de
          gerar oportunidades de moradia para este público que corre riscos
          diariamente por conta de suas famílias.
        </p>
      </Header>

      <BoxContent>
        <TitleContent>Nosso produto</TitleContent>
        <Content>
          <img src="../home-queerfy.png" alt="Home da Queerfy" />
          <p>
            A plataforma desenvolvida pela Queerfy tem como foco principal
            ajudar o próximo, sendo assim, disponibilizando a oportunidade de
            alugar uma propriedade para se alocar com valores baixos ou até
            mesmo sem custo nenhum. Sendo possível também, se hospedar em uma
            propriedade a partir de uma viagem, tendo em mente que o
            proprietário terá total respeito com seus hóspedes e gentileza em
            recebo-los independente de seu gênero ou orientação sexual.
          </p>
        </Content>
      </BoxContent>

      <BoxTeam>
        <Team>
          <h1>Equipe da Queerfy</h1>
          <p>
            A equipe da Queerfy é composta por 5 desenvolvedores e 1 pessoa da
            àrea de négocios. Possuímos 3 desenvolvedores front-end, 1 back-end
            e 1 full-stack. Há pessoas na equipe que fazem parte da comunidade
            LGBTQIA+, influenciando completamente na ideia e relevância do
            projeto.
          </p>
        </Team>
      </BoxTeam>

      <BoxContact>
        <Link href="/Support">
          <ButtonContact>Entre em contato</ButtonContact>
        </Link>
      </BoxContact>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default AboutUs;
