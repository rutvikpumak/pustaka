import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth, useData } from "../../../context";
import { addToCart, addToWishlist, removeFromWishlist } from "../../../services";
import { calcPercentage, isProductInCart, isProductInWishlist } from "../../../utils/cartUtils";
import "./ProductCard.css";
import { toast } from "react-toastify";

export function ProductCard({ product }) {
  const { dataDispatch, cart, wishlist, drawer } = useData();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const navigate = useNavigate();
  const { token } = useAuth();
  const {
    _id: id,
    img,
    name,
    author,
    price,
    originalPrice,
    isBestSeller,
    rating,
    percentageOff,
  } = product;

  const isInCart = isProductInCart(cart, id);
  const isInWishlist = isProductInWishlist(wishlist, id);

  const addToCartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(dataDispatch, product, token, toast, setBtnDisabled)
      : navigate("/login");
  };

  const wishlistHandler = () => {
    token
      ? isInWishlist
        ? removeFromWishlist(id, dataDispatch, token, toast)
        : addToWishlist(dataDispatch, product, token, toast)
      : navigate("/login");
  };

  return (
    <div key={id} className={`card ${drawer && "disabled-click"}`}>
      <img
        className="card-img"
        src={img}
        alt={name}
        onClick={() => navigate(`/product/${product.id}`)}
      />
      {isBestSeller && <span className="card-badge">Best Seller</span>}
      <span
        role="button"
        className={`wishlist-icon ${isInWishlist ? `wishlist-toggle` : ``}`}
        onClick={() => wishlistHandler()}
        disabled={true}
      >
        <i className="fa fa-heart" aria-hidden="true"></i>
      </span>
      <div className="card-info">
        <div className="">
          <div className="card-title">
            <h3 className="card-title-header" title={name}>
              {name}
            </h3>
            <div className="card-star">
              <p>{rating}</p>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <p className="card-description">{author}</p>
        </div>
        <div className="price">
          <p className="disc-price">₹{price}</p>
          <p className="actual-price">₹{originalPrice}</p>
          <p className="price-percentage">({percentageOff}% OFF)</p>
        </div>
      </div>
      <button
        className="btn default add-cart"
        onClick={() => addToCartHandler()}
        disabled={btnDisabled}
      >
        <i className="fa fa-shopping-cart"></i> {isInCart ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
