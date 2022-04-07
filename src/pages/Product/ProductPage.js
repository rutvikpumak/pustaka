import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import { useNavigate, useParams } from "react-router";
import { useAuth, useData } from "../../context";
import { addToCart, addToWishlist } from "../../services";
import { isProductInCart, isProductInWishlist } from "../../utils/cartUtils";
import { toast } from "react-toastify";

export function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnWishlistDisabled, setWishlistBtnDisabled] = useState(false);
  const { token } = useAuth();
  const { products, cart, dataDispatch, wishlist, setLoader, changeTitle } = useData();

  const product = products?.find((product) => {
    return product.id === productId;
  });

  const isInCart = isProductInCart(cart, product?._id);
  const isInWishlist = isProductInWishlist(wishlist, product?._id);

  const addToCartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(dataDispatch, product, token, toast, setBtnDisabled)
      : navigate("/login");
  };

  const addToWishlistHandler = () => {
    token
      ? isInWishlist
        ? navigate("/wishlist")
        : addToWishlist(dataDispatch, product, token, toast, setWishlistBtnDisabled)
      : navigate("/login");
  };
  useEffect(() => changeTitle(product?.name), []);

  if (products.length === 0) {
    setLoader(() => true);
    return <></>;
  } else {
    setLoader(() => false);
    return (
      <div className="single-card-container flex-center">
        <div className="single-card flex-center">
          <div className="single-card-left">
            <img className="single-card-img" src={product?.img} alt="" />
            {product?.isBestSeller && <span className="card-badge">Best Seller</span>}
          </div>

          <div className="single-card-right">
            <div className="single-card-title">
              <h3 className="single-card-title-header">{product?.name}</h3>
              <div className="star-ratings">
                {product?.rating}
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="price">
              <p className="disc-price">₹{product?.price}</p>
              <p className="actual-price">₹{product?.originalPrice}</p>
              <p className="price-percentage">{product.percentageOff}% OFF</p>
            </div>
            <p className="paragraph-sm msg">
              <i className="fa fa-bolt" aria-hidden="true"></i> Hurry , Only Few Left !
            </p>
            <span className="tag-msg">
              <i className="fa fa-tag" aria-hidden="true"></i> Fastest Delivery
            </span>
            <span className="tag-msg">
              <i className="fa fa-tag" aria-hidden="true"></i> Inclusive of All Taxes
            </span>
            <span className="tag-msg">
              <i className="fa fa-tag" aria-hidden="true"></i> Cash On Delivery Available
            </span>
            <div className="other-info">
              <li>
                <ul>
                  Author : <p>{product?.author}</p>
                </ul>
                <ul>
                  Category : <p>{product?.category}</p>
                </ul>
                <ul>
                  Binding : <p>Hard Cover</p>
                </ul>
                <ul>
                  Language : <p>English</p>
                </ul>
              </li>
            </div>

            <button
              className={`btn default`}
              onClick={() => addToCartHandler()}
              disabled={btnDisabled}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>

            <button
              className="btn outlined-default  wishlist-btn"
              onClick={() => addToWishlistHandler()}
              disabled={btnWishlistDisabled}
            >
              <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
              {isInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
