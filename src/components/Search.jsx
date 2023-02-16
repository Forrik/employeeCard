import React from "react";

import style from "./Search.css";

const Search = ({ searchValue, setSearchValue }) => {
  
  return (
    <div className="search">
      <div className="search__wrapper">
        <svg className="popup__svg-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.5 17c1.71 0 3.287-.573 4.55-1.537l4.743 4.744a1 1 0 0 0 1.414-1.414l-4.744-4.744A7.5 7.5 0 1 0 9.5 17zM15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            fill="#000000"
          />
        </svg>
        <input
          onChange={(event) => setSearchValue(event.target.value)}
          className="search__input"
          value={searchValue}
          placeholder="Введите ФИО"
          type="text"
        />
        {searchValue && (
          <svg
            onClick={() => setSearchValue("")}
            className="popup__svg-close"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
              fill="#000000"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Search;
