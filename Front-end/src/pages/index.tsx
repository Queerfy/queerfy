import { NextPage } from 'next';

import Head from 'next/head';

import { MainContainer, Header, Categories, CategorieTypes } from '../styles/home';

import { Navbar } from '../components/Navbar';
import { NavbarMobile } from '../components/NavbarMobile';
import { HandleCategorie } from '../components/Home/HandleCategorie';

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
        <NavbarMobile />
      </MainContainer>
    </>
  );
};

export default IndexPage;
