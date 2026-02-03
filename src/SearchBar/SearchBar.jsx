import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

function SearchBar({
  wrapperClass = "",
  inputClass = "",
  dropdownClass = "",
  itemClass = "",
  placeholder = "Search service...",
  id,
  activeSearchBar,
  setActiveSearchBar,
}) {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const navigate = useNavigate();
  const location = useLocation();
  const wrapperRef = useRef(null);
  const itemRefs = useRef([]);

  const isOpen = activeSearchBar === id;

  const pages = [
    { name: "aadhaar", path: "/aadhar" },
    { name: "aayush", path: "/aayush" },
    { name: "account", path: "/account" },
    { name: "pan", path: "/pan" },
    { name: "contact", path: "/contact" },
    { name: "about", path: "/about" },
    { name: "upi", path: "/upi" },
    { name: "doctoron", path: "/doctoron" },
      { name: "aadhaar", path: "/aadhar" },
    { name: "aayush", path: "/aayush" },
    { name: "account", path: "/account" },
    { name: "pan", path: "/pan" },
    { name: "contact", path: "/contact" },
    { name: "about", path: "/about" },
    { name: "upi", path: "/upi" },
    { name: "doctoron", path: "/doctoron" },
    { name: "privacy", path: "/privacy" }, // 4th option example
     // 6th option example
  ];

  const filteredPages = pages.filter((p) =>
    p.name.toLowerCase().startsWith(search.toLowerCase())
  );

  // 🔹 CLICK OUTSIDE → CLOSE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveSearchBar(null);
        setSearch("");
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [setActiveSearchBar]);

  // 🔹 PAGE CHANGE → RESET SEARCH
  useEffect(() => {
    setSearch("");
    setActiveIndex(-1);
    setActiveSearchBar(null);
  }, [location.pathname]);

  // ✅ Scroll active item when activeIndex changes
  useEffect(() => {
    if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleClick = (path) => {
    const matched = pages.find((p) => p.path === path);
    navigate(path, {
      state: { service: matched?.name || null },
    });
    setSearch("");
    setActiveIndex(-1);
    setActiveSearchBar(null);
  };

  const handleSearch = () => {
    if (!search.trim() || filteredPages.length === 0) return;

    // ✅ Scroll to first or active item
    const scrollIndex = activeIndex >= 0 ? activeIndex : 0;
    if (itemRefs.current[scrollIndex]) {
      itemRefs.current[scrollIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }

    const selected =
      activeIndex >= 0 ? filteredPages[activeIndex] : filteredPages[0];
    handleClick(selected.path);
  };

  const handleKeyDown = (e) => {
    if (!filteredPages.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredPages.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filteredPages.length - 1
      );
    }

    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div ref={wrapperRef} className={`relative ${wrapperClass}`}>
      <div className="flex">
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setActiveIndex(-1);
          }}
          onFocus={() => setActiveSearchBar(id)}
          onKeyDown={handleKeyDown}
          className={`border border-gray-300 border-r-0 rounded-tl-full rounded-bl-full p-2 w-full focus:outline-none ${inputClass}`}
        />

        <button
          onClick={handleSearch}
          disabled={!search.trim()}
          className={`px-4 py-2 rounded-tr-full rounded-br-full border-l-0 text-white
            ${
              search.trim()
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          <IoSearch className="scale-150" />
        </button>
      </div>

      {isOpen && search && filteredPages.length > 0 && (
        <ul
          className={`absolute top-full left-0 mt-1 z-[9999] w-full bg-white border border-gray-300 rounded-md max-h-[200px] overflow-y-auto ${dropdownClass}`}
        >
          {filteredPages.map((page, index) => (
            <li
              key={page.path}
              ref={(el) => (itemRefs.current[index] = el)}
              onMouseDown={() => handleClick(page.path)}
              tabIndex={-1}
              className={`px-4 py-2 h-10 cursor-pointer ${
                index === activeIndex ? "bg-blue-100" : "hover:bg-gray-100"
              } ${itemClass}`}
            >
              {page.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;