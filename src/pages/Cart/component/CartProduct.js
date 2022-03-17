import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../../context";
import { calcPercentage, isProductInWishlist } from "../../../utils/cartUtils";
import {
  addToWishlist,
  removeFromCart,
  updateQtyFromCart,
} from "../../../services";

export function CartProduct({ product }) {
  const { dataDispatch, wishlist } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const isInWishlist = isProductInWishlist(wishlist, product._id);

  const cartClickHandler = (type) =>
    updateQtyFromCart(product._id, dataDispatch, token, type);

  const moveToWishlistHandler = () => {
    addToWishlist(dataDispatch, product, token);
    removeFromCart(product._id, dataDispatch, token);
  };

  return (
    <div key={product._id} className="card horizontal-container">
      <div className="card-horizontal">
        <img
          className="card-img horizontal-img"
          src={product.img}
          alt={product.name}
        />
        <div className="card-info">
          <div className="card-title">
            <div>
              <h4>{product.name}</h4>
              <p className="card-description">{product.author}</p>
            </div>
          </div>
          <div className="price">
            <p className="disc-price">₹{product.price}</p>
            <p className="actual-price">₹{product.originalPrice}</p>
            <p className="price-percentage">
              {" "}
              ({calcPercentage(product.price, product.originalPrice)}% OFF)
            </p>
          </div>
          <div className="qty">
            <button
              className="minus"
              onClick={() => {
                cartClickHandler("DEC_QTY");
              }}
              disabled={product.qty === 1 ? true : false}
            >
              -
            </button>
            <span className="qty-count">{product.qty}</span>
            <button className="add" onClick={() => cartClickHandler("INC_QTY")}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="horizontal-btn">
        <button
          className="remove-btn"
          onClick={() => {
            removeFromCart(product._id, dataDispatch, token);
          }}
        >
          REMOVE
        </button>
        <button
          className="later-btn"
          onClick={() =>
            isInWishlist ? navigate("/wishlist") : moveToWishlistHandler()
          }
        >
          {isInWishlist ? "ALREADY IN WISHLIST" : "MOVE TO WISHLIST"}
        </button>
      </div>
    </div>
  );
}
