import React, { useState } from "react";

const SearchBar = ({ brands, showSuggestions, onSearch, onBrandClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleSuggestionClick = (brand) => {
    setSearchTerm(brand);
    onBrandClick(brand);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search brands"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {showSuggestions && (
        <ul className="suggestions">
          {brands
            .filter((brand) =>
              brand.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((brand) => (
              <li key={brand} onClick={() => handleSuggestionClick(brand)}>
                {brand}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
