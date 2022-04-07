import React, { useEffect, useState } from "react";
import { useData } from "../../context";
import "./Product.css";
import { ProductCard } from "./components/ProductCard";
import { ProductFilterBar } from "./components/ProductFilterBar";
import { filterData, sortData } from "../../utils";
import { searchProduct } from "../../utils/getFilterData";

export function Product() {
  const {
    category,
    products: data,
    sortBy,
    priceRange,
    sortByRating,
    setLoader,
    search,
    drawer,
    setDrawer,
    changeTitle,
  } = useData();

  const searchData = searchProduct([...data], search);
  const filteredData = filterData([...searchData], category);
  const sortedData = sortData([...filteredData], sortBy, priceRange, sortByRating);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    changeTitle("Products");
  }, []);
  return (
    <div className="product-main-container">
      <ProductFilterBar />
      <div className="product-list-container" onClick={() => drawer && setDrawer(!drawer)}>
        <div className="product-list-header">
          {sortedData.length > 0 ? (
            <>
              <h3>Showing All Products</h3>
              <p className="paragraph-sm">({sortedData.length} products)</p>
            </>
          ) : (
            data.length > 0 && <h1>Sorry , Products are not available for chosen category.</h1>
          )}
        </div>

        <div className="responsive-grid">
          {sortedData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
