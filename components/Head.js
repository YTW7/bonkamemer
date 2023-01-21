import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Bonk-a-Memer</title>
      <meta name="title" content="Bonk-a-Memer" />
      <meta name="description" content="Meme Platform powered by $BONK!" />
      <link rel="icon" href="/logo_round.png" />
    
    </Head>
  );
}
