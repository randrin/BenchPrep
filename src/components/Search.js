import React from "react";

const Search = ({ placeholder, handleChange }) => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="form-control bench-prep-input-text"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <i id="bench-prep-icon-search" className="fas fa-search"></i>
    </div>
  );
};
export default Search;
