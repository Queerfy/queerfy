import { NextPage } from 'next';

import Head from 'next/head';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Hello world!</h1>
      </main>
    </div>
  );
};

export default IndexPage;
