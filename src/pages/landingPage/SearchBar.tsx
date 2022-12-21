import { NextPage } from 'next';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';
const SearchBar: NextPage = () => {
  const [ searchQuery, setSearchQuery ] = useState(``);
  const { data: searchResult } = trpc.restaurant.searchRestaurant.useQuery({ query: searchQuery });

  console.log(searchResult);

  // const handleSearch = (e) => {
  //   setSearchQuery
  // };
  return (
    <div className="mt-1 flex flex-col relative rounded-md shadow-sm h-10">
      <BsSearch className="absolute top-[0.9rem] left-[0.8rem] text-white" />
      <input
        id="restaurant-search"
        name="restaurant-search"
        type="text"
        autoComplete="search"
        onChange={e => setSearchQuery(e.target.value)}
        required
        className="w-full border-white bg-[#4c94d8] px-11 py-3 text-[#FFF] placeholder-[#FFF] font-semibold leading-[24.38px]
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#4c94d8] focus:ring-white rounded-md"
        placeholder="Search Nearby Restaurants"
      />
      {searchResult && searchResult?.length > 0 ? <div className="bg-[#FFF] transition ease-in duration-500 mt-[0.5px] p-5">
        <ul>
          {searchResult?.map((restaurant) => {
            return (
              <Link key={restaurant.restaurantId} href={`/restaurant/${restaurant.restaurantId}`}>
                <li className="text-left hover:cursor-pointer w-full h-full hover:bg-[#adadad]"
                >{restaurant.restaurantName}</li>
              </Link>
            );
          })}
        </ul>
      </div> : <></>}

    </div>
  );

};

export default SearchBar;
