import PageBanner from '@/components/pageBanner'
import RateUsForm from '@/components/rateUs/RateUsForm'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "About TEMPIRE | Flexible Equipment Financing Solutions for Growing Businesses",
  description: "TEMPIRE allows our clients to make the best decisions.",
};

export default function Rate_Us() {
  return (
    <>
      <PageBanner title="Rate Us" />
      <RateUsForm />
    </>
  )
}
