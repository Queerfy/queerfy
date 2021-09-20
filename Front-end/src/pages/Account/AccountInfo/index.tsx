import React from 'react';

import { NextPage } from 'next';
import { theme } from '../../../styles/theme';
import { MainDiv } from '../MainAccount/styles';

export const InfoAccount: NextPage = () => {
    return(
        <>
            <MainDiv >
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 0 32px 0',
                }}
                >
                <img style={{ width: '20px', margin: '32px 0 16px 0' }} src="returnRed.svg" alt="return" />
                <h1 style={{ width: '100%', fontSize: '28px' , color: theme.colors.red }}>Informações da conta</h1>
                </div>
                <h2 style={{ color: theme.colors.red, margin: '16px 0 8px 0', fontSize: '22px' }}>Informações pessoais</h2>
                <div style={{ margin: '0 0 32px 0' }}>
                <img src="./logo.svg" alt="logo" />
                <h2 style={{ color: theme.colors.red, fontSize: '18px' }}>Nome</h2>
                <h3 style={{ fontSize: '14px' }}>
                    (Nicolas Conde)
                </h3>
                </div>
                <div style={{ margin: '0 0 32px 0' }}>
                <img src="./logo.svg" alt="logo" />
                <h2 style={{ color: theme.colors.red, fontSize: '18px' }}>Orientação sexual</h2>
                <h3 style={{ fontSize: '14px' }}>
                    (Homem)
                </h3>
                </div>
                <div style={{ margin: '0 0 32px 0' }}>
                <img src="./logo.svg" alt="logo" />
                <h2 style={{ color: theme.colors.red, fontSize: '18px' }}>Data de nascimento</h2>
                <h3 style={{ fontSize: '14px' }}>
                    (** de janeiro de ****)
                </h3>
                </div>
                <h2 style={{ color: theme.colors.red, margin: '32px 0 8px 0', fontSize: '22px' }}>------------</h2>
                <div style={{ margin: '0 0 32px 0' }}>
                <img src="./logo.svg" alt="logo" />
                <h2 style={{ color: theme.colors.red, fontSize: '18px' }}>E-mail</h2>
                <h3 style={{ fontSize: '14px' }}>
                    (**********@gmail.com)
                </h3>
                </div>
                <div style={{ margin: '0 0 32px 0' }}>
                <img src="./logo.svg" alt="logo" />
                <h2 style={{ color: theme.colors.red, fontSize: '18px' }}>Senha</h2>
                <h3 style={{ fontSize: '14px' }}>
                    (***************)
                </h3>
                </div>
                <div style={{ margin: '0 0 32px 0' }}>
                <img src="./logo.svg" alt="logo" />
                <h2 style={{ color: theme.colors.red, fontSize: '18px' }}>Número de telefone</h2>
                <h3 style={{ fontSize: '14px' }}>
                    (+** ** *****-****)
                </h3>
                </div>
                <div style={{ margin: '0 0 32px 0' }}>
                <img src="./logo.svg" alt="logo" />
                <h2 style={{ color: theme.colors.red, fontSize: '18px' }}>Documentos</h2>
                <h3 style={{ fontSize: '14px' }}>
                    (CPF: ***.***.***-** / RG: **.***.***-*)
                </h3>
                </div>
                <div style={{ margin: '0 0 32px 0' }}>
                <img src="./logo.svg" alt="logo" />
                <h2 style={{ color: theme.colors.red, fontSize: '18px' }}>Endereço</h2>
                <h3 style={{ fontSize: '14px' }}>
                    (Rua Haddock Lobo, 595 - Cerqueira César)
                </h3>
                </div>
            </MainDiv>
        </>
    );
};