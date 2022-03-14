import React from "react";
import "./Wishlist.css";
export function Wishlist() {
  return (
    <div className="wishlist-container">
      <div className="wishlist-main-container flex-center">
        <h3>MY WISHLIST (2)</h3>
        <div className="wishlist-manage">
          <div className="wishlist">
            <div className="wishlist-item">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kwxv98w0/book/l/z/y/do-epic-shit-original-imag9gcfcwfvwtep.jpeg?q=70"
                alt=""
              />
              <div className="item-info">
                <header>
                  <div className="item-desc">
                    <h4 className="card-title-header">Do Epic Shit</h4>
                    <p className="card-description">Ankur Warikoo</p>
                    <div className="price">
                      <p className="disc-price">₹850</p>
                      <p className="actual-price">₹1500</p>
                      <p className="price-percentage">(50% OFF)</p>
                    </div>
                  </div>
                  <div className="delete-icon">
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </div>
                </header>

                <button className="btn default move-to-cart">
                  Move to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
