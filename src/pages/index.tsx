import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Redux Toolkit Starter kit</title>
        <meta name="description" content="The Starter kit by Bigdadz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href={"/pokemon"}> go to pokemon</Link>
      </main>
    </div>
  );
};

export default Home;
