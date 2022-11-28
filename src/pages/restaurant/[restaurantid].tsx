/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import Image from 'next/image';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { uniq } from 'lodash';
import Lottie from 'react-lottie-player';
import NavBar from '../reusableItems/components/NavBar';
import { trpc } from '../../utils/trpc';
import foodAnimation from '../../lib/lottieAnimations/food-loading-animation.json';
import MenuCards from './components/MenuCards';

interface IRestaurantAddress {
  city: string;
  restuarantAddressId: number;
  state: string;
  street: string;
  zip: string;
}

interface IRestaurantSettings {
  priceRange: string;
  restaurantHeaderImageUrl: string;
  restaurantSettingsId: number;
  restaurantThumbnailUrl: string;
}
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
interface IRestaurant {
  RestaurantAddress: IRestaurantAddress;
  RestaurantInformation: any[];
  MenuItems: IMenuItems[];
  RestaurantSettings: IRestaurantSettings;
  isApproved: boolean;
  isFeatured: boolean;
  restaurantAddressId: number;
  restaurantDescription: string;
  restaurantId: number;
  restaurantName: string;
  restaurantSettingsId: number;
  userId: number | null;
  websiteUrl: string;

}

export function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const { restaurantid } = query;
  return { props: { restaurantid } };

}
const RestaurantPage: React.FC<{restaurantid: string}> = ({ restaurantid }) => {
  const restaurantId = parseInt(restaurantid);
  const { data: activeRestaurant, status }: {
    data: any | IRestaurant; status: any;} = trpc.restaurant.getRestaurant.useQuery({ restaurantId });
  console.log(status, typeof status, `status`);
  const menuHeaderIds = activeRestaurant?.MenuItems.map((item: { menuHeaderId: any }) => item.menuHeaderId);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const uniqueIds = uniq(menuHeaderIds);

  return (
    status === `success` ? <>
      <NavBar />
      <div className="bg-white w-[100vw]">
        <div aria-hidden="true" className="relative">
          <Image width="1463" height="384"
            src={activeRestaurant?.RestaurantSettings?.restaurantHeaderImageUrl}
            alt=""
            className="w-full h-96 object-center object-cover opacity-90 bg-black"
          />
          <div className="absolute opacity-80 inset-0 bg-gradient-to-t from-slate-900" />
        </div>
        <div className="flex flex-col">
          <div>
            <div className=" max-w-7xl pb-4 px-4 pt-10 sm:pb-5 sm:px-6 lg:px-8">
              <div className="mx-auto mt-2 text-center">

                <h2 className="text-3xl text-left font-extrabold tracking-tight
                     text-gray-900 sm:text-4xl">{activeRestaurant?.restaurantName}</h2>

                <div className="flex">
                  <a
                    className=" mt-2 text-[#868686] text-sm"
                    target="_blank"
                    href={` https://www.google.com/maps/place/
                         ${activeRestaurant?.RestaurantAddress?.street}
                      +${activeRestaurant?.RestaurantAddress?.city}
                      ,+${activeRestaurant?.RestaurantAddress?.state}
                      +${activeRestaurant?.RestaurantAddress?.zip}`}
                    rel="noreferrer">
                    {`${activeRestaurant?.RestaurantAddress?.street}
                        ${activeRestaurant?.RestaurantAddress?.city}, 
                        ${activeRestaurant?.RestaurantAddress?.state} 
                        ${activeRestaurant?.RestaurantAddress?.zip}`}
                  </a>
                </div>

                {/* <div className='flex'>
                      <p className=" mt-2 text-[#868686] text-sm text-left" >
                        {activeRestaurant.RestaurantInformation.map(time =>
                          <p>{`${time.startHour} - ${time.endHour}`}</p>)}</p>
                    </div> */}
                <div className="flex">
                  <Link className="mt-2 text-[#868686] text-sm"
                    href = {`https://${activeRestaurant ??

                    activeRestaurant?.websiteUrl.replace(/^https?:\/\//, ``)}`}
                    target="_blank" rel="noreferrer">
                    {activeRestaurant?.websiteUrl}</Link>
                </div>
                <div className=" flex mt-5 justify-start">
                  {/* <GenreBadge
                    value={activeRestaurant?.RestaurantSettings.priceRange}
                    priceRange={activeRestaurant.RestaurantSettings.priceRange} /> */}
                </div>

                <p className="mt-4 text-gray-500" />
              </div>
            </div>

          </div>
          <div className="w-full">
            <div className="min-w-[100%]">
              <div id="fixedHeaderNav" className="flex bg-[#FFFFFF] min-w-full
                 overflow-auto absolute  max-w-[100vw] whitespace-nowrap
                 border-b-2 border-black-100 p-3 flex-col mt-2 justify-center">
                <ul className="w-[full] inline-flex md:justify-center">
                  {
                    uniqueIds.map((item: any) =>
                      <li key={item} className="mr-6 m-2 h-full font-semibold rounded text-center
                         hover:drop-shadow-xl active:underline transition-all
                         hover:underline hover:cursor-pointer">
                        {item}
                      </li>)
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-blue w-3 h-10"/>
          <MenuCards restaurantId={restaurantId}/>
        </div>
      </div>
    </> : <div className="flex w-[100%] mt-[20rem] justify-center">
      <Lottie loop animationData={foodAnimation} play style={{ width: 300, height: 300 }} />
    </div>
  );
};

export default RestaurantPage;
