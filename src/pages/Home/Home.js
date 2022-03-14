import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

export function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-img-container">
          <div className="bg-img-container"></div>
          <div className="home-page-text">
            <div className="main-text">
              <h4>
                Welcome to <span className="title">Pustaka</span>,
              </h4>
              <div>
                <h1 className="main-text-title">For All Your</h1>
                <h1 className="main-text-title">Reading Needs</h1>
              </div>
              <Link to="/product">
                <button className="link-btn shop-now-btn">SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className="overlay"></div>
        </div>

        <div className="category-container flex-center">
          <div className="container">
            <div className="category-heading text-center">
              <h2>Featured Book Categories</h2>
              <p className="paragraph-md">
                There are many categories of books available at Pustaka, Choose
                your favorite one now.
              </p>
            </div>
            <div className="category-row">
              {categories &&
                categories.map((ele) => {
                  return (
                    <div className="box" key={ele._id}>
                      <div className="detail-box text-center">
                        <h4>{ele.categoryName}</h4>
                        <p className="paragraph-sm">{ele.description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="footer flex-center">
        <h5>
          Made with <i className="fa fa-heart" aria-hidden="true"></i> by Rutvik
          Umak{" "}
        </h5>
        <div className="icon-bar">
          <a href="https://github.com/rutvikpumak" className="github-logo">
            <i className="fa fa-github "></i>
          </a>
          <a href="https://twitter.com/rutvikumak13" className="twitter">
            <i className="fa fa-twitter "></i>
          </a>
          <a href="https://linkedin.com/in/rutvikumak" className="linkedin">
            <i className="fa fa-linkedin "></i>
          </a>
        </div>
        <p className="paragraph-sm">© 2022</p>
      </div>
    </>
  );
}
