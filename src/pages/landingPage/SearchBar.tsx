import { SearchIcon } from '../reusableItems/icons/icons';

export default function SearchBar() {
  return (
    <div className="mt-1 flex flex-col md:flex-row relative rounded-md shadow-sm h-10">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon />
      </div>
      <input
        id="email-address"
        name="email-address"
        type="email"
        autoComplete="email"
        required
        className="w-full border-white px-11 py-3 placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
        placeholder="Search Nearby Restaurants"
      />
      <button
        type="submit"
        className=" flex items-center md:self-auto self-end justify-center px-1
        py-1 md:px-5 md:py-3 border border-transparent shadow text-base font-medium
        rounded-md text-white bg-[#FF6F43] hover:bg-[#ee8c2a] focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700
        focus:ring-white md:mt-0 mt-3 sm:ml-3 md:w-auto w-[30%] sm:flex-shrink-0"
      >
        Search
      </button>
    </div>
  );
}
