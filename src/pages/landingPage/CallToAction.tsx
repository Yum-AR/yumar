import React from 'react';
import Image from 'next/image';
import { type NextPage } from 'next';

const CallToAction: NextPage = () =>
  <div className="relative bg-white">
    <div className="lg:absolute lg:inset-0">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          width={500}
          height={500}
          className="h-30 w-full object-cover lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1
          &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
      </div>
    </div>
    <div className="relative py-16 px-4
           sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
      <div className="lg:pr-8">
        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let&aposs work together</h2>
          <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  We’d love to hear from you! If you have any questions or would like to add your restaurant
                  to our platform.  Send us a message below, or email support@yummr.io.
          </p>
          <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="First name"
                  // onChange={(e) => { setFirstName(e.target.value); }}
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full h-[2.5rem] shadow-sm sm:text-sm
                         placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500
                         border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>

              <div className="mt-1">
                <input
                  placeholder="Last name"
                  type="text"
                  name="last-name"
                  // onChange={(e) => { setLastName(e.target.value); }}
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full h-[2.5rem] shadow-sm placeholder-gray-500 sm:text-sm
                         focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-1">
                <input
                  placeholder="Email"
                  id="email"
                  name="email"
                  // onChange={(e) => { setEmail(e.target.value); }}
                  type="email"
                  autoComplete="email"
                  className="block w-full h-[2.5rem] shadow-sm sm:text-sm placeholder-gray-500 focus:ring-indigo-500
                         focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-1">
                <input
                  placeholder="Restaurant name"
                  type="text"
                  // onChange={(e) => { setrestaurantName(e.target.value); }}
                  name="restaurant"
                  id="restaurant"
                  autoComplete="organization"
                  className="block w-full h-[2.5rem] shadow-sm placeholder-gray-500 sm:text-sm
                         focus:ring-grape-500 focus:border-indigo-500 border-gray-500 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <span id="phone-description" className="text-sm text-gray-500">
                        Optional
                </span>
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Phone number"
                  name="phone"
                  // onChange={(e) => { setPhone(e.target.value); }}
                  id="phone"
                  autoComplete="tel"
                  aria-describedby="phone-description"
                  className="block w-full h-[2.5rem] placeholder-gray-500 shadow-sm sm:text-sm focus:ring-indigo-500
                         focus:border-indigo-500 border-gray-500 rounded-md"
                />
              </div>
            </div>
            <div className="text-right sm:col-span-2">
              <button
                type="submit"

                //   onClick={async (e) => await handleSubmit(e)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm
                      font-medium rounded-md text-white bg-[#FF6F43] hover:bg-[#ee8c2a] focus:outline-none focus:ring-2
                      focus:ring-offset-2 focus:ring-grape-500"
              >
                      Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>;
export default CallToAction;
