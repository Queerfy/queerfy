import { NextPage } from 'next';

import Head from 'next/head';
import { theme } from '../styles/theme';

import {
  MainContainer,
  HeaderMobile,
  Categories,
  CategorieTypes,
  HostBanner,
  PinkBunners
} from '../styles/home';

import { Navbar } from '../components/Navbar';
import { NavbarMobile } from '../components/NavbarMobile';
import { HandleCategorie } from '../components/Home/HandleCategorie';
import { Banner } from '../components/Home/Banner';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy</title>
      </Head>

      <Navbar />

      <MainContainer>
        <HeaderMobile>
          <img src="logo.svg" alt="" />
        </HeaderMobile>
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
        <NavbarMobile />
      </MainContainer>
    </>
  );
};

export default IndexPage;
