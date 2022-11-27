/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Router from 'next/router';
import { ClosedLockIcon, XIcon } from '../../../lib/icons/icons';

const SignUpModal = ({
  showSignUpModal,
  setSignUpModal,
  setAuthModal,
}:
{
  showSignUpModal: boolean;
  setSignUpModal: Dispatch<SetStateAction<boolean>>;
  setAuthModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [ email, setEmail ] = useState(``);
  const [ fullName, setFullName ] = useState(``);
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { email, fullName };
      await fetch(`/api/user`, {
        method: `POST`,
        headers: { 'Content-Type': `application/json` },
        body: JSON.stringify(body),
      });
      await Router.push(`/`);
      setSignUpModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const showLoginForm = () => {
    setAuthModal(true);
    setSignUpModal(false);
  };

  return (
    <Transition.Root show={showSignUpModal} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" open={showSignUpModal} onClose={setSignUpModal}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4
            sm:max-w-sm sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setSignUpModal(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon aria-hidden="true" />
                </button>
              </div>
              <div>
                <h1 className="text-center text-4xl tracking-tight
                font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                  Yummr
                </h1>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Sign up to create your account
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                      <form className="space-y-6" action="#" method="POST" onSubmit={submitData}>
                        <div>
                          <div className="mt-1">
                            <input
                              id="email"
                              value={email}
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="appearance-none block w-full px-3 py-2 border
                               border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none
                                focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              placeholder="Email Address"
                              onChange={e => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="mt-1">
                            <input
                              id="password"
                              value={fullName}
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                              shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500
                               focus:border-indigo-500 sm:text-sm"
                              placeholder="Password"
                              onChange={e => setFullName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div>

                          <button
                            type="submit"
                            // onSubmit={signupHandler}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md
                             shadow-sm text-sm font-medium text-white bg-[#FF6F43] hover:bg-[#e27d18]
                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6F43]"
                          >
                            <ClosedLockIcon />Create Account
                          </button>
                        </div>
                      </form>

                    </div>
                    <div className="items-center text-center pt-3 text-md leading-6 text-gray-700">
                      Already have an account? <a onClick={showLoginForm}>Log in here</a></div>
                    <div className="relative">
                      <div className="absolute inset-0 pt-2 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>

                    </div>
                    <div
                      className="items-center text-center pt-3 text-md leading-6 text-gray-700">
                      Or, sign up as a
                      <a className="font-semibold" href="/restaurantSignup.html">
                        Restaurant Owner here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SignUpModal;
