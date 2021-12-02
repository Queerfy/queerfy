import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import Input from '../Form/input';

import {
  SlideContainer,
  SlideItem,
  SlidePanel,
  AdressBar,
  AdressItem,
} from './styles';
import { Send } from 'react-feather';
import { useAuth } from '../../hooks/useAuth';

export const Slide = () => {
  const { handleSearch } = useAuth();

  const router = useRouter();
  const refItems = useRef(null);

  const handleSubmit = (data) => {
    handleSearch(data);
    router.push(`/ResidenceList`);
  };

  useEffect(() => {
    if (refItems.current) {
      setInterval(() => {
        refItems?.current?.scrollBy(300, 0);
        if (refItems?.current?.scrollLeft == 7700) {
          refItems?.current?.scrollTo(0, 0);
        }
      }, 5000);
    }
  });

  return (
    <SlideContainer>
      <SlidePanel ref={refItems}>
        <SlideItem>
          <img src="house.jpg" alt="" />
        </SlideItem>
        <SlideItem>
          <img src="house.jpg" alt="" />
        </SlideItem>
        <SlideItem>
          <img src="house.jpg" alt="" />
        </SlideItem>
        <SlideItem>
          <img src="house.jpg" alt="" />
        </SlideItem>
      </SlidePanel>

      <AdressBar onSubmit={handleSubmit}>
        <AdressItem>
          <h4>Localização</h4>
          <Input type="text" name="city" placeholder="Onde você vai?" />
        </AdressItem>
        <AdressItem>
          <h4>Check-in</h4>
          <Input type="text" name="checkIn" placeholder="Quando?" />
        </AdressItem>
        <AdressItem>
          <h4>Check-out</h4>
          <Input type="text" name="checkOut" placeholder="Quando?" />
        </AdressItem>
        <AdressItem>
          <h4>Hóspedes</h4>
          <Input type="text" name="guestsQuantity" placeholder="Quantos?" />
        </AdressItem>
        <button type="submit">
          <Send />
        </button>
      </AdressBar>
    </SlideContainer>
  );
};
