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
  InformationText,
} from './style';

import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';
import { IUserData } from '../../interfaces';
import { toast } from 'react-toastify';

const MyAdsPage: NextPage = () => {
  const { userApp, handleResidenceEdit } = useAuth();
  const [myAds, setMyAds] = useState([]);
  const [adsUndo, setAdsUndo] = useState([]);
  const [owner, setOwner] = useState<IUserData>();
  const router = useRouter();

  const handleUndo = async (id) => {
    api
      .get(`/properties/${id}`)
      .then((res) => {
        console.log(res.data);

        return toast.info('Impossivel relizar essa ação!');
      })
      .catch((err) => {
        api.get(`/properties/undo/${id}`).then((response) => {
          console.log(response.data);
          setAdsUndo(response.data);
          return toast.success('Ação desfeita com Sucesso!');
        });
      });
  };

  const handleDelete = async (id) => {
    await api.delete(`/properties/${id}`);
    const adsFilters = myAds.filter((item) => item.id != id);
  };

  const handleEdit = async (id) => {
    api
      .get(`/properties/${id}`)
      .then((res) => {
        handleResidenceEdit(true, id);
        setTimeout(() => {
          router.push('/ResidenceRegister');
        }, 1000);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          return toast.info('Desfaça a ação para editar esse anuncio');
        }
      });
  };

  const handleView = async (id) => {
    api
      .get(`/properties/${id}`)
      .then((res) => {
        router.push(`/House/${id}`);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          return toast.info('Desfaça a ação para ver esse anuncio');
        }
      });
  };

  useEffect(() => {
    if (userApp) {
      api.get('/properties').then((response) => {
        const adsUser = response.data.filter(
          (item) => item.idUser == userApp.id
        );

        if (adsUser.length > 0) {
          setMyAds(adsUser);
          api
            .get(`/users/${adsUser[0].idUser}`)
            .then((resOwner) => {
              setOwner(resOwner.data);
            })
            .catch((err) => {
              console.log(err);

              return toast.error('Erro ao listar meus anuncios!');
            });
        }
      });
    }
  }, [userApp, adsUndo]);

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
          <ButtonAds
            color={theme.colors.purple}
            onClick={() => {
              handleResidenceEdit(false, null);
              setTimeout(() => {
                router.push('/ResidenceRegister');
              }, 1000);
            }}
          >
            Adicionar residência
          </ButtonAds>
        </HeaderContainer>
        <ContainerMyReservations>
          <ContainerColumn>
            <Container subtitle={theme.colors.purple} text={theme.assets.font}>
              {myAds ? (
                <>
                  {myAds.map((item, index) => (
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
                          {index === 0 && (
                            <IconButton>
                              <CornerDownLeft
                                onClick={() =>
                                  index === 0 && handleUndo(item.id)
                                }
                              />
                            </IconButton>
                          )}
                          {index === 0 && (
                            <IconButton>
                              <Trash2 onClick={() => handleDelete(item.id)} />
                            </IconButton>
                          )}
                        </ContainerIcon>
                        <h1>
                          <InformationText>
                            {item?.propertyType}
                          </InformationText>
                          - {item?.roomQuantity}{' '}
                          {item?.roomQuantity > 1 ? 'quartos' : 'quarto'}{' '}
                          disponível
                        </h1>
                        <p>
                          Seu locador é <b>{owner?.name}</b>
                        </p>
                        <ContainerButtonAds>
                          <ButtonAds
                            color={theme.colors.purple}
                            onClick={() => handleView(item.id)}
                          >
                            Visualizar anúncio
                          </ButtonAds>
                          <ButtonAds
                            onClick={() => handleEdit(item.id)}
                            color={theme.colors.purple}
                          >
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
