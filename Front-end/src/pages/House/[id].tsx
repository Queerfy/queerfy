import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { NextPage } from 'next';
import Head from 'next/head';

import io from 'socket.io-client';

import { Heart, MapPin, Mail } from 'react-feather';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { NavbarMobile } from '../../components/NavbarMobile';
import { AdditionalInformation } from '../../components/AdditionalInformation';

import {
  Header,
  Subtitle,
  Local,
  Favorite,
  BoxContents,
  BoxInformations,
  Informations,
  AlignInformations,
  Description,
  ChangeBox,
  BoxReservation,
  BorderRainbow,
  Reservation,
  HeaderReservation,
  Value,
  ChooseDate,
  CheckDate,
  InputDate,
  BoxInteraction,
  ButtonInteraction,
  BoxTotalValue,
  Line,
  TotalValue,
  BoxHost,
  BorderHost,
  Host,
  ProfileHost,
  Email,
} from './styles';

import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { HeaderMobile } from '../../components/HeaderMobile';

interface IHouseData {
  id: number;
  name: string;
  houseImg: string;
  active: boolean;
  dailyPrice: number;
  filterDate: string;
  checkIn: string;
  checkOut: string;
  latitude: number;
  longitude: number;
  idUser: number;
  description: string;
  likes: number;
}
interface IUserData {
  name: string;
  email: string;
  rg: string;
  cpf: string;
  password: string;
  perfilImg: string;
  descUser: string;
  genre: string;
  likes: string;
  birthDate: string;
  admin: boolean;
}

const House: NextPage = () => {
  const { userApp, handleUsersChatJoin } = useAuth();
  const router = useRouter();

  const { id } = router.query;

  const [house, setHouse] = useState<IHouseData>();
  const [owner, setOwner] = useState<IUserData>();

  const handleChat = async () => {
    const userReceiver = {
      name: owner.name,
      email: owner.email,
      rg: owner.rg,
      cpf: owner.cpf,
      password: owner.password,
      perfilImg: owner.perfilImg,
      descUser: owner.descUser,
      genre: owner.genre,
      likes: owner.likes,
      birthDate: owner.birthDate,
      admin: owner.admin,
    };

    const userSender = {
      name: userApp.name,
      email: userApp.email,
      rg: userApp.rg,
      cpf: userApp.cpf,
      password: userApp.password,
      perfilImg: userApp.perfilImg,
      descUser: userApp.descUser,
      genre: userApp.genre,
      likes: userApp.likes,
      birthDate: userApp.birthDate,
      admin: userApp.admin,
    };

    const usersJoined = {
      userSender,
      userReceiver,
    };

    handleUsersChatJoin(usersJoined);

    setTimeout(() => {
      router.push('/Chat');
    }, 1000);
  };

  useEffect(() => {
    api
      .get(`/properties/${id}`)
      .then((res) => {
        setHouse(res.data);
        api
          .get(`/users/${res.data.idUser}`)
          .then((resOwner) => {
            setOwner(resOwner.data);
          })
          .catch((err) => {
            router.push('/ResidenceList');
          });
      })
      .catch((err) => {
        router.push('/ResidenceList');
      });
  }, []);

  useEffect(() => {
    //Escutar e pegar as mesagens do callback do socket e notificar(dentro da pagina mesmo)
  }, [owner]);

  return (
    <>
      <Head>
        <title>Queerfy | {house?.name}</title>
      </Head>

      <Navbar />
      <HeaderMobile />

      <Header>
        <h1>{house?.name}</h1>
        <Subtitle>
          <Local>
            <MapPin />
            <p>SP - Alphaville</p>
          </Local>
          <Favorite>
            <p>Amei</p>
            <Heart />
          </Favorite>
        </Subtitle>
      </Header>

      <img src="../img-casa.svg" width="100%" height="100%" />

      <BoxContents>
        <BoxInformations>
          <Informations>
            <h2>Características do local</h2>

            <AlignInformations>
              <AdditionalInformation />
              <AdditionalInformation />
            </AlignInformations>

            <AlignInformations>
              <AdditionalInformation />
              <AdditionalInformation />
            </AlignInformations>
          </Informations>

          <Informations>
            <h2>Regras</h2>

            <AlignInformations>
              <AdditionalInformation />
              <AdditionalInformation />
            </AlignInformations>

            <AlignInformations>
              <AdditionalInformation />
              <AdditionalInformation />
            </AlignInformations>
          </Informations>

          <Description>
            <h2>Descrição</h2>
            <p>{house?.description}</p>
          </Description>
        </BoxInformations>

        <ChangeBox>
          <BoxReservation>
            <BorderRainbow>
              <Reservation>
                <HeaderReservation>
                  <Value>
                    <h1>R${house?.dailyPrice.toFixed(0)} / </h1>
                    <h2>diária</h2>
                  </Value>
                </HeaderReservation>

                <ChooseDate>
                  <CheckDate>
                    <p>Check-in</p>
                    <InputDate
                      type="date"
                      placeholder="dd/mm/aa"
                      value={house?.checkIn}
                    />
                  </CheckDate>

                  <CheckDate>
                    <p>Check-out</p>
                    <InputDate
                      type="date"
                      placeholder="dd/mm/aa"
                      value={house?.checkOut}
                    />
                  </CheckDate>
                </ChooseDate>

                <BoxInteraction>
                  <ButtonInteraction /* onClick={page finalizar reserva} */>
                    Finalizar reserva
                  </ButtonInteraction>
                </BoxInteraction>

                <BoxTotalValue>
                  <Line />
                  <TotalValue>
                    <h2>Total</h2>
                    <p>R${}</p>
                  </TotalValue>
                </BoxTotalValue>
              </Reservation>
            </BorderRainbow>
          </BoxReservation>

          <BoxHost>
            <BorderHost>
              <Host>
                <ProfileHost>
                  <img
                    src={
                      owner?.perfilImg == null
                        ? 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry.png'
                        : owner?.perfilImg
                    }
                    alt="Foto do perfil do host"
                  />
                  <h1>Hospedado por {owner?.name}</h1>
                </ProfileHost>

                <Email>
                  <Mail />
                  <p>Tem interesse? Envie uma mensagem para o host!</p>
                </Email>

                <BoxInteraction>
                  <ButtonInteraction
                    style={{ width: '60%' }}
                    /* disabled={house?.idUser != userApp?.id} */
                    onClick={handleChat}
                  >
                    Fazer proposta
                  </ButtonInteraction>
                </BoxInteraction>
              </Host>
            </BorderHost>
          </BoxHost>
        </ChangeBox>
      </BoxContents>
      <Footer />
      <NavbarMobile />
    </>
  );
};

export default House;
