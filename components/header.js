import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Header() {
  return (
    <>
      <Head>
        <title>Tempire </title>
        <meta name="description" content="Tempire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/images/logo.svg" alt="" width="250px" height="60" />
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Our advantages</a>
            <a class="mr-5 hover:text-gray-900">About Us</a>
            <a class="mr-5 hover:text-gray-900">Prices / Subscription</a>
            <a class="mr-5 hover:text-gray-900">FAQ</a>
          </nav>
        </div>
      </header>
    </>
  );
}
