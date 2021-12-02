import React, { useState } from 'react';
import Link from 'next/link';

import { useAuth } from '../../../hooks/useAuth';

import { Container, Divider } from './styles';

import { Download, Inbox, User } from 'react-feather';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { saveAs } from 'file-saver';

export const MenuDropdown = () => {
  const [theme, setTheme] = useState(true);

  const { signed, handleLogout } = useAuth();

  const getExportFile = async () => {
    const { data } = await api.get('/properties/txt');
    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'usuarios.txt');
    return toast.success('Arquivo gerado com sucesso!');
  };

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
        <a>
          <Download onClick={getExportFile} size={25} />
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
          {signed && (
            <>
              <li>
                <Link href="/Account/Information">
                  <a href="#">Conta</a>
                </Link>
              </li>
              <li>
                <Link href="/MyAds">
                  <a href="#">Meus anúncios</a>
                </Link>
              </li>
              <li>
                <Link href="/Favorites">
                  <a href="#">Favoritos</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/MyReservations">
                  <a href="#">Minhas reservas</a>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/Account/Notification">
                  <a href="#">Notificações</a>
                </Link>
              </li> */}
              <li>
                <Link href="/ResidenceRegister">
                  <a href="#">Hospedar</a>
                </Link>
              </li>
            </>
          )}
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
