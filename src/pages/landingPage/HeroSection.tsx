
import React from 'react';
import Typewriter from 'typewriter-effect';
import { shuffle } from 'lodash';
import styles from '../../styles/Custom.module.css';
import SearchBar from './SearchBar';
import HomeNav from './HomeNav';
const HeroSection: React.FC = () => {
  const words = [
    `Hunger`,
    `Curiosity`,
    `Taste Buds`,
    `Palette`,
    `Senses`,
    `Imagination`,
    `Cravings`,
    `Interests`,
    `Exploration`,
    `Discovery`,
  ];
  const shuffledWords = shuffle(words);
  return (
    <>
      <div className="relative bg-gray-50 overflow-hidden">
        <HomeNav />
        <main className="mt-10 space-x-[3rem] mx-auto max-w-7xl px-4 sm:mt-6">
          <div className="flex">
            <div className="order-last">
              <div
                id={styles.pinkBlur} className="absolute rounded-full w-[767px] lg:left-[800px] md:left-[500px] sm:left-[200px]
            z-0 bottom-[-100px] bg-[#FAEFEF] h-[900px] right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"/>
              <div className="z-10">
                <model-viewer style={{ width: `500px`, height: `500px`, marginLeft: `100px`, marginBottom: `200px` }}
                  src="https://s3.us-east-1.wasabisys.com/yumar/defaultModels/salmon.glb" camera-controls
                  shadow-intensity="1" touch-action="pan-y"/>
              </div>
            </div>
            <div className="text-center mt-[8rem] z-10">
              <h1 className="text-2xl z-2 tracking-tight max-w-[600px] font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Find Models That Excite Your <span className="text-[#4c94d8]" id="excite-what"><Typewriter
                  options={{
                    strings: shuffledWords,
                    autoStart: true,
                    delay: 300,
                    loop: true,
                    cursorClassName: `font-normal text-[1px]`,
                  }}/></span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {`View your favorite restaurant's menu in mixed reality`}
              </p>
              <div className="mt-3 mb-[15rem] max-w-md mx-auto md:mt-5 md:text-xl md:max-w-3xl">
                <SearchBar />
              </div>
            </div>
          </div>
        </main>
      </div >
    </>
  );
};

export default HeroSection;
