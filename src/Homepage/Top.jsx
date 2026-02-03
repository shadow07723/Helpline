import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Top({ activeSearchBar, setActiveSearchBar }) {
  return (
    <div className="h-60 w-full bg-amber-100 flex justify-center  items-center ">
      <SearchBar
        id="top1"
        wrapperClass="w-64 "
        inputClass="w-full h-10 rounded-md bg-white border  text-center px-4"
        dropdownClass="absolute top-12 left-0 right-0 bg-gray-50 border rounded shadow-lg"
        itemClass="hover:bg-gray-200 cursor-pointer text-sm"
        placeholder="Quick search"
        activeSearchBar={activeSearchBar}
        setActiveSearchBar={setActiveSearchBar}
      />
    </div>
  );
}

export default Top;