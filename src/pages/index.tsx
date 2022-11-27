import { type NextPage } from 'next';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { trpc } from '../utils/trpc';
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
  </>;
export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData &&
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      }
      {secretMessage &&
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      }
      <button
        className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? `Sign out` : `Sign in`}
      </button>
    </div>
  );
};
