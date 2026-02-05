import React, { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { LanguageContext } from "../LanguageContext.jsx";

function Top({ activeSearchBar, setActiveSearchBar }) {
  const { lang } = useContext(LanguageContext);

  const t = {
    en: {
      placeholder: "Quick search",
    },
    hi: {
      placeholder: "तेज़ खोज",
    },
  }[lang];

  return (
    <div>
      <img src="Homeposter1.png" alt="" className="h-150 w-full" />
      <div className="h-30 w-full bg-transparent flex justify-center items-center">
        <SearchBar
          id="top1"
          wrapperClass="w-64"
          inputClass="w-full h-10 rounded-md bg-white border text-center text-green-900 text-lg px-4"
          dropdownClass="absolute top-12 left-0 right-0 bg-gray-50 border rounded shadow-lg"
          itemClass="hover:bg-gray-200 cursor-pointer"
          placeholder={t.placeholder} // 🔹 Dynamically set placeholder
          activeSearchBar={activeSearchBar}
          setActiveSearchBar={setActiveSearchBar}
        />
      </div>
    </div>
  );
}

export default Top;
