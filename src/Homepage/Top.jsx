import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function Top({ activeSearchBar, setActiveSearchBar }) {
  return (
    <div>
      <img src="Homeposter1.png" alt="" className="h-150 w-full"/>
      <div className="h-30 w-full bg-transparent flex justify-center  items-center ">
        <SearchBar
          id="top1"
          wrapperClass="w-64 "
          inputClass="w-full h-10 rounded-md bg-white border  text-center text-green-900 text-lg px-4"
          dropdownClass="absolute top-12 left-0 right-0 bg-gray-50 border rounded shadow-lg"
          itemClass="hover:bg-gray-200 cursor-pointer "
          placeholder="Quick search"
          activeSearchBar={activeSearchBar}
          setActiveSearchBar={setActiveSearchBar}
        />
      </div>
    </div>
  );
}

export default Top;
