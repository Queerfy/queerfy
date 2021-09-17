import { NextPage } from 'next';

import Head from 'next/head';
import { AccountPage } from './Account';

import { Navbar } from '../components/Navbar';
import { NavbarMobile } from '../components/NavbarMobile';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Conta</title>
      </Head>

      <Navbar />
      <NavbarMobile />

      <main>
        <AccountPage />
      </main>
    </>
  );
};

export default IndexPage;
