"use client"
import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
  };

  const searchItems = () => {
    // Search logic here
  };

  return (
    <div className="w-[20rem] md:w-[32rem] lg:w-[42rem] mx-auto">
      <form className="bg-white rounded-full flex items-center w-full p-3 shadow-lg">
        <input
          type="text"
          placeholder="Search memes..."
          value={search}
          onChange={handleSearch}
          className="w-full px-4 py-1 text-xl rounded-full bg-white focus:outline-none text-[#9abae4]"
        />
        <div className="pr-2 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-[#9abae4]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </form>
    </div>
  );
}

export default Search;
