import React, { useState } from "react";


const SearchBar = ({ brands, onSearch, onBrandClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setShowSuggestions(newSearchTerm.length > 0); 
  };

  const handleBrandSelection = (brand) => {
    setSearchTerm(brand);
    setShowSuggestions(false);
    onBrandClick(brand);
  };

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for brands and categories"
      />
      {showSuggestions && (
        <ul className="suggestions">
          {filteredBrands.map((brand) => (
            <li key={brand} onClick={() => handleBrandSelection(brand)}>
              {brand}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default SearchBar;