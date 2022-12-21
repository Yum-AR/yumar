import { type NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Script from 'next/script';
import CallToAction from './landingPage/CallToAction';
import PhotoOptions from './landingPage/PhotoOptions';
import Footer from './landingPage/Footer';
import Features from './landingPage/Features';
import HeroSection from './landingPage/HeroSection';
const Home: NextPage = () =>
  <>
    <div className="">
      <Head>
        <title>YumAR</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <main className="">
        <HeroSection />
        <PhotoOptions />
        <Features />
        <CallToAction />
      </main>

      <Footer />
    </div>
    <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"/>
  </>;
export default Home;
