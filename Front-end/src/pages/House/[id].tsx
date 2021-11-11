import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

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

/* const socket = io('http://localhost:3333'); */

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

const House: NextPage = () => {
  const { userApp } = useAuth();
  const router = useRouter();

  const { id } = router.query;

  const [house, setHouse] = useState<IHouseData>();
  const [owner, setOwner] = useState();

  const handleChat = async () => {
    const { data } = await api.get(`/users/${house.idUser}`);

    const userReceiver = {
      name: data.name,
      email: data.email,
      rg: data.rg,
      cpf: data.cpf,
      password: data.password,
      perfilImg: data.perfilImg,
      descUser: data.descUser,
      genre: data.genre,
      likes: data.likes,
      birthDate: data.birthDate,
      admin: data.admin,
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

    const params = {
      userSender,
      userReceiver,
      house,
    };

    /* socket.emit('acess_to_chat', params); */
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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Description>
        </BoxInformations>

        <ChangeBox>
          <BoxReservation>
            <BorderRainbow>
              <Reservation>
                <HeaderReservation>
                  <Value>
                    <h1>R$60 / </h1>
                    <h2>diária</h2>
                  </Value>
                </HeaderReservation>

                <ChooseDate>
                  <CheckDate>
                    <p>Check-in</p>
                    <InputDate type="date" placeholder="dd/mm/aa" />
                  </CheckDate>

                  <CheckDate>
                    <p>Check-out</p>
                    <InputDate type="date" placeholder="dd/mm/aa" />
                  </CheckDate>
                </ChooseDate>

                <BoxInteraction>
                  <ButtonInteraction /* onClick={page finalizar reserva} */>
                    Reservar
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
                    src="https://github.com/CarolinaScudeler.png"
                    alt="Foto do perfil do host"
                  />
                  <h1>Hospedado por Carolina</h1>
                </ProfileHost>

                {house?.idUser != userApp?.id && (
                  <>
                    <Email>
                      <Mail />
                      <p>Tem interesse? Envie uma mensagem para o host!</p>
                    </Email>

                    <BoxInteraction>
                      <ButtonInteraction /* onClick={handleChat} */>
                        Fazer proposta
                      </ButtonInteraction>
                    </BoxInteraction>
                  </>
                )}
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
