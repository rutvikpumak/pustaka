import React from "react";
import "./ProductPage.css";
import { useNavigate, useParams } from "react-router";
import { useAuth, useData } from "../../context";
import { ACTION_TYPE, calcPercentage } from "../../utils";
import { addToCart, addToWishlist } from "../../services";
import { isProductInCart, isProductInWishlist } from "../../utils/cartUtils";

export function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const { products, cart, dataDispatch, wishlist } = useData();
  const product = products?.find((product) => product._id === productId);
  const {
    _id: id,
    img,
    name,
    author,
    price,
    originalPrice,
    isBestSeller,
    category,
    rating,
  } = product;
  const isInCart = isProductInCart(cart, id);
  const isInWishlist = isProductInWishlist(wishlist, id);

  const addToCartHandler=()=> {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(dataDispatch, product, token)
      : navigate("/login");
  }

  const addToWishlistHandler=()=> {
    token
      ? isInWishlist
        ? navigate("/wishlist")
        : addToWishlist(dataDispatch, product, token)
      : navigate("/login");
  }

  return (
    <div className="single-card-container flex-center">
      <div className="single-card flex-center">
        <div className="single-card-left">
          <img className="single-card-img" src={img} alt="" />
          {isBestSeller && <span className="card-badge">Best Seller</span>}
        </div>

        <div className="single-card-right">
          <h3 className="single-card-title-header">{name}</h3>
          <div className="star-ratings">
            {rating}
            <i className="fa fa-star"></i>
          </div>
          <div className="price">
            <p className="disc-price">₹{price}</p>
            <p className="actual-price">₹{originalPrice}</p>
            <p className="price-percentage">
              {calcPercentage(price, originalPrice)}% OFF
            </p>
          </div>
          <p className="paragraph-sm msg">
            <i className="fa fa-bolt" aria-hidden="true"></i> Hurry , Only Few
            Left !
          </p>
          <span className="tag-msg">
            <i className="fa fa-tag" aria-hidden="true"></i> Fastest Delivery
          </span>
          <span className="tag-msg">
            <i className="fa fa-tag" aria-hidden="true"></i> Inclusive of All
            Taxes
          </span>
          <span className="tag-msg">
            <i className="fa fa-tag" aria-hidden="true"></i> Cash On Delivery
            Available
          </span>
          <div className="other-info">
            <li>
              <ul>
                Author : <p className="card-description">{author}</p>
              </ul>
              <ul>
                Category : <p className="category">{category}</p>
              </ul>
              <ul>
                Binding : <p>Hard Cover</p>
              </ul>
              <ul>
                Language : <p>English</p>
              </ul>
            </li>
          </div>

          <button className="btn default " onClick={() => addToCartHandler()}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
            {isInCart ? "Go to Cart" : "Add to Cart"}
          </button>

          <button
            className="btn outlined-default  wishlist-btn"
            onClick={() => addToWishlistHandler()}
          >
            <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
            {isInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
