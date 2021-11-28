import React, { useEffect, useState } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';

import moment from 'moment';

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
  Rules,
  Description,
  ChangeBox,
  BoxReservation,
  BorderRainbow,
  Reservation,
  HeaderReservation,
  Value,
  Likes,
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

import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';
import { useRouter } from 'next/router';
import { HeaderMobile } from '../../components/HeaderMobile';

import {
  IHouseData,
  IUserData,
  IConfirmReservation,
  IFavorites,
} from '../../interfaces';

const House: NextPage = () => {
  const { userApp, handleUsersChatJoin, handleConfirmReservation } = useAuth();
  const router = useRouter();

  const { id } = router.query;

  const [house, setHouse] = useState<IHouseData>();
  const [owner, setOwner] = useState<IUserData>();
  const [checkInHouse, setCheckInHouse] = useState<string>('');
  const [checkOutHouse, setCheckOutHouse] = useState<string>('');
  const [total, setTotal] = useState<number>();
  const [disableButton, setDisableButton] = useState(false);
  const [differenceDays, setDifferenceDays] = useState<number>();
  const [totalLikes, setTotalLikes] = useState<number>();
  const [likedHouse, setLikedHouse] = useState(false);
  const [favoritesUser, setFavoritesUser] = useState<IFavorites[]>([]);
  const handleReservationConfirm = async () => {
    const confirmReservation: IConfirmReservation = {
      idHouse: house?.id,
      idOwer: house?.idUser,
      total,
      totalDays: differenceDays,
      checkIn: checkInHouse,
      checkOut: checkOutHouse,
    };

    if (checkInHouse === '' || checkOutHouse === '') {
      toast.error('Selecione uma data válida.');
      return;
    }

    handleConfirmReservation(confirmReservation);
    router.push('/Reservation');
  };

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

    router.push('/Chat');
  };

  const handleLikeHouse = () => {
    const houseLiked = favoritesUser.filter(
      (item) => item.propertyId == house.id
    );

    if (houseLiked.length > 0) {
      api.delete(`/favorites/${houseLiked[0].id}`);
      setLikedHouse(false);
      return toast.success('Propriedade desfavoritada com sucesso.');
    } else {
      const data = {
        propertyId: id,
        userId: userApp.id,
      };
      api.post('/favorites', data);
      setLikedHouse(true);
      return toast.success('Propriedade favoritada com sucesso.');
    }
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

            setFavoritesUser(userApp.favorite);

            const houseLiked = userApp.favorite.filter(
              (item) => item.propertyId == res.data.id
            );

            console.log(houseLiked);

            if (houseLiked.length > 0) {
              setLikedHouse(true);
            } else {
              setLikedHouse(false);
            }
          })
      })
  }, []);

  useEffect(() => {
    if (
      moment(checkOutHouse).isBefore(checkInHouse) ||
      moment(checkInHouse).isAfter(checkOutHouse)
    ) {
      toast.error('Selecione uma data válida.');
      setDisableButton(true);
      setTotal(0);
    } else {
      setDisableButton(false);
      const checkIn = moment(checkInHouse);
      const checkOut = moment(checkOutHouse);
      const differenceDays = checkOut.diff(checkIn, 'days');
      setDifferenceDays(differenceDays);
      setTotal(house?.dailyPrice * differenceDays);
    }
  }, [checkInHouse, checkOutHouse]);

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
            <span>SP - Alphaville</span>
          </Local>
          <Favorite onClick={handleLikeHouse}>
            <span>Amei</span>
            {likedHouse === false ? (
              <Heart />
            ) : (
              <Likes>
                <img src="../colorful-heart.svg" alt="Coração preenchido" />
              </Likes>
            )}
          </Favorite>
        </Subtitle>
      </Header>

      <img
        src="../img-casa.svg"
        width="100%"
        alt="Imagens da propriedade"
      />

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

          <Rules>
            <h2>Regras</h2>

            <AlignInformations>
              <AdditionalInformation />
              <AdditionalInformation />
            </AlignInformations>

            <AlignInformations>
              <AdditionalInformation />
              <AdditionalInformation />
            </AlignInformations>
          </Rules>

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
                  <Likes>
                    <img src="../colorful-heart.svg" alt="Coração preenchido" />
                    <span>246</span>
                  </Likes>
                </HeaderReservation>

                <ChooseDate>
                  <CheckDate>
                    <span>Check-in</span>
                    <InputDate
                      type="date"
                      placeholder="dd/mm/aa"
                      value={checkInHouse}
                      onChange={(e) => setCheckInHouse(e.target.value)}
                    />
                  </CheckDate>

                  <CheckDate>
                    <span>Check-out</span>
                    <InputDate
                      type="date"
                      placeholder="dd/mm/aa"
                      value={checkOutHouse}
                      onChange={(e) => setCheckOutHouse(e.target.value)}
                    />
                  </CheckDate>
                </ChooseDate>

                <BoxInteraction>
                  <ButtonInteraction
                    disabled={disableButton}
                    onClick={handleReservationConfirm}
                  >
                    Finalizar reserva
                  </ButtonInteraction>
                </BoxInteraction>

                <BoxTotalValue>
                  <Line />
                  <TotalValue>
                    <h2>Total</h2>
                    <span>R${!isNaN(total) ? total.toFixed(2) : 0}</span>
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
                  <span>Tem interesse? <br />Envie uma mensagem para o host!</span>
                </Email>

                <BoxInteraction>
                  <ButtonInteraction
                    style={{ width: '60%' }}
                    onClick={handleChat}
                  /* disabled={house?.idUser != userApp?.id} */
                  >
                    Conversar
                  </ButtonInteraction>
                </BoxInteraction>
              </Host>
            </BorderHost>
          </BoxHost>
        </ChangeBox>
      </BoxContents>
      <Footer />
      <NavbarMobile />
      <ToastContainer />
    </>
  );
};

export default House;
