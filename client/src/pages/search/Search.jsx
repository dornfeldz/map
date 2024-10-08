import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function Search() {
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        className="bg-gray-300 px-4 py-1 rounded-full w-[85%] mb-3 mt-1"
      />
      <h2 className="font-bold text-2xl px-6 text-center mt-20">
        Search for services, shops, people and more!
      </h2>
    </div>
  );
}

export default Search;
