import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/useAuth';

import { Container, Categories, RoomRow, CategorieItem } from './styles';

import { useRouter } from 'next/router';

import { Coffee, Droplet, Wifi } from 'react-feather';

import { Navbar } from '../../components/Navbar';
import { HeaderMobile } from '../../components/HeaderMobile';
import { NavbarMobile } from '../../components/NavbarMobile';
import { Residence } from '../../components/Residence';
import { Footer } from '../../components/Footer';

const ResidenceList: NextPage = () => {

  const { userApp } = useAuth();

  const [residences, setResidences] = useState([]);

  useEffect(() => {
    console.log(userApp);
    api
      .get('/properties')
      .then((response) => {
        setResidences(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>Queerfy | Residências</title>
      </Head>

      <Navbar />
      <HeaderMobile />
      <Container>
        <h1>Locações com as melhores avaliações em cidade</h1>
        <p>
          Os hóspedes concordam: estas acomodações foram muito bem avaliadas
          quanto a localização, limpeza e outros aspectos.
        </p>
        <RoomRow>
          {residences.map((item) => {
            return (
              item.likes > 1000 && (
                <Residence
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  trend={true}
                />
              )
            );
          })}
        </RoomRow>
      </Container>
      <Container>
        <h1>O que você gostaria de ter no local onde está procurando?</h1>
        <Categories>
          <CategorieItem>
            <Wifi />
            <span>Wi-Fi</span>
          </CategorieItem>
          <CategorieItem>
            <Coffee />
            <span>Cozinha</span>
          </CategorieItem>
          <CategorieItem>
            <Droplet />
            <span>Piscina</span>
          </CategorieItem>
          <CategorieItem>
            <img src="parking-icon.svg" alt="estacionamento" />
            <span>Garagem</span>
          </CategorieItem>
          <CategorieItem>
            <img src="paw.svg" alt="pata" />
            <span>Animais</span>
          </CategorieItem>
        </Categories>
      </Container>
      <Container>
        <h1>Outros aluguéis excelentes na área selecionada</h1>
        <RoomRow>
          {residences.map((item) => (
            <Residence
              key={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
        </RoomRow>
      </Container>
      <Footer />
      <NavbarMobile />
    </>
  );
};

export default ResidenceList;
