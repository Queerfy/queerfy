import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Navbar } from '../../components/Navbar';
import { HeaderMobile } from '../../components/HeaderMobile';
import { Footer } from '../../components/Footer';
import { NavbarMobile } from '../../components/NavbarMobile';

import Link from 'next/link';

import {
  Header,
  BoxContent,
  TitleContent,
  Content,
  BoxTeam,
  Team,
  TeamMember,
  Developers,
  Business,
  BoxContact,
  ButtonContact,
} from './styles';

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy | Sobre nós</title>
      </Head>

      <Navbar />
      <HeaderMobile />

      <Header>
        <h1>Sobre a Queerfy</h1>
        <img src="../working-office.svg" alt="Imagem ilustrativa" />
        <h2>2021</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit id
          consectetur ut deleniti laudantium earum autem voluptates omnis
          voluptatem animi aut ex error eveniet, suscipit, minus similique
          exercitationem et natus.
        </p>
      </Header>

      <BoxContent>
        <TitleContent>Nosso produto</TitleContent>
        <Content>
          <img src="../home-queerfy.png" alt="Home da Queerfy" />
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            dolores veritatis nam? Sapiente libero inventore tempore, dolorum
            eum modi voluptatem? Dicta fugit ea provident adipisci obcaecati
            quaerat eius illum corporis!Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Laborum dolores veritatis nam? Sapiente libero
            inventore tempore, dolorum eum modi voluptatem? Dicta fugit ea
            provident adipisci obcaecati quaerat eius illum corporis!
          </span>
        </Content>
      </BoxContent>

      <BoxTeam>
        <Team>
          <h1>Equipe da Queerfy</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde minus
            dignissimos quia. Fuga dolore vitae illum provident necessitatibus
            sed, modi voluptatum natus, id ab placeat sapiente, repellat dolores
            iure obcaecati.
          </p>
        </Team>
        <TeamMember>
          <Developers>
            <h2>Desenvolvedores</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
              quia tenetur esse illum aliquam minus doloremque sed sapiente
              assumenda molestias quis nesciunt minima? Hic maxime, dolor iure
              adipisci assumenda repellendus.
            </p>
          </Developers>
          <Business>
            <h2>Negócios</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
              quia tenetur esse illum aliquam minus doloremque sed sapiente
              assumenda molestias quis nesciunt minima? Hic maxime, dolor iure
              adipisci assumenda repellendus.
            </p>
          </Business>
        </TeamMember>
      </BoxTeam>

      <BoxContact>
        <Link href="/Support">
          <ButtonContact>Entre em contato</ButtonContact>
        </Link>
      </BoxContact>

      <Footer />
      <NavbarMobile />
    </>
  );
};

export default AboutUs;
