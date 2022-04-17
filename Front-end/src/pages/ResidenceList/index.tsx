import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/useAuth';

import { Container, Categories, RoomRow, CategorieItem, Body } from '../../styles/residenceList';

import { useRouter } from 'next/router';

import { Coffee, Droplet, Wifi } from 'react-feather';

import { Navbar } from '../../components/Navbar';
import { HeaderMobile } from '../../components/HeaderMobile';
import { NavbarMobile } from '../../components/NavbarMobile';
import { Residence } from '../../components/Residence';
import { Footer } from '../../components/Footer';
import moment from 'moment';
import { toast } from 'react-toastify';

const ResidenceList: NextPage = () => {
  const { search, getLastSearch } = useAuth();

  const router = useRouter();

  const [residences, setResidences] = useState([]);
  const [filters, setFilters] = useState([]);

  const handleFiltersHouse = (type: string) => {
    const filter = residences
      ? residences.filter((item) => item[`${type}`] === true)
      : filters.filter((item) => item[`${type}`] === true);
    if (filter.length === 0) {
      return toast.info('Nenhum filtro encontrado!');
    }
    setFilters(filter);
    setResidences(null);
  };

  useEffect(() => {
    getLastSearch();
  }, []);

  useEffect(() => {
    const storagedSearch = JSON.parse(localStorage.getItem('lastSearch'));
    if (
      storagedSearch.city &&
      !storagedSearch.checkIn &&
      !storagedSearch.checkOut
    ) {
      const { city } = storagedSearch;
      const citySearch = String(city)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/( )+/g, '-');

      api
        .get(`/properties/city/${citySearch}`)
        .then((response) => {
          setResidences(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          toast.info('Nenhuma casa encontrada!');
          setTimeout(() => {
            router.push('/');
          }, 1000);
        });
    } else if (
      storagedSearch.city &&
      storagedSearch.checkIn &&
      storagedSearch.checkOut
    ) {
      const { city, checkIn, checkOut } = storagedSearch;
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
          setFilters(null);
        })
        .catch((err) => {
          toast.info('Nenhuma casa encontrada!');
          setTimeout(() => {
            router.push('/');
          }, 1000);
        });
    } else if (storagedSearch.filterSpace) {
      api
        .get(`/properties/space/${storagedSearch.filterSpace}`)
        .then((res) => {
          setResidences(res.data);
        })
        .catch((err) => {
          toast.info('Nenhuma casa encontrada!');
          setTimeout(() => {
            router.push('/');
          }, 1000);
          console.log(err);
        });
    }
  }, [search]);

  return (
    <>
      <Head>
        <title>Queerfy | Residências</title>
      </Head>

      <Navbar />
      <Body>
        <HeaderMobile />
        {residences?.filter((item) => item.likes > 1000).length > 0 ||
          (filters?.filter((item) => item.likes > 1000).length > 0 && (
            <Container>
              <h1>Locações com as melhores avaliações em cidade</h1>
              <p>
                Os hóspedes concordam: estas acomodações foram muito bem
                avaliadas quanto a localização, limpeza e outros aspectos.
              </p>
              <RoomRow>
                <>
                  {residences?.map((item) => {
                    return (
                      item.likes > 1000 && (
                        <a onClick={() => {
                          setTimeout(() => {
                            router.push(`/House/${item.id}`)
                          }, 1000)
                        }}>
                          <Residence
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            uf={item.uf}
                            trend={true}
                          />
                        </a>
                      )
                    );
                  })}
                </>
                <>
                  {filters?.map((item) => {
                    return (
                      item.likes > 1000 && (
                        <a onClick={() => {
                          setTimeout(() => {
                            router.push(`/House/${item.id}`)
                          }, 1000)
                        }}>
                          <Residence
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            uf={item.uf}
                            trend={true}
                          />
                        </a>
                      )
                    );
                  })}
                </>
              </RoomRow>
            </Container>
          ))}
        <Container>
          <h1>O que você gostaria de ter no local onde está procurando?</h1>
          <Categories>
            <CategorieItem onClick={() => handleFiltersHouse('haveWifi')}>
              <Wifi />
              <span>Wi-Fi</span>
            </CategorieItem>
            <CategorieItem onClick={() => handleFiltersHouse('haveKitchen')}>
              <Coffee />
              <span>Cozinha</span>
            </CategorieItem>
            <CategorieItem onClick={() => handleFiltersHouse('haveSuite')}>
              <Droplet />
              <span>Piscina</span>
            </CategorieItem>
            <CategorieItem onClick={() => handleFiltersHouse('haveGarage')}>
              <img src="../parking-icon.svg" alt="estacionamento" />
              <span>Garagem</span>
            </CategorieItem>
            <CategorieItem onClick={() => handleFiltersHouse('haveAnimals')}>
              <img src="../cat-paw.svg" alt="pata" />
              <span>Animais</span>
            </CategorieItem>
          </Categories>
        </Container>
        <Container>
          <h1>Aluguéis excelentes na área selecionada</h1>
          <RoomRow>
            {residences && (
              <>
                {residences.map((item) => (
                  <a onClick={() => router.push(`/House/${item.id}`)}>
                    <Residence
                      id={item.id}
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      uf={item.uf}
                    />
                  </a>
                ))}
              </>
            )}
            {filters && (
              <>
                {filters.map((item) => (
                  <a onClick={() => router.push(`/House/${item.id}`)}>
                    <Residence
                      id={item.id}
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      uf={item.uf}
                    />
                  </a>
                ))}
              </>
            )}
          </RoomRow>
        </Container>
        <Footer />
        <NavbarMobile />
      </Body>
    </>
  );
};

export default ResidenceList;
