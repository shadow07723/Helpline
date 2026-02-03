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

  // ✅ PAGE CHANGE HOTE HI HEADER NORMAL
  useEffect(() => {
    setFullSearch(false);
    setActiveSearchBar(null);
  }, [location.pathname]);

  // ✅ CLICK OUTSIDE TO CLOSE
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fullSearch, setActiveSearchBar]);

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
            placeholder="Search services..."
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
            src="/vite.svg"
            alt="logo"
            className="cursor-pointer"
            onClick={() =>
              navigate("/", {
                state: { service: null },
              })
            }
          />
          <p>hide</p>

          {/* SEARCH BUTTON */}
          <button
            onClick={() => setFullSearch(true)}
            className=" py-2 bg-transparent text-blue-500 bg-white rounded-full font-medium hover:bg-gray-100 flex items-center justify-between w-30 md:w-60 px-4"
          >
            <span className="md:hidden"></span>
            <p className="hidden md:block">Search</p>
            <IoSearch className="scale-150" />
          </button>

          {/* SIGN IN */}
          <button className="text-white">Sign In</button>
        </div>
      )}
    </div>
  );
}

export default Header;
