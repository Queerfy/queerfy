import React from 'react';

import Switch from "react-switch";

import { NextPage } from 'next';
import { MainDiv } from '../MainAccount/styles';
import { theme } from '../../../styles/theme';

export const NotificationPage: NextPage = () => {

    return (
        <>
            <MainDiv >
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 0 32px 0',
                }}
                >
                <img style={{ width: '20px', margin: '32px 0 16px 0' }} src="returnBlue.svg" alt="return" />
                <h1 style={{ width: '100%', fontSize: '28px', color: theme.colors.blue }}>Notificações</h1>
                </div>
                <div style={{ margin: '0 0 32px 0' }}>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <h2 style={{ color: theme.colors.blue, fontSize: '20px' }}>E-mail</h2>
                <Switch
                    checked={theme}
                    onColor="#439EFA"
                    offColor="#C4C4C4"
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
                </div>
                </div>
                <div style={{ margin: '0 0 32px 0' }}>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <h2 style={{ color: theme.colors.blue, fontSize: '20px' }}>Pop-up</h2>
                <Switch
                    checked={theme}
                    onColor="#439EFA"
                    offColor="#C4C4C4"
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
                </div>
                </div>
                
                <div style={{ margin: '0 0 32px 0' }}>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <h2 style={{ color: theme.colors.blue, fontSize: '20px' }}>Mensagens de outros usuários</h2>
                <Switch
                    checked={theme}
                    onColor="#439EFA"
                    offColor="#C4C4C4"
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
                </div>
                </div>
            </MainDiv>
        </>
    )
};