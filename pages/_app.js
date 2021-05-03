import 'bootstrap/dist/css/bootstrap.css'
import DefaultLayout from '../component/layout/DefaultLayout'
import Head from "next/head";
import React from 'react';
import { Container } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>App</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/theme.css"></link>
      </Head>
      <DefaultLayout>
        <Container>
        
        </Container>
      </DefaultLayout>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;