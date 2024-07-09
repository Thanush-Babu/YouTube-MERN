import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./Search_Bar.css";
import SearchList from "./SearchList/Search_List";

function SearchBar(CurrentUser) {
  const [isFocused, setIsFocused] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleUser = () => {
    CurrentUser ? setIsUser(true) : setIsUser(false);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState(false);
  const Titlearray = [
    "search 1",
    "search 2",
    "animation video",
    "movies",
  ].filter((q) => q.toUpperCase().includes(searchQuery.toUpperCase()));

  return (
    <>
      {/* (Search) */}
      <div className="navbar-center">
        {/* <div className="search-bar-container"> */}
        <div className={`input-container ${isFocused ? "focused" : ""}`}>
          <i
            className={`fas fa-search search-icon-input${isUser ? "user" : ""}`}
          ></i>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onClick={(e) => {
              setSearchList(true);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <button className="search-button">
          <Link style={{ color: "white", textDecoration: "none" }}>
            <FaSearch className="search-icon" size={20} />
          </Link>
          {/* <span class="material-symbols-outlined">
                            search
                        </span> */}
        </button>

        <button className="voice-button">
          <i class="fas fa-microphone fa-sm"></i>
        </button>

        {searchQuery && searchList && (
          <SearchList setSearchQuery={setSearchQuery} Titlearray={Titlearray} />
        )}

        {/* </div> */}
      </div>
    </>
  );
}

export default SearchBar;
