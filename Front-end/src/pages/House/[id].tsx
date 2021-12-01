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

import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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
  Container,
  Body,
  SlideContainer,
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
  const {
    userApp,
    handleUsersChatJoin,
    handleConfirmReservation,
    handleFavorites,
  } = useAuth();
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
  const [disableDays, setDisableDays] = useState([]);
  const [houseImages, setHouseImages] = useState([]);

  const handleReservationConfirm = async () => {
    if ((userApp?.id === house?.idUser) == false) {
      const confirmReservation: IConfirmReservation = {
        idHouse: house?.id,
        idOwer: userApp.id,
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
    } else {
      toast.info('Você não pode acessar essa página.');
    }
  };

  const handleChat = async () => {
    if ((userApp?.id === house?.idUser) == false) {
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
    } else {
      toast.info('Você não pode acessar essa página.');
    }
  };

  const handleLikeHouse = async () => {
    if ((userApp?.id === house?.idUser) == false) {
      const houseLiked = userApp.favorite.filter(
        (item) => item.propertyId == id
      );

      if (houseLiked.length > 0) {
        await api.delete(`/favorites/${houseLiked[0].id}`);
        const data = {
          propertyId: id,
          userId: userApp.id,
        };
        handleFavorites(data);
        setLikedHouse(false);
      } else {
        const data = {
          propertyId: id,
          userId: userApp.id,
        };
        await api.post('/favorites', data);
        handleFavorites(data);
        setLikedHouse(true);
      }
    }
  };

  const getDisableDays = async () => {
    try {
      const { data } = await api.get(`/leases/dates/${house.id}`);
      setDisableDays(data);
    } catch (error) {
      setDisableDays([]);
    }
  };

  const getImages = async () => {
    let images = [];
    for (let i = 0; i < 5; i++) {
      const { data, headers } = await api.get(
        `/properties/image${i + 1}/${house.id}`,
        {
          responseType: 'arraybuffer',
        }
      );

      if (data.byteLength > 0) {
        let image = btoa(
          new Uint8Array(data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        images.push(
          `data:${headers['content-type'].toLowerCase()};base64,${image}`
        );
      }
    }

    if (images.length > 0) {
      setHouseImages(images);
    } else {
      setHouseImages([
        {
          url: '../img-casa.svg',
          caption: 'Slide 1',
        },
        {
          url: '../img-casa.svg',
          caption: 'Slide 2',
        },
        {
          url: '../img-casa.svg',
          caption: 'Slide 3',
        },
      ]);
    }
  };

  useEffect(() => {
    api.get(`/properties/${id}`).then((res) => {
      setHouse(res.data);
      api.get(`/users/${res.data.idUser}`).then((resOwner) => {
        setOwner(resOwner.data);

        if (userApp) {
          const houseLiked = userApp.favorite.filter(
            (item) => item.propertyId == id
          );

          if (houseLiked.length > 0) {
            setLikedHouse(true);
          } else {
            setLikedHouse(false);
          }
        } else {
          setLikedHouse(false);
        }
      });
    });
  }, []);

  useEffect(() => {
    if (house) {
      getDisableDays();
      getImages();
    }
  }, [house]);

  useEffect(() => {
    if (
      moment(checkInHouse).isBefore() ||
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

      <SlideContainer>
        <Slide autoplay={false}>
          {houseImages?.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <img src={slideImage} style={{ width: '100%' }} />
            </div>
          ))}
        </Slide>
      </SlideContainer>

      <BoxContents>
        <BoxInformations>
          <Informations>
            <h2>Características do local</h2>
            <AlignInformations>
              {house?.haveWifi && <AdditionalInformation type={'Wi-Fi'} />}
              {house?.haveAnimals && <AdditionalInformation type={'Animais'} />}
              {house?.haveSuite && <AdditionalInformation type={'Piscina'} />}
              {house?.haveKitchen && <AdditionalInformation type={'Cozinha'} />}
              {house?.haveGarage && <AdditionalInformation type={'Garagem'} />}
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
                  <Likes>
                    <img src="../colorful-heart.svg" alt="Coração preenchido" />
                  </Likes>
                </HeaderReservation>

                <ChooseDate>
                  <CheckDate>
                    <span>Check-in</span>
                    <DayPickerInput
                      formatDate={(day) => moment(day).format('DD/MM/YYYY')}
                      placeholder={`${moment(new Date()).format('DD/MM/YYYY')}`}
                      onDayChange={(day) =>
                        setCheckInHouse(moment(day).format('YYYY-MM-DD'))
                      }
                      dayPickerProps={{
                        disabledDays: disableDays,
                      }}
                    />
                  </CheckDate>

                  <CheckDate>
                    <span>Check-out</span>
                    <DayPickerInput
                      formatDate={(day) => moment(day).format('DD/MM/YYYY')}
                      placeholder={`${moment(new Date()).format('DD/MM/YYYY')}`}
                      onDayChange={(day) =>
                        setCheckOutHouse(moment(day).format('YYYY-MM-DD'))
                      }
                      dayPickerProps={{
                        disabledDays: disableDays,
                      }}
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
                  <span>
                    Tem interesse? <br />
                    Envie uma mensagem para o host!
                  </span>
                </Email>

                <BoxInteraction>
                  <ButtonInteraction
                    style={{ width: '60%' }}
                    onClick={handleChat}
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
