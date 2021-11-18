import { NextPage } from 'next';
import Head from 'next/head';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { NavbarMobile } from '../../components/NavbarMobile';
import { HeaderMobile } from '../../components/HeaderMobile';
import { AdditionalInformation } from '../../components/AdditionalInformation';

import {
  MainContainer,
  HeaderBox,
  TitleHeader,
  CardsMain,
  CardHouse,
  ImageCard,
} from './style';

const MyLikedResidences: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Paginas de Favoritos</title>
      </Head>

      <Navbar />
      <HeaderMobile />

      <MainContainer>
        <HeaderBox>
          <TitleHeader>Minhas reservas favoritas</TitleHeader>
        </HeaderBox>

        <CardsMain>
          <CardHouse>
            <ImageCard></ImageCard>
          </CardHouse>
          <CardHouse>
            <ImageCard></ImageCard>
          </CardHouse>
          <CardHouse>
            <ImageCard></ImageCard>
          </CardHouse>
          <CardHouse>
            <ImageCard></ImageCard>
          </CardHouse>
        </CardsMain>
      </MainContainer>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default MyLikedResidences;
