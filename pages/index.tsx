import Head from "next/head";

import CheckActiveNames from "@/components/CheckActiveNames";

export default function Home() {
  return (
    <>
      <Head>
        <title>WLCW Check Available Active Business Names</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CheckActiveNames />
      </main>
    </>
  );
}
