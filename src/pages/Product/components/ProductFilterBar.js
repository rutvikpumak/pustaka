import "./ProductFilterBar.css";

import React from "react";

export function ProductFilterBar() {
  const STARS = [1, 2, 3, 4];
  return (
    <div className={`filter-container trans-off`}>
      <div className="filter-head">
        <h4>Filters</h4>
        <p
          //   onClick={() => {
          //     filterDispatch({
          //       type: "CLEAR_FILTER"
          //     });
          //     setDrawer(!drawer);
          //   }}
          className="paragraph-md clr-flt-btn"
        >
          Clear
        </p>
      </div>

      <div className="filter-price">
        <h4>Price</h4>
        <div className="flex-gap">
          <div className="price-range">
            <p>100</p>
            <p>500</p>
            <p>1000</p>
          </div>
          <input
            type="range"
            name="rangeInput"
            className="slider"
            min="100"
            max="1000"
            // value={priceRange}
            // onChange={(e) => {
            //   filterDispatch({
            //     type: "PRICE_RANGE",
            //     payload: e.target.value
            //   });
            // }}
          />
        </div>
      </div>

      <div className="filter-category">
        <h4>Category</h4>
        <div className="flex-gap">
          <label className="select-input">
            <input
              type="checkbox"
              name="light"
              className="checkbox-input"
              //   checked={selfHelp}
              //   onChange={() => {
              //     filterDispatch({ type: "SELF_HELP" });
              //   }}
            />
            <span className="check-desc">Self Help</span>
          </label>
          <label className="select-input">
            <input
              type="checkbox"
              name="light"
              className="checkbox-input"
              //   checked={fiction}
              //   onChange={() => {
              //     filterDispatch({ type: "FICTION" });
              //   }}
            />
            <span className="check-desc">Fiction</span>
          </label>
          <label className="select-input">
            <input
              type="checkbox"
              name="light"
              className="checkbox-input"
              //   checked={nonFiction}
              //   onChange={() => {
              //     filterDispatch({ type: "NON_FICTION" });
              //   }}
            />
            <span className="check-desc">Non Fiction</span>
          </label>
        </div>
      </div>

      <div className="filter-rating">
        <h4>Rating</h4>
        <div className="flex-gap">
          {STARS.map((star) => (
            <label
              key={star}
              className="select-input"
              //   onChange={() => {
              //     filterDispatch({
              //       type: "SORT_BY_RATING",
              //       payload: star
              //     });
              //   }}
            >
              <input
                type="radio"
                name="rating"
                className="radio-input"
                value=""
                // checked={sortByRating && sortByRating === star}
              />
              <span className="check-desc">{star} Stars & above</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-sort">
        <h4>Sort by</h4>
        <div className="flex-gap">
          <label className="select-input">
            <input
              type="radio"
              name="sort"
              className="radio-input"
              //   checked={sortBy && sortBy === "lowToHigh"}
              //   onChange={() => {
              //     filterDispatch({ type: "SORT_BY", payload: "lowToHigh" });
              //   }}
            />
            <span className="check-desc">Price - Low to High</span>
          </label>
          <label className="select-input">
            <input
              type="radio"
              name="sort"
              className="radio-input"
              //   checked={sortBy && sortBy === "highToLow"}
              //   onChange={() => {
              //     filterDispatch({ type: "SORT_BY", payload: "highToLow" });
              //   }}
            />
            <span className="check-desc">Price - High to Low</span>
          </label>
        </div>
      </div>
    </div>
  );
}
