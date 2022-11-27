import Link from 'next/link';
import Image from 'next/image';
import GenreBadge from '../../reusableItems/components/GenreBadge';

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
  restaurantThumbnailImageUrl: string;
}
interface IRestaurant {
  RestaurantAddress: IRestaurantAddress;
  RestaurantInformation: any[];
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
const SearchCards: React.FC<{ restaurantArray: IRestaurant[] }> = ({ restaurantArray }) => {
  console.log(restaurantArray, `Restaurant Array`);

  return (
    <>
      <div className="w-full">
        <ul role="list" className="space-y-3 w-full">
          {restaurantArray.map((item: IRestaurant) =>
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
                        <Image width={`500`} height={`100`} className="h-96 object-contain rounded"
                          src={item.RestaurantSettings.restaurantThumbnailImageUrl ??
                            `https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2
                          .1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                          alt="" />
                      </div>

                      <div className=" pl-6 pt-6 text-left w-[50%]">
                        <h5 className="text-gray-900 text-[1.5rem] mb-1 font-medium">
                          {item.restaurantName ?? `My Restaurant`}
                        </h5>
                        <div className="inline-flex space-x-2">
                          {/* ADD GENRE OF RESTAURANT HERE */}
                          <GenreBadge
                            value={Object.entries(item.RestaurantSettings.priceRange)}
                            priceRange={item.RestaurantSettings.priceRange} />
                        </div>
                        <h3 className="mt-5">{item.restaurantDescription}</h3>

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
