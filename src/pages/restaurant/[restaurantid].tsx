import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import NavBar from '../reusableItems/components/NavBar';
import GenreBadge from '../reusableItems/components/GenreBadge';
import { trpc } from '../../utils/trpc';
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

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const restaurantId = query.restaurantId as string;
  console.log(query, `weurr`);
  const data = await fetch(`/api/getRestaurant`);
  console.log(data);
  return { props: { data } };

}
const RestaurantPage: React.FC<{data: IRestaurant}> = ({ data: activeRestaurant }) => {
  console.log(activeRestaurant, `ssr`);
  return (
    <>
      <html className="scroll-smooth" style={{ scrollBehavior: `smooth` }}>
        <NavBar />
        <div className="bg-white w-[100vw]">
          <div aria-hidden="true" className="relative">
            <Image width="100" height="100"
              src={activeRestaurant ? activeRestaurant.RestaurantSettings?.restaurantHeaderImageUrl
                : `/images/defaultBackgroundHeader.jpg`}
              alt=""
              className="w-full h-96 object-center object-cover opacity-90 bg-black"
            />
            <div className="absolute opacity-80 inset-0 bg-gradient-to-t from-slate-900" />
          </div>
          <div className="flex flex-col">
            <div>
              <div className=" max-w-7xl pb-4 px-4 pt-10 sm:pb-5 sm:px-6 lg:px-8">
                <div className="mx-auto mt-2 text-center">

                  {activeRestaurant ? <>

                    <h2 className="text-3xl text-left font-extrabold tracking-tight
                     text-gray-900 sm:text-4xl">{activeRestaurant.restaurantName}</h2>

                    <div className="flex">
                      <a
                        className=" mt-2 text-[#868686] text-sm"
                        target="_blank"
                        href={` https://www.google.com/maps/place/
                         ${activeRestaurant?.RestaurantAddress.street.replaceAll(` `, `+`)}
                      +${activeRestaurant.RestaurantAddress.city.replaceAll(` `, `+`)}
                      ,+${activeRestaurant.RestaurantAddress.state}
                      +${activeRestaurant.RestaurantAddress.zip}`}
                        rel="noreferrer">
                        {`${activeRestaurant.RestaurantAddress.street}
                        ${activeRestaurant.RestaurantAddress.city}, 
                        ${activeRestaurant.RestaurantAddress.state} 
                        ${activeRestaurant.RestaurantAddress.zip}`}
                      </a>
                    </div>

                    {/* <div className='flex'>
                      <p className=" mt-2 text-[#868686] text-sm text-left" >
                        {activeRestaurant.RestaurantInformation.map(time =>
                          <p>{`${time.startHour} - ${time.endHour}`}</p>)}</p>
                    </div> */}
                    <div className="flex">
                      <a className="mt-2 text-[#868686] text-sm"
                        href=
                          {`https://${activeRestaurant.websiteUrl.replace(/^https?:\/\//, ``)}`}
                        target="_blank" rel="noreferrer">
                        {activeRestaurant.websiteUrl}</a>
                    </div>
                    <div className=" flex mt-5 justify-start">
                      <GenreBadge
                        value={Object.entries(activeRestaurant.RestaurantSettings.priceRange)}
                        priceRange={activeRestaurant.RestaurantSettings.priceRange} />
                    </div>

                  </>
                    : <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"></h2>}
                  <p className="mt-4 text-gray-500">
                  </p>
                </div>
              </div>

            </div>
            <div className="w-full">
              <div className="min-w-[100%]">
                <div id="fixedHeaderNav" className="flex bg-[#FFFFFF] min-w-full
                 overflow-auto fixed  max-w-[100vw] whitespace-nowrap
                 border-b-2 border-black-100 p-3 flex-col mt-10 justify-center">
                  <ul className="w-[full] inline-flex md:justify-center">
                    {
                      activeRestaurant?.MenuItems.map((item) =>
                        <li key={item.menuItemId} className="mr-6 m-2 h-full font-semibold rounded text-center
                         hover:drop-shadow-xl active:underline transition-all
                         hover:underline hover:cursor-pointer">
                          {item.menuHeaderId}
                        </li>)
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-blue w-3 h-10"/>
            {/* <MenuCards restaurant={activeRestaurant}/> */}
          </div>
        </div>
      </html>
    </>
  );
};
export default RestaurantPage;
