import React from "react";
import Link from 'next/link';

import { GeneralButton } from "../../GeneralButton";
import { NewsletterInput } from "../../NewsletterInput";

import {
  BackgroundImage,
  BannerContent,
  BannerFade,
  InputBox,
  MobileInputBox,
} from "./style";

interface BannerProps {
  title: string;
  titleColor?: string;
  description: string;
  descriptionColor?: string;
  buttonLabel?: string;
  buttonColor?: string;
  backgroundImg: string;
  newsletter?: boolean;
  pageLink?: string;
}

export const Banner = (props: BannerProps) => {
  return (
    <BackgroundImage background={props.backgroundImg}>
      <BannerFade>
        <BannerContent>
          <h1 style={{ color: props.titleColor }}>{props.title}</h1>
          <p style={{ color: props.descriptionColor }}>{props.description}</p>
          {props.newsletter ? (
            <MobileInputBox>
              <NewsletterInput />
            </MobileInputBox>
          ) : (
            <Link href={`${props.pageLink}`}>
              <GeneralButton
                text={props.buttonLabel}
                bgColor={props.buttonColor}
              />
            </Link>
          )}
        </BannerContent>
        {props.newsletter && (
          <InputBox>
            <h1>Informe seu e-mail</h1>
            <NewsletterInput />
          </InputBox>
        )}
      </BannerFade>
    </BackgroundImage>
  );
}
