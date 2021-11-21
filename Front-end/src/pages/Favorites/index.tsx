import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Navbar } from '../../components/Navbar';
import { NavbarMobile } from '../../components/NavbarMobile';
import { HeaderMobile } from '../../components/HeaderMobile';

import {
  MainContainer,
  HeaderBox,
  TitleHeader,
  CardsMain,
  CardHouse,
  ImageCard,
  DescribeResidence,
} from './style';

import { IconBack } from '../Register/style';
import { Footer } from '../../components/Footer';

const Favorites: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Favoritos</title>
      </Head>

      <Navbar />
      <HeaderMobile />

      <MainContainer>
        <HeaderBox>
          <Link href="/">
            <IconBack color="#a993f5" size={30} />
          </Link>
          <TitleHeader>Minhas reservas favoritas</TitleHeader>
        </HeaderBox>

        <CardsMain>
          <CardHouse>
            <ImageCard>
              <img src="residence-vila.jpg" alt="Imagem da propriedade" />
            </ImageCard>
            <DescribeResidence>
              <p>Casa - 1 quarto disponivel</p>
              <p>O locador é Cristina Finzchz</p>
            </DescribeResidence>
          </CardHouse>
          <CardHouse>
            <ImageCard>
              <img src="residence-vila.jpg" alt="Imagem da propriedade" />
            </ImageCard>
            <DescribeResidence>
              <p>Casa - 1 quarto disponivel</p>
              <p>O locador é Cristina Finzchz</p>
            </DescribeResidence>
          </CardHouse>
          <CardHouse>
            <ImageCard>
              <img src="residence-vila.jpg" alt="Imagem da propriedade" />
            </ImageCard>
            <DescribeResidence>
              <p>Casa - 1 quarto disponivel</p>
              <p>O locador é Cristina Finzchz</p>
            </DescribeResidence>
          </CardHouse>
          <CardHouse>
            <ImageCard>
              <img src="residence-vila.jpg" alt="Imagem da propriedade" />
            </ImageCard>
            <DescribeResidence>
              <p>Casa - 1 quarto disponivel</p>
              <p>O locador é Cristina Finzchz</p>
            </DescribeResidence>
          </CardHouse>
        </CardsMain>
      </MainContainer>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default Favorites;
