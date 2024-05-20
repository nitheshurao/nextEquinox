import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const MyDocument = () => (
  <Html>
    <Head>
      <meta charSet="UTF-8" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> */}
      <meta name="emotion-insertion-point" content="" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/assets/logs/log.svg" type="image/x-icon" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
