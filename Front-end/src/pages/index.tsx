import React from 'react';
import { NextPage } from 'next';

import Head from 'next/head';
import { theme } from '../styles/theme';

import {
  MainContainer,
  Categories,
  CategorieTypes,
  HostBanner,
  PinkBunners,
  NearbyContainer,
  Nearby,
  NewslletterContainer,
} from '../styles/home';

import { Navbar } from '../components/Navbar';
import { HeaderMobile } from '../components/HeaderMobile';
import { NavbarMobile } from '../components/NavbarMobile';
import { Footer } from '../components/Footer';

import { Slide } from '../components/Slide';
import { HandleCategorie } from '../components/Home/HandleCategorie';
import { Banner } from '../components/Home/Banner';
import { NearbyPlaces } from '../components/Home/NearbyPlaces';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Conta</title>
      </Head>

      <Navbar />
      <MainContainer>
        <HeaderMobile />
        <Slide />
        <Categories>
          <h1>Qual tipo de acomodação você precisa?</h1>
          <CategorieTypes>
            <HandleCategorie
              image="suit.svg"
              title="Suíte"
            />
            <HandleCategorie
              image="room.svg"
              title="Quarto"
            />
            <HandleCategorie
              image="allowPets.svg"
              title="Permitido animais"
            />
          </CategorieTypes>
        </Categories>
        <HostBanner>
          <Banner
            backgroundImg="host-banner.svg"
            title="Hospede sua casa e ajude alguém"
            description="Ganhe dinheiro, tenha novas experiências e ajude a comunidade"
            buttonLabel="Hospedar"
            buttonColor={theme.colors.red}
          />
        </HostBanner>
        <PinkBunners>
          <Banner
            backgroundImg="post-banner.svg"
            title="Conheça nosso mural de postagens!"
            titleColor={theme.colors.pink}
            description="Precisa de alguém para dividir as contas?"
            buttonLabel="Conhecer"
            buttonColor={theme.colors.pink}
          />
          <Banner
            backgroundImg="support-banner.svg"
            title="Precisa de ajuda?"
            titleColor={theme.colors.pink}
            description="Entre em contato conosco"
            buttonLabel="Suporte"
            buttonColor={theme.colors.pink}
          />
        </PinkBunners>
        <Nearby>
          <h1>Lugares pertinho de você</h1>
          <NearbyContainer>
            <NearbyPlaces
              title="Balneário Camboriú"
              hours={1}
              image="city-example.jpg"
            />
            <NearbyPlaces
              title="Balneário Camboriú"
              hours={2}
              image="city-example.jpg"
            />
            <NearbyPlaces
              title="Balneário Camboriú"
              hours={2}
              image="city-example.jpg"
            />
            <NearbyPlaces
              title="Balneário Camboriú"
              hours={2}
              image="city-example.jpg"
            />
          </NearbyContainer>
        </Nearby>
        <NewslletterContainer>
          <h1>Newsletter</h1>
          <Banner
            backgroundImg="newsletter-banner.svg"
            title="Inscreva-se na nossa newsletter"
            titleColor={theme.assets.background}
            description="Aqui você fica por dentro de nossas campanhas para ajudar os membros da comunidade."
            newsletter={true}
          />
        </NewslletterContainer>
        <Footer />
      </MainContainer>
      <NavbarMobile />
    </>
  );
};

export default IndexPage;
