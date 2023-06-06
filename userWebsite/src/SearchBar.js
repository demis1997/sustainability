import React, { useState } from "react";

const SearchBar = ({ brands, showSuggestions, onSearch, onBrandClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleSuggestionClick = (brand) => {
    setSearchTerm(brand);
    onBrandClick(brand);
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 1000); // Adjust the duration as needed
  };

  return (
    <div className={`search-bar ${isSearching ? "searching" : ""}`}>
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
