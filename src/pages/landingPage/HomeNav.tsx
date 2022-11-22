import React, { Fragment, useState } from 'react';
import { type NextPage } from 'next';
import { Popover, Transition } from '@headlessui/react';
import { navigation } from '../reusableItems/variables/variables';
import Image from 'next/image';
import {XIcon, MenuIcon} from '../reusableItems/icons/icons';
import ProfileDropdown from '../reusableItems/components/ProfileDropdown';
import AuthModal from '../reusableItems/components/AuthModal';
import SignUpModal from '../reusableItems/components/SignUpModal';
import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';

const HomeNav: NextPage = () => {
  const [ showAuthModal, setAuthModal ] = useState(false);
  const [ showSignUpModal, setSignUpModal ] = useState(false);
  //const btnSignIn = document.getElementById("btnSignIn");
  //const spnSignIn = document.getElementById("spnSignIn");
  //const session = getSession();
  const { data: session, status } = useSession();
  //if (status === "authenticated") {
    //return <p>Signed in as {session.user.email}</p>
    //spnSignIn.style.display = "none";
  //}

const currentUser = false;
  return (
    <>
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4
            -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-between" aria-label="Global">
              <div className="flex items-center flex-1 md:flex-none md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span className="sr-only">Yummr</span>
                    {/* <Image
                      width={500}
                      height={500}
                      className="h-8 w-auto sm:h-10"
                      src="https://firebasestorage.googleapis.com/v0/b/plopit-aceb3.appspot.com
                      /o/appicon.svg?alt=media&token=e1e697e6-eb8f-4f01-97f3-201ebd43b904"
                      alt="Test"

                    /> */}
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center
                    justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                    focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>

                      <MenuIcon />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex">
                <div className="absolute drop-shadow-2xl inset-0 top-10 right-10 pt-2 flex items-center"
                  aria-hidden="true">
                  <div className="w-[4%] border-t opacity-[0.5] border-gray-300" />
                </div>
                {navigation.map((item) =>
                  <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900 px-4">

                    {item.name}
                  </a>)}
              </div>
              <div className="md:flex">
                {
                  currentUser
                    ? <ProfileDropdown className="object-right-top"></ProfileDropdown>
                    : <div className="hidden md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 space-x-6">
                        {/* <span className="inline-flex rounded-md shadow">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border
                            border-transparent text-base font-medium rounded-md text-[#FF6F43]
                             bg-white hover:bg-gray-50"
                            onClick={() => setAuthModal(true)}
                          >
                          Log in
                          </button>
                          <AuthModal showAuthModal={showAuthModal} setAuthModal={setAuthModal}
                            setSignUpModal={setSignUpModal} />
                        </span> */}
                        {/* <span className="inline-flex rounded-md shadow">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm
                            font-medium rounded-md shadow-sm text-white bg-[#FF6F43]
                             hover:bg-[#ee8c2a] focus:outline-none
                            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => setSignUpModal(true)}
                          >
                          Sign Up
                          </button>
                          <SignUpModal showSignUpModal={showSignUpModal} setSignUpModal={setSignUpModal}
                            setAuthModal={setAuthModal} />
                        </span> */}
                        <AuthShowcase />
                        {/* <span className="inline-flex rounded-md shadow">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm
                            font-medium rounded-md shadow-sm text-white bg-[#FF6F43]
                             hover:bg-[#ee8c2a] focus:outline-none
                            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => signIn()}
                          >
                          Sign In
                          </button>
                          
                        </span> */}
                        {/* <span className="inline-flex rounded-md shadow">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm
                            font-medium rounded-md shadow-sm text-white bg-[#FF6F43]
                             hover:bg-[#ee8c2a] focus:outline-none
                            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => signOut()}
                          >
                          Sign Out
                          </button>
                          
                        </span> */}
                        {/* <span className="inline-flex rounded-md shadow">
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm
                            font-medium rounded-md shadow-sm text-white bg-[#FF6F43]
                             hover:bg-[#ee8c2a] focus:outline-none
                            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => console.log(session)}
                          >
                          Get Session
                          </button>
                          
                        </span> */}
                      </div>

                }
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    {/* <Image
                      className="h-8 w-auto"
                      width={500}
                      height={500}
                      // eslint-disable-next-line max-len
                      src="https://firebasestorage.googleapis.com/v0/b/plopit-aceb3.appspot.com/o/appicon.svg?alt=media&token=e1e697e6-eb8f-4f01-97f3-201ebd43b904"
                      alt="Yummr"
                    /> */}
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center
                    justify-center text-gray-400
                     hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2
                     focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) =>
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium
                       text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>)}
                </div>
                {currentUser
                  ? <></>
                  : <button
                      onClick={() => setAuthModal(true)}
                      className="block w-full px-5 py-3 text-center font-medium
                       text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                    Log in
                    </button>
                }

              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div >
    </>
  );
};
export default HomeNav;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {sessionData && (
        <p className="text-base text-orange-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm
        font-medium rounded-md shadow-sm text-white bg-[#FF6F43]
         hover:bg-[#ee8c2a] focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};