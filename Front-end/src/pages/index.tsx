import { NextPage } from 'next';

import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { NavbarMobile } from '../components/NavbarMobile';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Queerfy</title>
      </Head>

      <NavbarMobile />

      <Navbar />

      <main>
      </main>
    </>
  );
};

export default IndexPage;
