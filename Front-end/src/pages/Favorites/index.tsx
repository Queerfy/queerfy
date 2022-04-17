import React, { useEffect, useState } from 'react';
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
} from '../../styles/favorites';

import { IconBack } from '../../styles/register';
import { Footer } from '../../components/Footer';

import { useRouter } from 'next/router';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/useAuth';
import { IUserData } from '../../interfaces';
import { toast } from 'react-toastify';
import ImageResidence from '../../components/ImageResidence';


const ResidenceDescribe = ({ idProperty }) => {
  interface IHouseData {
    propertyType: number;
    roomQuantity: number;
  }

  const [house, setHouse] = useState<IHouseData>();

  useEffect(() => {
    api.get(`/properties/${idProperty}`).then(res => {
      setHouse(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <>
      {house && (
        <p>{house?.propertyType} - {house?.roomQuantity} quartos disponivel</p>
      )}

    </>
  )
}

const Favorites: NextPage = () => {
  const { userApp } = useAuth();

  const [favoritesUser, setFavoritesUser] = useState([]);
  const [owner, setOwner] = useState<IUserData>();

  const router = useRouter();

  useEffect(() => {
    if (userApp) {
      api
        .get(`/users/${userApp.id}`)
        .then((response) => {
          if (response.data.favorite.length === 0) {
            toast.info("Nenhuma casa Favoritada")
            router.push('/')
          } else {
            setFavoritesUser(response.data.favorite);
          }

        })
        .catch((err) => {
          console.log(err);
          /* router.push('/'); */
        });
    }
  }, []);

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
          <TitleHeader>Minhas propriedades favoritas</TitleHeader>
        </HeaderBox>

        <CardsMain>
          {favoritesUser.map((item) => (
            <CardHouse onClick={() => router.push(`/House/${item.propertyId}`)}>
              <ImageCard>
                <ImageResidence idHouse={item.propertyId} />
              </ImageCard>
              <DescribeResidence>
                <ResidenceDescribe idProperty={item.propertyId} />
              </DescribeResidence>
            </CardHouse>
          ))}
        </CardsMain>
      </MainContainer>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default Favorites;
