import React from "react";

import { Send } from "react-feather";

import { GeneralButton } from "../../GeneralButton";
import { NewsletterInput } from "../../NewsletterInput";

import {
  BackgroundImage,
  BannerContent,
  BannerFade,
} from "./style";

interface BannerProps {
  title: string;
  titleColor?: string;
  description: string;
  descriptionColor?: string;
  buttonLabel?: string;
  buttonColor?: string;
  backgroundImg: string;
}

export const Banner = (props: BannerProps) => {
  return (
    <BackgroundImage background={props.backgroundImg}>
      <BannerFade>
        <BannerContent>
          <h1 style={{ color: props.titleColor }}>{props.title}</h1>
          <p style={{ color: props.descriptionColor }}>{props.description}</p>
          <GeneralButton
            text={props.buttonLabel}
            bgColor={props.buttonColor}
          />
          <NewsletterInput />
        </BannerContent>
      </BannerFade>
    </BackgroundImage>
  );
}
