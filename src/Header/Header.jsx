import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";

function Header({ activeSearchBar, setActiveSearchBar }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [fullSearch, setFullSearch] = useState(false);
  const searchWrapperRef = useRef(null);

  // 🔹 LANGUAGE STATE
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("lang") || "en",
  );

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "bn", name: "বাংলা" },
  ];
  const langRef = useRef(null);

  // 🔹 TEXTS FOR MULTI-LANGUAGE
  const langTexts = {
    en: {
      search: "Search",
      signIn: "Sign In",
      searchPlaceholder: "Search...",
    },
    hi: {
      search: "खोजें",
      signIn: "साइन इन",
      searchPlaceholder: " खोजें...",
    },
    bn: {
      search: "খুঁজুন",
      signIn: "সাইন ইন",
      searchPlaceholder: " খুঁজুন...",
    },
  };

  // ✅ PAGE CHANGE HOTE HI HEADER NORMAL
  useEffect(() => {
    setFullSearch(false);
    setActiveSearchBar(null);
  }, [location.pathname]);

  // ✅ CLICK OUTSIDE TO CLOSE SEARCH OR LANGUAGE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fullSearch &&
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target)
      ) {
        setFullSearch(false);
        setActiveSearchBar(null);
      }

      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fullSearch]);

  // 🔹 LANGUAGE SELECT FUNCTION
  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    localStorage.setItem("lang", langCode);
    setShowLangDropdown(false);
  };

  return (
    <div className="w-full bg-blue-600 p-4">
      {/* 🔍 FULL WIDTH SEARCH MODE */}
      {fullSearch ? (
        <div
          ref={searchWrapperRef}
          className="flex items-center gap-3 w-full relative"
        >
          <SearchBar
            id="header"
            wrapperClass="w-full"
            inputClass="h-12 rounded-md bg-white text-left px-4"
            dropdownClass="absolute top-14 left-0 right-0 bg-white border rounded-md z-50"
            itemClass="p-3 hover:bg-gray-100 cursor-pointer"
            placeholder={langTexts[selectedLanguage]?.searchPlaceholder}
            activeSearchBar={activeSearchBar}
            setActiveSearchBar={setActiveSearchBar}
          />

          {/* ❌ CLOSE */}
          <button
            onClick={() => {
              setFullSearch(false);
              setActiveSearchBar(null);
            }}
            className="text-white text-2xl font-bold px-3"
          >
            <AiOutlineCloseCircle className="scale-150" />
          </button>
        </div>
      ) : (
        /* 🧭 NORMAL HEADER */
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <img
            src="/Colorful_Modern_Infinity_.png"
            alt="logo"
            className="cursor-pointer h-12 w-19"
            onClick={() =>
              navigate("/", {
                state: { service: null },
              })
            }
          />

          {/* 🔹 LANGUAGE DROPDOWN */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="text-white font-semibold px-3 py-2 rounded hover:bg-blue-500"
            >
              {languages.find((l) => l.code === selectedLanguage)?.name} ▼
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded shadow-md z-50">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className="p-2 hover:bg-gray-100 cursor-pointer text-black"
                  >
                    {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SEARCH BUTTON */}
          <button
            onClick={() => setFullSearch(true)}
            className=" py-2 bg-transparent text-blue-500 bg-white rounded-full font-medium hover:bg-gray-100 flex items-center justify-between w-30 md:w-60 px-4"
          >
            <span className="md:hidden"></span>
            <p className="block md:block">
              {langTexts[selectedLanguage]?.search}
            </p>
            <IoSearch className="scale-150" />
          </button>

          {/* SIGN IN */}
          <button className="text-white">
            {langTexts[selectedLanguage]?.signIn}
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
