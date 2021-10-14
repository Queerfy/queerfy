import React, { useState } from "react";
import Link from 'next/link';

import ReactSwitch from "react-switch";

import { Container, Divider } from "./styles";

import { Globe, Inbox, User } from "react-feather";

export const MenuDropdown = () => {
  const [theme, setTheme] = useState(true);
  const [authenticate, setAuthenticate] = useState(false);

  function handleTheme() {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }

  return (
    <Container>
      <li>
        <ReactSwitch
          checked={theme}
          onChange={() => {
            handleTheme();
          }}
          onColor="#F0BF5A"
          offColor="#A993F5"
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </li>
      <li><a href="#"><Globe size={25} /></a></li>
      <li><a href="#"><Inbox size={25} /></a></li>
      <li>
        <Link href="/Login">
          <User size={25} />
        </Link>
        <ul className="submenu">
          {!authenticate && (
            <>
              <li><a href="#">Entrar</a></li>
              <Divider />
            </>
          )}
          <li><a href="#">Notificações</a></li>
          <li><a href="#">Pagamentos</a></li>
          <li><a href="#">Ajuda</a></li>
          {authenticate && (
            <>
              <Divider />
              <li><a href="#">Sair</a></li>
            </>
          )}
        </ul>
      </li>
    </Container>
  );
}
