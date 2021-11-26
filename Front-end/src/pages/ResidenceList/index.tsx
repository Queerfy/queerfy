import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/useAuth';

import { Container, Categories, RoomRow, CategorieItem, Body } from './styles';

import { useRouter } from 'next/router';

import { Coffee, Droplet, Wifi } from 'react-feather';

import { Navbar } from '../../components/Navbar';
import { HeaderMobile } from '../../components/HeaderMobile';
import { NavbarMobile } from '../../components/NavbarMobile';
import { Residence } from '../../components/Residence';
import { Footer } from '../../components/Footer';
import moment from 'moment';

const ResidenceList: NextPage = () => {
  const { search, getLastSearch } = useAuth();

  const router = useRouter();

  const [residences, setResidences] = useState([]);

  useEffect(() => {
    getLastSearch();
  }, []);

  useEffect(() => {
    if (search.city && !search.checkIn && !search.checkOut) {
      const { city } = search;
      const citySearch = String(city)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/( )+/g, '-');

      api
        .get(`/properties/city/${citySearch}`)
        .then((response) => {
          setResidences(response.data);
        })
        .catch((err) => console.log(err));
    } else if (search.city && search.checkIn && search.checkOut) {
      const { city, checkIn, checkOut } = search;
      const citySearch = String(city)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/( )+/g, '-');

      ///leases/available?dataInicio=2021-05-10&dataFim=2021-05-20&city=sao-paulo
      api
        .get(`/leases/available/`, {
          params: {
            dataInicio: moment(checkIn, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            dataFim: moment(checkOut, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            city: citySearch,
          },
        })
        .then((response) => {
          setResidences(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [search]);

  return (
    <>
      <Head>
        <title>Queerfy | Residências</title>
      </Head>

      <Body>
        <Navbar />
        <HeaderMobile />
        {residences.filter((item) => item.likes > 1000).length > 0 && (
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
                    <a onClick={() => router.push(`/House/${item.id}`)}>
                      <Residence
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        trend={true}
                      />
                    </a>
                  )
                );
              })}
            </RoomRow>
          </Container>
        )}
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
              <img src="../parking-icon.svg" alt="estacionamento" />
              <span>Garagem</span>
            </CategorieItem>
            <CategorieItem>
              <img src="../cat-paw.svg" alt="pata" />
              <span>Animais</span>
            </CategorieItem>
          </Categories>
        </Container>
        <Container>
          <h1>Aluguéis excelentes na área selecionada</h1>
          <RoomRow>
            {residences.map((item) => (
              <a onClick={() => router.push(`/House/${item.id}`)}>
                <Residence
                  key={item.id}
                  name={item.name}
                  description={item.description}
                />
              </a>
            ))}
          </RoomRow>
        </Container>
        <Footer />
        <NavbarMobile />
      </Body>
    </>
  );
};

export default ResidenceList;
