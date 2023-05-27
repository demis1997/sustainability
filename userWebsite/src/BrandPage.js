import React from "react";

const BrandPage = ({ brandName, brands, onBrandClick }) => {
  const brand = brands.find((b) => b.name === brandName);

  if (!brand) {
    return <div>Brand not found</div>;
  }

  const getFieldSummary = (field) => {

    return `${field} summary`;
  };

  return (
    <div className="brand-page">
      <h1 className="brand-title">{brand.name}</h1>
      <p>{brand.summary}</p>

      <div className="website-price">
        <div className="field">
          <h3>Website:</h3>
          <p>{brand.website}</p>
        </div>
        <div className="field">
          <h3>Price:</h3>
          <p>{brand.price}</p>
        </div>
      </div>

      <h2>Table:</h2>
      <table>
        <tbody>
          <tr>
            <td>Ethicality</td>
            <td>{brand.ethicality}</td>
            <td>{getFieldSummary(brand.ethicality)}</td>
          </tr>
          <tr>
            <td>Supply Country</td>
            <td>{brand.supplyCountry}</td>
            <td>{getFieldSummary(brand.supplyCountry)}</td>
          </tr>
          <tr>
            <td>Certification</td>
            <td>{brand.certification}</td>
            <td>{getFieldSummary(brand.certification)}</td>
          </tr>
          <tr>
            <td>Overall Rating</td>
            <td>{brand.overallRating}</td>
            <td>{getFieldSummary(brand.overallRating)}</td>
          </tr>
          <tr>
            <td>Vegan</td>
            <td>{brand.vegan}</td>
            <td>{getFieldSummary(brand.vegan)}</td>
          </tr>
          <tr>
            <td>Coupon Code</td>
            <td>Enter code: XXXX for a discount</td>
            <td>{getFieldSummary("Coupon Code")}</td>
          </tr>
        </tbody>
      </table>

      <h2>Popular Items:</h2>
      <div className="popular-items">
        {brand.popularItems.map((item, index) => (
          <div className={`item item-${index % 2 === 0 ? "green" : "beige"}`} key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.name} />
              <h3 className="item-title">{item.name}</h3>
            </a>
          </div>
        ))}
      </div>

      <h2>Similar Brands:</h2>
      <div className="similar-brands">
        {brand.similarBrands.map((similarBrand, index) => (
          <div className={`brand brand-${index % 2 === 0 ? "green" : "beige"}`} key={index}>
            <a href={similarBrand.link} target="_blank" rel="noopener noreferrer">
              <img src={similarBrand.image} alt={similarBrand.name} />
              <h3 className="brand-title">{similarBrand.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
