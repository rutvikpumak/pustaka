import { useNavigate } from "react-router";
import { useAuth, useData } from "../../../context";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../services";
import {
  calcPercentage,
  isProductInCart,
  isProductInWishlist,
} from "../../../utils/cartUtils";
import "./ProductCard.css";

export function ProductCard({ product }) {
  const { dataDispatch, cart, wishlist } = useData();
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
  } = product;

  const isInCart = isProductInCart(cart, id);
  const isInWishlist = isProductInWishlist(wishlist, id);

  const addToCartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(dataDispatch, product, token)
      : navigate("/login");
  };

  const wishlistHandler = () => {
    token
      ? isInWishlist
        ? removeFromWishlist(id, dataDispatch, token)
        : addToWishlist(dataDispatch, product, token)
      : navigate("/login");
  };

  return (
    <div key={id} className="card">
      <img
        className="card-img"
        src={img}
        alt={name}
        onClick={() => navigate(`/${id}`)}
      />
      {isBestSeller && <span className="card-badge">Best Seller</span>}
      <span
        className={`wishlist-icon ${isInWishlist ? `wishlist-toggle` : ``}`}
        onClick={() => wishlistHandler()}
      >
        <i className="fa fa-heart" aria-hidden="true"></i>
      </span>
      <div className="card-info" onClick={() => navigate(`/${id}`)}>
        <div className="">
          <div className="card-title">
            <h3 className="card-title-header">{name}</h3>
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
          <p className="price-percentage">
            ({calcPercentage(price, originalPrice)}% OFF)
          </p>
        </div>
      </div>
      <button
        className="btn default add-cart"
        onClick={() => addToCartHandler()}
      >
        <i className="fa fa-shopping-cart"></i>
        {isInCart ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
