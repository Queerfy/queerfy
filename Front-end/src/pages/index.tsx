import { NextPage } from 'next';

import Head from 'next/head';
import { AccountPage } from './Account';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Conta</title>
      </Head>

      <main>
        <AccountPage />
      </main>
    </div>
  );
};

export default IndexPage;
