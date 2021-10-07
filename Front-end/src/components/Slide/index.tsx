import React, { useEffect, useRef } from "react";
import { SlideContainer, SlideItem, SlidePanel, AdressBar, AdressItem } from "./styles";

export const Slide = () => {
  const refItems = useRef(null);

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
          <img src="slide-1.svg" alt="" />
        </SlideItem>
        <SlideItem>
          <img src="slide-1.svg" alt="" />
        </SlideItem>
        <SlideItem>
          <img src="slide-1.svg" alt="" />
        </SlideItem>
        <SlideItem>
          <img src="slide-1.svg" alt="" />
        </SlideItem>
      </SlidePanel>

      <AdressBar>
        <AdressItem>
          <h4>Localização</h4>
          <input placeholder="Onde você vai?" />
        </AdressItem>
        <AdressItem>
          <h4>Check-in</h4>
          <input placeholder="Quando?" />
        </AdressItem>
        <AdressItem>
          <h4>Check-out</h4>
          <input placeholder="Quando?" />
        </AdressItem>
        <AdressItem>
          <h4>Hóspedes</h4>
          <input placeholder="Quantos?" />
        </AdressItem>
      </AdressBar>
    </SlideContainer>
  );
}
