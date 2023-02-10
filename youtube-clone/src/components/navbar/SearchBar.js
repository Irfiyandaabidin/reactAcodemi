import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  console.log(inputSearch);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputSearch);
    navigate(`/search/${inputSearch}`);
    setInputSearch("");
  };
  return (
    <form className="relative" onSubmit={submitHandler}>
      <input
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        value={inputSearch}
        placeholder="Search"
        type="text"
        className="outline-none p-2 rounded-lg text-sm w-50 sm:w-80"
      />
      <button type="submit">
        <MagnifyingGlassIcon className="text-gray-400 bg-white absolute h-6 top-2 right-2" />
      </button>
    </form>
  );
};

export default SearchBar;
