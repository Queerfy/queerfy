import { NextPage } from 'next';

import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { NavbarMobile } from '../components/NavbarMobile';
import { MainPage } from './Account/MainAccount';
import { InfoAccount } from './Account/AccountInfo';
import { NotificationPage } from './Account/Notification';
import { PaymentsPage } from './Account/Payments';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Conta</title>
      </Head>

      <Navbar />
      {/* <NavbarMobile /> */}

      <main>
        <PaymentsPage />
      </main>
    </>
  );
};

export default IndexPage;
