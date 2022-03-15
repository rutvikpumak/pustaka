import "./ProductCard.css";

export function ProductCard({ product }) {
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

  const calcPercentage = (price, originalPrice) =>
    Math.floor(Math.abs((price / originalPrice) * 100 - 100));

  return (
    <div key={id} className="card">
      <img className="card-img" src={img} alt={name} />
      {isBestSeller && <span className="card-badge">Best Seller</span>}
      <span className="wishlist-icon">
        <i className="fa fa-heart" aria-hidden="true"></i>
      </span>
      <div className="card-info">
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
      <button className="btn default add-cart">
        <i className="fa fa-shopping-cart"></i>
        Add to Cart
      </button>
    </div>
  );
}
