import React, { useEffect } from "react";
import { useData } from "../../context";
import { Link } from "react-router-dom";
import "./Product.css";
import { ProductCard } from "./components/ProductCard";
import { ProductFilterBar } from "./components/ProductFilterBar";
import { filterData, sortData } from "../../utils";

export function Product() {
  const {
    category,
    products: data,
    sortBy,
    priceRange,
    sortByRating,
  } = useData();

  const filteredData = filterData([...data], category);
  const sortedData = sortData(
    [...filteredData],
    sortBy,
    priceRange,
    sortByRating
  );

  return (
    <div className="product-main-container">
      <ProductFilterBar />
      <div className="product-list-container">
        <div className="product-list-header">
          {sortedData.length > 0 ? (
            <>
              <h3>Showing All Products</h3>
              <p className="paragraph-sm">({sortedData.length} products)</p>
            </>
          ) : (
            data.length > 0 && (
              <h1>Sorry , Products are not available for chosen category.</h1>
            )
          )}
        </div>

        <div className="responsive-grid">
          {sortedData.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
