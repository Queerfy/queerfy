import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { ArrowLeft, Eye, CornerDownLeft, Trash2, Home } from 'react-feather';
import { Navbar } from '../../components/Navbar';
import { NavbarMobile } from '../../components/NavbarMobile';
import { ContainerMain, HeaderContainer } from '../../styles/account';
import { ContainerColumn } from '../../styles/information';
import { HeaderMobile } from '../../components/HeaderMobile';
import { theme } from '../../styles/theme';
import { HoveredImage, ImageBox } from '../../components/Residence/styles';
import { Container, ContainerMyReservations } from '../../styles/myReservations';
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
} from '../../styles/myAds';

import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';
import { IUserData } from '../../interfaces';
import { toast } from 'react-toastify';
import ImageResidence from '../../components/ImageResidence';

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
        return toast.info('Impossivel relizar essa ação!');
      })
      .catch((err) => {
        api.get(`/properties/undo/${id}`).then((response) => {
          setAdsUndo(response.data);
          return toast.success('Ação desfeita com Sucesso!');
        });
      });
  };

  const handleDelete = async (id) => {
    await api
      .delete(`/properties/${id}`)
      .then((res) => {
        toast.success(
          'Anúncio deletado com sucesso, possibilidade de desfazer essa ação!'
        );
      })
      .catch((err) => {
        console.log(err);
        return toast.error('Erro ao fazer essa ação');
      });

    //const adsFilters = myAds.filter((item) => item.id != id);
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
      setMyAds([]);
      api
        .get('/properties')
        .then((response) => {
          const adsUser = response.data.filter(
            (item) => item.idUser == userApp.id
          );

          if (adsUser.length > 0) {
            let sortAds = adsUser.sort((a, b) => a.id + b.id).reverse();
            setMyAds(sortAds);
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
        })
        .catch((err) => {
          return toast.info('Nenhum anuncio cadastrado');
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
                        <Home size={200} />
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
