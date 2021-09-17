import { NextPage } from 'next';

import Head from 'next/head';
import { House } from './House';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <House />
      </main>
    </div>
  );
};

export default IndexPage;
