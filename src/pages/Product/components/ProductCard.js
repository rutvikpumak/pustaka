import { useNavigate } from "react-router";
import { useAuth, useData } from "../../../context";
import {
  addToCart,
  removeFromCart,
  updateQtyFromCart,
} from "../../../services";
import "./ProductCard.css";

export const calcPercentage = (price, originalPrice) =>
  Math.floor(Math.abs((price / originalPrice) * 100 - 100));

export function ProductCard({ product }) {
  const { dataDispatch, cart, products } = useData();
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
        className="wishlist-icon"
        onClick={() => (token ? navigate("/wishlist") : navigate("/login"))}
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
        onClick={() => (token ? navigate("/cart") : navigate("/login"))}
      >
        <i className="fa fa-shopping-cart"></i>
        Add to Cart
      </button>
    </div>
  );
}
