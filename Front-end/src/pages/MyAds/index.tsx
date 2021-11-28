import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { ArrowLeft, Eye, CornerDownLeft, Trash2 } from 'react-feather';
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
  ContainerIcon,
  HeaderAds,
  IconButton,
} from './style';

import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';
import { IUserData } from '../../interfaces';

const MyAdsPage: NextPage = () => {
  const { userApp } = useAuth();
  const [myAds, setMyAds] = useState([]);
  const [owner, setOwner] = useState<IUserData>();
  const router = useRouter();

  const getMyAds = async () => {
    if (userApp) {
      api.get('/properties').then((response) => {
        const adsUser = response.data.filter(
          (item) => item.idUser == userApp.id
        );

        setMyAds(adsUser);
        api
          .get(`/users/${userApp.id}`)
          .then((resOwner) => {
            setOwner(resOwner.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  useEffect(() => {
    getMyAds();
  }, []);

  return (
    <>
      <Head>
        <title>Queerfy | Meus anúncios</title>
      </Head>
      <Navbar accountNavbar />
      <ContainerMain>
        <HeaderMobile />
        <HeaderContainer
          title={theme.colors.purple}
          text={theme.colors.purple}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <HeaderAds>
            <Link href="/">
              <ArrowLeft />
            </Link>
            <h1>Meus anúncios</h1>
          </HeaderAds>
          <Link href="/ResidenceRegister">
            <ButtonAds color={theme.colors.purple}>
              Adicionar residência
            </ButtonAds>
          </Link>
        </HeaderContainer>
        <ContainerMyReservations>
          <ContainerColumn>
            <Container subtitle={theme.colors.purple} text={theme.assets.font}>
              {myAds ? (
                <>
                  {myAds.map((item) => (
                    <ContainerAds>
                      <ImageBox>
                        <HoveredImage>
                          <Eye />
                        </HoveredImage>
                        <img
                          src="support-banner.svg"
                          width="100%"
                          height="100%"
                        />
                      </ImageBox>
                      <AdsInformation>
                        <ContainerIcon>
                          <IconButton>
                            <CornerDownLeft />
                          </IconButton>
                          <IconButton>
                            <Trash2 />
                          </IconButton>
                        </ContainerIcon>
                        <h1>
                          {item?.propertyType} - {item?.roomQuantity} quarto
                          disponível
                        </h1>
                        <p>
                          Seu locador é <b>{owner?.name}</b>
                        </p>
                        <ContainerButtonAds>
                          <ButtonAds
                            color={theme.colors.purple}
                            onClick={() => router.push(`/House/${item.id}`)}
                          >
                            Visualizar anúncio
                          </ButtonAds>
                          <ButtonAds color={theme.colors.purple}>
                            Editar anúncio
                          </ButtonAds>
                        </ContainerButtonAds>
                      </AdsInformation>
                    </ContainerAds>
                  ))}
                </>
              ) : (
                <span>Você ainda não contém anuncios!</span>
              )}
            </Container>
          </ContainerColumn>
        </ContainerMyReservations>
      </ContainerMain>
      <NavbarMobile />
    </>
  );
};
export default MyAdsPage;
