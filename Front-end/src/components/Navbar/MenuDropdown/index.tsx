import React, { useState } from 'react';
import Link from 'next/link';

import { useAuth } from '../../../hooks/useAuth';

import ReactSwitch from 'react-switch';

import { Container, Divider } from './styles';

import { Globe, Inbox, User } from 'react-feather';

export const MenuDropdown = () => {
  const [theme, setTheme] = useState(true);

  const { signed, handleLogout } = useAuth();

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
      <li>
        <a href="#">
          <Globe size={25} />
        </a>
      </li>
      <li>
        <a href="#">
          <Inbox size={25} />
        </a>
      </li>
      <li>
        <User size={25} />
        <ul className="submenu">
          {!signed && (
            <>
              <Link href="/Login">
                <li>
                  <a>Entrar</a>
                </li>
              </Link>
              <Divider />
            </>
          )}
          <li>
            <Link href="/MyAds">
              <a href="#">Reservas</a>
            </Link>
          </li>
          <li>
            <Link href="/MyLikedResidences">
              <a href="#">Reservas favs</a>
            </Link>
          </li>
          <li>
            <Link href="/MyReservations">
              <a href="#">Meus anúncios</a>
            </Link>
          </li>
          <li>
            <Link href="/Account/Information">
              <a href="#">Informações</a>
            </Link>
          </li>
          <li>
            <Link href="/Account/Notification">
              <a href="#">Notificações</a>
            </Link>
          </li>
          <li>
            <a href="#">Ajuda</a>
          </li>
          {signed && (
            <>
              <Divider />
              <li>
                <a onClick={handleLogout}>Sair</a>
              </li>
            </>
          )}
        </ul>
      </li>
    </Container>
  );
};
