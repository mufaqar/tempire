import About from '@/components/homepage/about'
import PageBanner from '@/components/pageBanner'
import { Metadata } from 'next';
import Head from 'next/head'
import React from 'react'


export const metadata: Metadata = {
  title: "About TEMPIRE | Flexible Equipment Financing Solutions for Growing Businesses",
  description: "TEMPIRE allows our clients to make the best decisions.",
};

export default function About_Us() {
    return (
        <>
            <Head>
                <title>About TEMPIRE® | Flexible Equipment Financing Solutions for Growing Businesses</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="TEMPIRE® offers competitive equipment pricing and flexible financing options, helping businesses confidently secure assets to grow and succeed." />
                <link rel="canonical" href="https://www.tempire.com/about" />
            </Head>
            <PageBanner title="About Tempire" />
            <About />
        </>
    )
}
