import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Custom.module.css';

const PhotoOptions: React.FC = () =>
  <div className="bg-[#262626] h-[1300px]">
    <div id={styles.polygon}/>
    <div className="flex flex-col">
      <div className="justify-self-end w-[50%]">
        <h1 className="text-[#4c94d8] text-2xl sm:text-5xl md:text-5xl  font-extrabold">
      A Better Way To<span className="text-[#FFF]"> View </span>Food</h1>
        <p className="text-[#ffffff] inline text-[30px] leading-[160%] w-[50%]  font-extrabold">
        View dishes as 3D models and Augmented Reality. Understand and know exactly what you should be getting when you order your dish.
        </p>
      </div>
      <div className="z-10">
        <model-viewer style={{ width: `500px`, height: `500px`, marginLeft: `100px`, marginBottom: `200px` }}
          src="https://s3.us-east-1.wasabisys.com/yumar/defaultModels/salmon.glb" camera-controls
          shadow-intensity="1" touch-action="pan-y"/>
      </div>
    </div>
  </div>;
export default PhotoOptions;
