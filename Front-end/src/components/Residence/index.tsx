import React from "react";
import { Eye, MapPin } from "react-feather";

import { Container, HoveredImage, ImageBox } from "./styles";

interface ResidenceProps {
  title?: string;
  location?: {
    neighborhood?: string;
    city?: string;
  }
  trend?: boolean;
  description?: string;
  children?: string;
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
      <h4>Casa - 1 quarto disponível</h4>
      <span><MapPin /> SP - Alphaville</span>

      {props.trend && (
        <p>{props.children}</p>
      )}
    </Container>
  );
}
