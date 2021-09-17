import { NextPage } from 'next';

import Head from 'next/head';

import { useEffect, useState } from 'react';

import { Navbar } from '../components/Navbar';
import { NavbarMobile } from '../components/NavbarMobile';

const IndexPage: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  /* let windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth > 1000) {
      setIsMobile(false)
    } else {
      setIsMobile(true);
    }
  }, [windowWidth]) */

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      {isMobile ? (<NavbarMobile />) : (<Navbar />)}

      {/*  */}

      <main>
      </main>
    </>
  );
};

export default IndexPage;
