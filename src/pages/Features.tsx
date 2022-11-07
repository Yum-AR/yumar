import React from 'react';
import Image from 'next/image';
import { transferFeatures, communicationFeatures } from './reusableItems/variables/variables';
import * as BABYLON from 'babylonjs';
import SceneComponent from './reusableItems/components/Scene';
import 'babylonjs-loaders';




const Features: React.FC = () => {
  const onSceneReady = (scene: any): void => {
    // This creates and positions a free camera (non-mesh)
    const camera = new BABYLON.ArcRotateCamera(`camera`, -Math.PI / 2,
      Math.PI / 2.5, 2.7, new BABYLON.Vector3(0, 0, 0), scene);

    camera.lowerRadiusLimit = 2.7;
    camera.upperRadiusLimit = 2.7;
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();
    BABYLON.SceneLoader.ShowLoadingScreen = false;
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new BABYLON.HemisphericLight(`light`, new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;
    // Our built-in 'box' shape.
    BABYLON.SceneLoader.Append(`
    https://firebasestorage.googleapis.com/v0/b/plopit-aceb3.appspot.com/o/restaurants%2FRaivis_Restaurant%2F
    `
    , `salmon.glb?alt=media&token=f136b924-b16a-43ba-b625-072524ef188c`, scene);
    // box = BABYLON.MeshBuilder.CreateBox('box', { size: 2 }, scene)

    // Move the box upward 1/2 its height

    // Our built-in 'ground' shape.
  };

  return (
    <>
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>

          <div id="featureView" className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to <span className="text-[#EE7E0E]">view</span> food
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              We give food a new dimension, giving meaning to what it means to reminiscence
              on the past food you have eaten with friends and family.
            </p>
          </div>

          <a id="featureView" />
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Bring Food to <span className="text-[#EE7E0E]">Life</span>
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                See what you are about to order directly in front of you with 3D models and
                augmented reality. By using your phone's camera to place the dish on your table.
              </p>

              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) =>
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center
                      justify-center h-12 w-12 rounded-md bg-[#FF6F43] text-white">
                        {item.icon}
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>)}
              </dl>
            </div>
            <div className="mt-10 -mx-4 flex justify-center relative lg:mt-0" aria-hidden="true">
              <SceneComponent
                className='outline-none inline min-h-[100%]'
                antialias onSceneReady={onSceneReady}
                id="my-canvas" />
              <menu className="absolute max-w-[25%] max-h-[25%] right-0 top-0">
                <a
                  rel="ar"

                  href="https://firebasestorage.googleapis.com/v0/b/plopit-aceb3.appspot.com/o/
                  restaurants%2FRaivis_Restaurant%2Fsalmon.usdz?alt=media&token=c6823f38-0798-4c6e-baf8-8ec46c4f1b99"
                >
                  <Image
                    width={500}
                    height={500}
                    className="max-w-[100%] max-h-[100%]"
                    alt="ar button"

                    src="https://media.istockphoto.com/photos/dotted-grid-paper-background-
                    texture-seamless-repeat-pattern-picture-id1320330053
                    ?b=1&k=20&m=1320330053&s=170667a&w=0&h=XisfN35UnuxAVP_sjq3ujbFDyWPurSfSTYd-Ll09Ncc=" />

                </a>
              </menu>
            </div>

          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"><span
                className="text-[#EE7E0E]">Transform</span> Food into Digital Twins  </h3>
              <p className="mt-3 text-lg text-gray-500">
                Our scanner makes its easy for restaurant owners to add their menu to our
                platform -- all with your smartphone. The result is a beautiful digital 3D twin of their dish.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) =>
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center
                      justify-center h-12 w-12 rounded-md bg-[#FF6F43] text-white">
                        {item.icon}
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>)}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <Image
                width={500}
                height={500}
                className="relative mx-auto"
                src="https://images.unsplash.com/photo-1590126141992-d6a613152c77?ixlib=rb-1.2.
                1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;