import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BrandPage from "./BrandPage";
import "./App.css";

const brands = [
  {
    name: "Gucci",
    website: "gucci.com",
    summary: "We are rich",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "cosstores.com",
    summary: "LOREM IPSUME DOLORES PLEASE WORK ATE",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "asos.com",
    summary: "Asos summary",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "nike.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "adidas.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "pume.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "underarmour.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "drmartens.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "balenciaga.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "tom-ford.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "armani.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "armani.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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
    website: "yvesaintlaurent.com",
    ethicality: "7.3",
    certification: "HHC, PPC, ALTPS",
    overallRating: "4.5",
    price: "$$$",
    retailers: "Lyst.com, Farfetch, MR.Porter",
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

const randomTextOptions = [
  "Transparent sustainable fashion",
  "Understand your purchases!",
  "Let your next purchase not harm the Antarctic"
];

const App = () => {
  const [brandName, setBrandName] = useState("");
  const [randomText, setRandomText] = useState(
    "Giving you clarity on your favourite brands"
  );

  const handleSearch = (searchTerm) => {
    setBrandName(searchTerm);
    setRandomText(
      randomTextOptions[Math.floor(Math.random() * randomTextOptions.length)]
    );
  };

  const handleBrandClick = (brand) => {
    setBrandName(brand);
  };

  return (
    <div className="app">
      <header>
        <div className="logo">Clarity</div>
        <div className="contact">
          <a href="mailto:contact.clarity@gmail.com" className="button">
            Contact
          </a>
        </div>
      </header>
      <div className="content">
        {!brandName && (
          <div className="intro-text">
            <h2>{randomText}</h2>
          </div>
        )}
        <SearchBar
          brands={brands.map((brand) => brand.name)}
          showSuggestions={!brandName} // Show suggestions only when brandName is empty
          onSearch={handleSearch}
          onBrandClick={handleBrandClick}
          randomTextOptions={randomTextOptions} // Pass the random text options array
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