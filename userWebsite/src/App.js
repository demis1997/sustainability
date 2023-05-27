import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BrandPage from "./BrandPage";
import "./App.css";

const brands = [
  {
    name: "Gucci",
    ethicality: "High",
    supplyCountry: "Italy",
    certification: "Certified",
    overallRating: "4.5",
    vegan: "No",
    website: "gucci.com",
    price: "$$$",
    summary: "We are rich",
    popularItems: [
      {
        name: "Red Dress",
        link: "https://reddress.com",
        image: "red-dress.jpg",
      },
      {
        name: "Hoodie",
        link: "https://hoodie.com",
        image: "hoodie.jpg",
      },
      {
        name: "Hat",
        link: "https://hat.com",
        image: "hat.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Cos",
        link: "brand/cos",
        image: "cos.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Cos",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "cosstores.com",
    price: "$$",
    summary: "Cos summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Asos",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "Asos.com",
    price: "$$",
    summary: "Asos summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Nike",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "Nike.com",
    price: "$$",
    summary: "Nike summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Adidas",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "Adidas.com",
    price: "$$",
    summary: "Adidas summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Puma",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "Puma.com",
    price: "$$",
    summary: "Puma summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Under Armour",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "cosstores.com",
    price: "$$",
    summary: "Under Armour summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "DR.Martens",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "DR.Martens.com",
    price: "$$",
    summary: "DR.Martens summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Balenciaga",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "Balenciaga.com",
    price: "$$",
    summary: "Balenciaga summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Tom Ford",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "TomFord.com",
    price: "$$",
    summary: "Tom Ford summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Emporio Armani",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "armani.com",
    price: "$$",
    summary: "Armani summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Giorgio Armani",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "armani.com",
    price: "$$",
    summary: "Armani summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
  {
    name: "Yves Saint Laurent",
    ethicality: "Medium",
    supplyCountry: "Various",
    certification: "Not certified",
    overallRating: "4.0",
    vegan: "Yes",
    website: "yvesaintlaurent.com",
    price: "$$",
    summary: "Yves Saint Laurent summary",
    popularItems: [
      {
        name: "Item 1",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
      {
        name: "Item 2",
        link: "https://example.com",
        image: "placeholder-image.jpg",
      },
    ],
    similarBrands: [
      {
        name: "Gucci",
        link: "brand/gucci",
        image: "gucci.jpg",
      },
      {
        name: "Asos",
        link: "brand/asos",
        image: "asos.jpg",
      },
    ],
  },
];

const App = () => {
  const [brandName, setBrandName] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (searchTerm) => {
    setBrandName(searchTerm);
    setShowSuggestions(searchTerm.trim().length > 0);
  };

  const handleBrandClick = (brand) => {
    if (brand === "Cos") {
      setBrandName(brand);
      setShowSuggestions(false);
    } else if (brand === "Asos") {
      // Replace the following line with the logic to navigate to the Asos brand page in your app
      console.log("Navigate to Asos brand page");
    } else {
      setBrandName(brand);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="app">
      <header>
        <div className="logo">Clarity</div>
        <div className="contact">
          <a href="mailto:contact.clarity@gmail.com">Contact</a>
        </div>
      </header>
      <div className="content">
        <SearchBar
          brands={brands.map((brand) => brand.name)}
          showSuggestions={showSuggestions}
          onSearch={handleSearch}
          onBrandClick={handleBrandClick}
        />
        {brandName && (
          <BrandPage
            brandName={brandName}
            brands={brands}
            onBrandClick={handleBrandClick}
          />
        )}
      </div>
    </div>
  );
};

export default App;
