import React from "react";

import { CityInfo, Container, ItemImage } from "./styles";

interface NearbyPlacesProps {
  title: string;
  hours: number;
  image: string;
}

export const NearbyPlaces = (props: NearbyPlacesProps) => {
  return (
    <Container>
      <ItemImage background={props.image} />
      <CityInfo>
        <h3>{props.title}</h3>
        <p>
          {props.hours}
          {props.hours <= 1 ? " hora " : " horas "}
          de distância.
        </p>
      </CityInfo>
    </Container>
  );
}
