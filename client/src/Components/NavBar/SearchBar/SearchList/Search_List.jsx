import React from "react";
import { FaSearch } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import "./Search_List.css";
function SearchList({ Titlearray, setSearchQuery }) {
  return (
    <>
      <div className="Search_List_Container">
        <ul className="Search_List" style={{ listStyleType: "none" }}>
          {Titlearray.map((searchTitle) => {
            return (
              <>
                <li
                  className="search-item"
                  key={searchTitle}
                  onClick={(e) => setSearchQuery(searchTitle)}
                >
                  <div className="icon-and-title">
                    <GoHistory className="history-icon" size={20} />
                    <div className="title">{searchTitle}</div>
                  </div>

                  <button className="Remove-btn">Remove</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SearchList;
