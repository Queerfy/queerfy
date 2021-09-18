import React from 'react';
import { NextPage } from 'next';
import { MainDiv } from './styles';
import { theme } from '../../../styles/theme';

export const AccountPage: NextPage = () => {
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
          <h1 style={{ width: '100px', color: theme.colors.pink }}><img style={{ width: '20px', color: theme.colors.pink }} src="returnPink.svg" alt="return" />Conta</h1>
          <h2 style={{ color: theme.colors.pink }}>Olá, Nicolas</h2>
        </div>
        <div style={{ margin: '0 0 32px 0' }}>
          <img src="./logo.svg" alt="logo" />
          <h2 style={{ color: theme.colors.red }}>Informações da conta ></h2>
          <h3 style={{ fontSize: '14px' }}>
            Detalhes pessoais e informações de contato
          </h3>
        </div>
        <div style={{ margin: '0 0 32px 0' }}>
          <img src="./logo.svg" alt="logo" />
          <h2 style={{ color: theme.colors.blue }}>Notificações ></h2>
          <h3 style={{ fontSize: '14px' }}>Preferências de notificação</h3>
        </div>
        <div>
          <img src="./logo.svg" alt="logo" />
          <h2 style={{ color: theme.colors.orange }}>Pagamentos ></h2>
          <h3 style={{ fontSize: '14px' }}>Revise pagamentos, Doações</h3>
        </div>
      </MainDiv>
    </>
  );
};
