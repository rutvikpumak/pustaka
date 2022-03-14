import React, { useEffect } from "react";
import axios from "axios";
import { useData } from "../../context";
import "./Product.css";
import { ProductCard } from "./components/ProductCard";
import { ProductFilterBar } from "./components/ProductFilterBar";
import { Link } from "react-router-dom";

export function Product() {
  const { products, setProducts } = useData();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("api/products");
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="product-main-container">
      <ProductFilterBar />
      <div className="product-list-container">
        <div className="product-list-header">
          <h3>Showing All Products</h3>
          <p className="paragraph-sm">({products.length} products)</p>
        </div>

        <div className="responsive-grid">
          {products.map((product) => (
            <Link key={product._id} to="/productPage">
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
