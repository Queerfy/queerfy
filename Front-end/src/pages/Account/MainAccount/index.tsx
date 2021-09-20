import React from 'react';
import { NextPage } from 'next';
import { MainDiv } from './styles';
import { theme } from '../../../styles/theme';

export const MainPage: NextPage = () => {
  return (
    <>
      <MainDiv>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 0 32px 0',
          }}
        >
          <img style={{ width: '20px', margin: '32px 0 16px 0' }} src="returnPink.svg" alt="return" />
          <h1 style={{ width: '100%', fontSize: '28px', color: theme.colors.pink }}>Conta</h1>
          <h2 style={{ color: theme.colors.pink, fontSize: '20px' }}>Olá, Nicolas</h2>
        </div>
        <div style={{ margin: '0 0 32px 0' }}>
          <img src="./logo.svg" alt="logo" />
          <h2 style={{ color: theme.colors.red, fontSize: '18px' }}>Informações da conta ></h2>
          <h3 style={{ fontSize: '14px' }}>
            Detalhes pessoais e informações de contato
          </h3>
        </div>
        <div style={{ margin: '0 0 32px 0' }}>
          <img src="./logo.svg" alt="logo" />
          <h2 style={{ color: theme.colors.blue, fontSize: '18px' }}>Notificações ></h2>
          <h3 style={{ fontSize: '14px' }}>Preferências de notificação</h3>
        </div>
        <div>
          <img src="./logo.svg" alt="logo" />
          <h2 style={{ color: theme.colors.orange, fontSize: '18px' }}>Pagamentos ></h2>
          <h3 style={{ fontSize: '14px' }}>Revise pagamentos, Doações</h3>
        </div>
      </MainDiv>
    </>
  );
};
