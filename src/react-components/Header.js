import React, { useEffect, useState } from "react";
import { searchSuggestionsAPIEndPoint } from "../constants/yt-apis";

function Header() {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);

  const getSearchSuggestions = async () => {
    if (searchText.trim() !== "") {
      const response = await fetch(searchSuggestionsAPIEndPoint + searchText);
      const data = await response.json();
      setSearchSuggestions(data[1]);
    } else {
      setSearchSuggestions([]); // Clear suggestions if searchText is empty
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div id="header" className="flex items-center border-b-2 sticky">
      <img
        src="/assets/navbar_icon.png"
        alt="Navbar Icon"
        className="size-10"
      />
      <img
        src="/assets/Youtube_icon.png"
        alt="Youtube_icon"
        className="w-32 h-8 m-1 "
      />

      <div className="flex items-center justify-center flex-grow">
        <div className="relative w-[60%]">
          {/* Input Box */}
          <input
            type="text"
            className="border rounded-l-3xl pt-2 pb-2 pl-4 w-full mt-2 mb-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestionBox(true)}
            onBlur={() => setShowSuggestionBox(false)}
            placeholder="Search..."
          />
          {/* Dropdown */}

          {showSuggestionBox && searchSuggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border mt-1 shadow-lg z-10 flex flex-col rounded-xl">
              {searchSuggestions.map((item, index) => (
                <button className="text-left ml-1 mt-1 pl-5" key={index}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Button */}
        <button className="bg-[#f0f0f0] w-16 h-full pt-2 pb-2 border rounded-r-3xl flex items-center justify-center mt-2 mb-2">
          <svg id="search-icon" className="w-5 h-6 translate-x-[-4px]">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
