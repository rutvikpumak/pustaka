import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";
import { addToCart, removeFromWishlist } from "../../../services";
import { calcPercentage, isProductInCart } from "../../../utils/cartUtils";
import { toast } from "react-toastify";

export default function WishlistCard({ product, cart, dataDispatch }) {
  const { token } = useAuth();
  const navigate = useNavigate();
  const isInCart = isProductInCart(cart, product._id);

  const moveToCartHandler = () => {
    removeFromWishlist(product._id, dataDispatch, token, toast);
    addToCart(dataDispatch, product, token, toast);
  };

  return (
    <div className="wishlist-item">
      <img src={product.img} alt="" />
      <div className="item-info">
        <header>
          <div className="item-desc">
            <h4 className="card-title-header">{product.name}</h4>
            <p className="card-description">{product.author}</p>
            <div className="price">
              <p className="disc-price">₹{product.price}</p>
              <p className="actual-price">₹{product.originalPrice}</p>
              <p className="price-percentage">
                {" "}
                ({calcPercentage(product.price, product.originalPrice)}% OFF)
              </p>
            </div>
          </div>
          <div className="delete-icon">
            <i
              className="fa fa-trash-o"
              aria-hidden="true"
              onClick={() => removeFromWishlist(product._id, dataDispatch, token, toast)}
            />
          </div>
        </header>

        <button
          className="btn default move-to-cart"
          onClick={() => (isInCart ? navigate("/cart") : moveToCartHandler())}
        >
          {isInCart ? "Already in Cart" : "Move to Cart"}
        </button>
      </div>
    </div>
  );
}
