import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { ArrowLeft, Eye } from 'react-feather';
import { Navbar } from '../../components/Navbar';
import { NavbarMobile } from '../../components/NavbarMobile';
import { ContainerMain, HeaderContainer } from '../Account/styles';
import { ContainerColumn } from '../Account/Information/styles';
import { HeaderMobile } from '../../components/HeaderMobile';
import { theme } from '../../styles/theme';
import { HoveredImage, ImageBox } from '../../components/Residence/styles';
import { Container, ContainerMyReservations } from '../MyReservations/style';
import Link from 'next/link';
import {
  AdsInformation,
  ButtonAds,
  ContainerAds,
  ContainerButtonAds,
} from './style';

const MyAdsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Meus anúncios</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderMobile />
        <HeaderContainer title={theme.colors.purple} text={theme.colors.purple}>
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1>Meus anúncios</h1>
        </HeaderContainer>
        <ContainerMyReservations>
          <ContainerColumn>
            <Container subtitle={theme.colors.purple} text={theme.assets.font}>
              <ContainerAds>
                <ImageBox>
                  <HoveredImage>
                    <Eye />
                  </HoveredImage>
                  <img src="support-banner.svg" width="100%" height="100%" />
                </ImageBox>
                <AdsInformation>
                  <h1>Casa - 1 quarto disponível</h1>
                  <p>
                    Seu locador é <b>Cristina Finzch</b>
                  </p>
                  <ContainerButtonAds>
                    <ButtonAds color={theme.colors.purple}>
                      Visualizar anúncio
                    </ButtonAds>
                    <ButtonAds color={theme.colors.purple}>
                      Editar anúncio
                    </ButtonAds>
                  </ContainerButtonAds>
                </AdsInformation>
              </ContainerAds>
              <ContainerAds>
                <ImageBox>
                  <HoveredImage>
                    <Eye />
                  </HoveredImage>
                  <img src="support-banner.svg" width="100%" height="100%" />
                </ImageBox>
                <AdsInformation>
                  <h1>Casa - 2 quarto disponível</h1>
                  <p>
                    Seu locador é <b>Cristina Finzch</b>
                  </p>
                  <ContainerButtonAds>
                    <ButtonAds color={theme.colors.purple}>
                      Visualizar anúncio
                    </ButtonAds>
                    <ButtonAds color={theme.colors.purple}>
                      Editar anúncio
                    </ButtonAds>
                  </ContainerButtonAds>
                </AdsInformation>
              </ContainerAds>
              <ContainerAds>
                <ImageBox>
                  <HoveredImage>
                    <Eye />
                  </HoveredImage>
                  <img src="support-banner.svg" width="100%" height="100%" />
                </ImageBox>
                <AdsInformation>
                  <h1>Casa - 3 quarto disponível</h1>
                  <p>
                    Seu locador é <b>Cristina Finzch</b>
                  </p>
                  <ContainerButtonAds>
                    <ButtonAds color={theme.colors.purple}>
                      Visualizar anúncio
                    </ButtonAds>
                    <ButtonAds color={theme.colors.purple}>
                      Editar anúncio
                    </ButtonAds>
                  </ContainerButtonAds>
                </AdsInformation>
              </ContainerAds>
            </Container>
          </ContainerColumn>
        </ContainerMyReservations>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};
export default MyAdsPage;
