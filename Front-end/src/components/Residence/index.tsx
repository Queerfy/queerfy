import React from "react";
import { Eye, MapPin } from "react-feather";

import { Container, HoveredImage, ImageBox } from "./styles";

interface ResidenceProps {
  name?: string;
  location?: {
    neighborhood?: string;
    city?: string;
  }
  trend?: boolean;
  description?: string;
}

export const Residence = (props: ResidenceProps) => {
  return (
    <Container>
      <ImageBox>
        <HoveredImage>
          <Eye />
        </HoveredImage>
        <img src="support-banner.svg" alt="residence" />
      </ImageBox>
      <h4>{props.name}</h4>
      <span><MapPin /> SP - Alphaville</span>

      {props.trend && (
        <p>{props.description}</p>
      )}
    </Container>
  );
}
