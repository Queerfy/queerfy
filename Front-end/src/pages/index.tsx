import { NextPage } from 'next';

import Head from 'next/head';
import { theme } from '../styles/theme';

import { MainContainer, Header, Categories, CategorieTypes, HostBanner, HostContent, BannerFade } from '../styles/home';

import { Navbar } from '../components/Navbar';
import { NavbarMobile } from '../components/NavbarMobile';
import { HandleCategorie } from '../components/Home/HandleCategorie';

import { GeneralButton } from '../components/GeneralButton';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy</title>
      </Head>

      <Navbar />

      <MainContainer>
        <Header>
          <img src="logo.svg" alt="" />
        </Header>
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
          <BannerFade>
            <HostContent>
              <h1>Hospede sua casa e ajude alguém</h1>
              <p>Ganhe dinheiro, tenha novas experiências e ajude a comunidade</p>
              <GeneralButton
                text="Hospedar"
                bgColor={theme.colors.red}
              />
            </HostContent>
          </BannerFade>
        </HostBanner>
        <NavbarMobile />
      </MainContainer>
    </>
  );
};

export default IndexPage;
