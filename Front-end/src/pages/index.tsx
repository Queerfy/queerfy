import { NextPage } from 'next';

import Head from 'next/head';

import { NavbarMobile } from '../components/NavbarMobile';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <NavbarMobile />

      <main>
      </main>
    </>
  );
};

export default IndexPage;
