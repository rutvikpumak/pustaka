import React from "react";
import "./ProductPage.css";

export function ProductPage() {
  return (
    <div className="single-card-container flex-center">
      <div className="single-card flex-center">
        <div className="single-card-left">
          <img
            className="single-card-img"
            src="https://rukminim1.flixcart.com/image/612/612/kwxv98w0/book/l/z/y/do-epic-shit-original-imag9gcfcwfvwtep.jpeg?q=70"
            alt=""
          />
          <span className="card-badge">Best Seller</span>
        </div>

        <div className="single-card-right">
          <h3 className="single-card-title-header">Do Epic Shit</h3>

          <div className="star-ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>

          <div className="price">
            <p className="disc-price">₹850</p>
            <p className="actual-price">₹1500</p>
            <p className="price-percentage">(50% OFF)</p>
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
                Author : <p className="card-description">Ankur Warikoo</p>
              </ul>
              <ul>
                Category : <p className="category">Self Help</p>
              </ul>
              <ul>
                Binding : <p>Hard Cover</p>
              </ul>
              <ul>
                Language : <p>English</p>
              </ul>
            </li>
          </div>

          <button className="btn default ">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to
            Cart
          </button>

          <button className="btn outlined-default  wishlist-btn">
            {" "}
            <i className="fa fa-heart-o" aria-hidden="true"></i> Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
