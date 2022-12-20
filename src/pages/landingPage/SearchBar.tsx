import { NextPage } from 'next';
import { useState } from 'react';
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
      <input
        id="restaurant-search"
        name="restaurant-search"
        type="search"
        autoComplete="search"
        onChange={e => setSearchQuery(e.target.value)}
        required
        className="w-full border-white px-11 py-3 placeholder-gray-500
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
        placeholder="Search Nearby Restaurants"
      />
      {searchResult && searchResult?.length > 0 ? <div className="bg-[#FFF] transition ease-in duration-500 mt-[0.5px] p-5">
        <ul>
          {searchResult?.map((restaurant) => {
            return (
              <li className="text-left hover:cursor-pointer w-full h-full hover:bg-[#adadad]"
                key={restaurant.restaurantId}>{restaurant.restaurantName}</li>
            );
          })}
        </ul>
      </div> : <></>}

    </div>
  );

};

export default SearchBar;
