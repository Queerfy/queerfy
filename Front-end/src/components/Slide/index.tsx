import React, { useEffect, useRef } from "react";
import { SlideContainer, SlideItem, SlidePanel } from "./styles";

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
    </SlideContainer>
  );
}
