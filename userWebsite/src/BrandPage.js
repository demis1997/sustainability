import React, { useEffect, useRef } from "react";

const BrandPage = ({ brandName, brands, onBrandClick }) => {
  const brand = brands.find((b) => b.name === brandName);
  const containerSmallRef = useRef(null);
  const containerExtraSmallRef = useRef(null);

  useEffect(() => {
    const setContainerHeight = () => {
      if (containerSmallRef.current && containerExtraSmallRef.current) {
        const containerSmallHeight = containerSmallRef.current.offsetHeight;
        containerExtraSmallRef.current.style.height = `${containerSmallHeight}px`;
      }
    };

    setContainerHeight();
    window.addEventListener("resize", setContainerHeight);
    return () => {
      window.removeEventListener("resize", setContainerHeight);
    };
  }, []);

  if (!brand) {
    return <div>Looks like we didn't add this brand yet!</div>;
  }

  return (
    <div className="brand-page">
      <div className="brand-page-containerBig">
        <div className="brand-info">
          <h1 className="brand-title">{brand.name}</h1>
          <p>{brand.summary}</p>
          <div className="clarity-rating">
            <h3>Clarity:</h3>
            <p>{brand.overallRating}</p>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <td>Budget:</td>
              <td>{brand.price}</td>
            </tr>
            <tr>
              <td>Ethicality:</td>
              <td>{brand.ethicality}</td>
            </tr>
            <tr>
              <td>Certifications:</td>
              <td>{brand.certification}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{brand.website}</td>
            </tr>
            <tr>
              <td>Retailers:</td>
              <td>{brand.retailers}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="brand-page-containerWrapper">
        <div className="brand-page-containerSmall" ref={containerSmallRef}>
          <h2>Popular Items:</h2>
          <div className="popular-items">
            {brand.popularItems.map((item, index) => (
              <div
                className={`item item-${index % 2 === 0 ? "green" : "beige"}`}
                key={index}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="item-link"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                  <h3 className="item-title">{item.name}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="brand-page-containerExtraSmall" ref={containerExtraSmallRef}>
          <h2>Similar Brands:</h2>
          <div className="similar-brands">
            {brand.similarBrands.map((similarBrand, index) => (
              <a
                href={similarBrand.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`brand brand-${index % 2 === 0 ? "green" : "beige"}`}
                key={index}
              >
                <h3 className="brand-title">{similarBrand.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
