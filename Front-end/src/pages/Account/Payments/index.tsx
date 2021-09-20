import React from 'react';
import { NextPage } from 'next';
import { MainDiv } from '../MainAccount/styles';
import { theme } from '../../../styles/theme';
import { InputBox } from './styles';

export const PaymentsPage: NextPage = () => {
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
          <img style={{ width: '20px', margin: '32px 0 16px 0' }} src="returnOrange.svg" alt="return" />
          <h1 style={{ width: '100%', fontSize: '28px', color: theme.colors.orange }}>Pagamentos</h1>
          <h2 style={{ color: theme.colors.orange, fontSize: '20px' }}>Olá, Nicolas</h2>
        </div>
        <InputBox>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%'}}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
            <h3 style={{ color: theme.assets.font, fontSize: '14px' }}>Cartão de Credito</h3>
            <img style={{ width: '60px' }} src="Visa.svg" alt="return" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <h1 style={{ color: theme.assets.font, fontSize: '28px' }}>1283 9832 3929 3209</h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
              <h3 style={{ color: theme.assets.font, fontSize: '14px' }}>Nome do cartão</h3>
              <h3 style={{ color: theme.assets.font, fontSize: '12px' }}>Jeferson SIlva</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
              <h3 style={{ color: theme.assets.font, fontSize: '14px' }}>Data</h3>
              <h3 style={{ color: theme.assets.font, fontSize: '12px' }}>12/27</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
              <h3 style={{ color: theme.assets.font, fontSize: '14px' }}>CVV</h3>
              <h3 style={{ color: theme.assets.font, fontSize: '12px' }}>***</h3>
            </div>
          </div>
        </div>
        </InputBox>
        <InputBox>
        </InputBox>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ display: 'flex', border: 'none', borderRadius: '5px', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', width: '60%', height: '40px', backgroundColor: theme.colors.orange,  }}>
            + ADICIONAR NOVO CARTÃO
          </button>
        </div>
        </MainDiv>
        </>
    )
};