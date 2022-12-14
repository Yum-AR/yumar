/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { XIcon } from '../../../lib/icons/icons';
import 'babylonjs-loaders';
import SceneComponent from '../../reusableItems/components/Scene';
import { trpc } from '../../../utils/trpc';

interface IMenuItems{
  isPublished: boolean;
  itemDescription: string;
  itemPrice: string;
  lastUpdatedDate: Date;
  menuHeaderId: number;
  menuItem: string;
  menuItemId: number;
  modelApproval: boolean;
  modelUpdate?: Date;
  modelUrl: string;
  restaurantId: number;
  scaleCompensation?: number;
  thumbnailUrl: string;
  userId?: number;
}

const MenuCards: React.FC<{ restaurantId: number }> = ({ restaurantId }) => {

  const { data: restaurant } = trpc.restaurant.getRestaurant.useQuery({ restaurantId });
  // const { menuItems } = restaurant;
  const [ isOpen, setIsOpen ] = useState(false);
  const [ webURL, setWebURL ] = useState<string>();
  const [ usdzURL, setUsdzURL ] = useState<string>();
  const [ foodName, setFoodName ] = useState<string>(`hi`);
  const menuItems = restaurant?.MenuItems;
  const sortedMenuItems = menuItems?.reduce((acc: any[], curr: any) => {
    acc[curr.menuHeaderId] = acc[curr.menuHeaderId] || [];
    acc[curr.menuHeaderId].push(curr);
    return acc;
  }, []);
  const onSceneReady = (scene: any | undefined) => {

    // This creates and positions a free camera (non-mesh)
    const camera = new BABYLON.ArcRotateCamera(
      `camera`,
      -Math.PI / 2, Math.PI / 2.5, 2.7,
      new BABYLON.Vector3(0, 0, 0), scene,
    );

    camera.lowerRadiusLimit = 4.7;
    camera.upperRadiusLimit = 4.7;
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    const canvas = scene?.getEngine().getRenderingCanvas();
    BABYLON.SceneLoader.ShowLoadingScreen = false;
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight(`light`, new BABYLON.Vector3(0, 1, 0), scene);

    light.intensity = 0.7;
    const url = webURL && webURL.split(`wasabisys`);
    BABYLON.SceneLoader.Append(`${url && url[0]}wasabisys`, `${url && url[1]}`, scene);
  };
  return (
    <>
      <div>
        {sortedMenuItems?.map((section, index) =>
          <>
            {<h1 key={index}
              className="text-[2rem] font-bold m-8 ml-8">{section[index].menuHeaderId.toString()}</h1>}
            <div className="max-w-lg ml-4 mr-8 mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {section.map((item: IMenuItems) =>
                <>
                  <div key={item.menuHeaderId} className="flex flex-col rounded-lg shadow-lg overflow-hidden">

                    <div className="flex-shrink-0">
                      <Image width={400} height={190} className="h-48 w-full object-cover"
                        src={
                          item.thumbnailUrl
                            ? item.thumbnailUrl
                            : `/images/menuDefault.png`
                        } alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <button onClick={() => {
                          setIsOpen(true); if (item.modelUrl) { setWebURL(item.modelUrl); } else {
                            setWebURL(`https://s3.us-east-1.wasabisys.com/yumar/Bread.glb`);
                          }
                          setUsdzURL(item.modelUrl); setFoodName(item.menuItem);
                        }}
                        className="float-right bg-white hover:bg-gray-100 text-gray-800
                            font-semibold py-2 px-4 border border-gray-400 rounded shadow">View In AR</button>
                        <p className="text-xl font-semibold text-gray-900">{item.menuItem }</p>
                        <p className="text-xl font-semibold text-green-700">${item.itemPrice }</p>
                        <p className="mt-3 text-base text-gray-500">{item.itemDescription }</p>
                      </div>
                    </div>
                  </div>
                </>)
              }
            </div>
          </>)}
      </div>
      <div>
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" open={isOpen} onClose={setIsOpen}>
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
                <div className="relative inline-block align-bottom bg-white rounded-lg
                px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl
                transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div id="modelview-div" className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        {foodName}
                      </Dialog.Title>
                      <div className="mt-2 max-h-[70%]">
                        <SceneComponent
                          className='outline-none max-w-[100%] max-h-[100%]'
                          antialias onSceneReady={onSceneReady} id="my-canvas" />
                        <menu className="absolute max-w-[25%] max-h-[25%] right-0 top-0">
                          <a
                            rel="ar"
                            href={usdzURL}
                          >
                            <Image alt='' width={100} height={100} className="max-w-[100%] max-h-[100%]"
                              src="https://img.wallpapersafari.com/desktop/1024/576/69/20/FgHujO.jpg" />

                          </a>
                        </menu>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

    </>
  );
};
export default MenuCards;
