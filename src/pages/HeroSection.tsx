import React from 'react';
import SearchBar from './SearchBar';
import HomeNav from './HomeNav';

const HeroSection: React.FC = () =>
  <div className="relative bg-gray-50 overflow-hidden">
    <HomeNav className="flex justify-between" />
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className=" xl:inline">Yum</span>{` `}
          <span className=" text-[#FF6F43] xl:inline">mr</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {`View your favorite restaurant's menu in mixed reality`}
        </p>
        <div className="mt-3 mb-[15rem] max-w-md mx-auto md:mt-5 md:text-xl md:max-w-3xl">
          <SearchBar />
        </div>
      </div>
    </main>
  </div >;
export default HeroSection;