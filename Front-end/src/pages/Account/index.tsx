import { NextPage } from 'next';

import { MainDiv } from './styles';

export const AccountPage: NextPage = () => {
  return (
    <>
      <MainDiv>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 0 32px 0'}}>
          <h1>Conta</h1>
          <h2>nome do usuario</h2>
        </div>
        <div style={{ margin: '0 0 32px 0' }}>
            <div style={{ height: '10vh', width: '10vh', backgroundColor: 'red'}}>

            </div>
            <h2>
                Informações da conta >
            </h2>
            <h3 style={{ fontSize: '14px'}}>
                Detalhes pessoais e informações de contato
            </h3>
        </div>
        <div style={{ margin: '0 0 32px 0' }}>
            <div style={{ height: '10vh', width: '10vh', backgroundColor: 'red'}}>

            </div>
            <h2>
                Notificações > 
            </h2>
            <h3 style={{ fontSize: '14px'}}>
                Preferências de notificação
            </h3>
        </div>
        <div>
            <div style={{ height: '10vh', width: '10vh', backgroundColor: 'red'}}>

            </div>
            <h2>
                Pagamentos > 
            </h2>
            <h3 style={{ fontSize: '14px'}}>
                Revise pagamentos, Doações
            </h3>
        </div>
      </MainDiv>
    </>
  );
};


