import Link from 'next/link';
import Image from 'next/image';
import { trpc } from '../../../utils/trpc';

const SearchCards: React.FC = () => {

  const { data: restaurantArray } = trpc.restaurant.getRestaurants.useQuery({ isApproved: true });
  return (
    <>
      <div className="w-full">
        <ul role="list" className="space-y-3 w-full">
          {restaurantArray?.map((item) =>
            <>
              <div className=" m-5 mb-10">
                <li key={item.restaurantAddressId} className="bg-white shadow
              hover:shadow-md  transition-all overflow-hidden w-[100%] sm:rounded-md">
                  <Link href={{
                    pathname: `/restaurant/[restaurantId]`,
                    query: { restaurantId: item.restaurantId },
                  }}>
                    <div className="flex flex-col cursor-pointer">
                      <div className="max-w-[100%] p-3 cursor-pointer">
                        <Image width={`1300`} height={`500`} className="h-96 object-contain rounded"
                          src={item?.RestaurantSettings?.restaurantThumbnailImageUrl ??
                            `https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2
                          .1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                          alt="" />
                      </div>

                      <div className=" flex flex-col pl-6 pt-6 text-left w-[50%]">
                        <h5 className="text-gray-900 text-[1.5rem] mb-1 font-bold">
                          {item.restaurantName ?? `My Restaurant`}
                        </h5>
                        <div className="inline-flex space-x-2">
                          {/* ADD GENRE OF RESTAURANT HERE */}
                          {/* <GenreBadge
                            value={Object.entries(item.RestaurantSettings.priceRange)}
                            priceRange={item.RestaurantSettings.priceRange} /> */}
                        </div>
                        <h3 className="mt-2 mb-5 text-[#5f5f5f] font-medium">{item.restaurantDescription}</h3>

                      </div>
                    </div>
                  </Link>
                </li>

              </div>
            </>)
          }
        </ul >
      </div >
    </>
  );
};
export default SearchCards;
