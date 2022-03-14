import React from "react";
import "./ProductPage.css";

export function ProductPage() {
  return (
    <div class="single-card-container flex-center">
      <div class="single-card flex-center">
        <div class="single-card-left">
          <img
            class="single-card-img"
            src="https://rukminim1.flixcart.com/image/612/612/kwxv98w0/book/l/z/y/do-epic-shit-original-imag9gcfcwfvwtep.jpeg?q=70"
            alt=""
          />
          <span class="card-badge">Best Seller</span>
        </div>

        <div class="single-card-right">
          <h3 class="single-card-title-header">Do Epic Shit</h3>

          <div class="star-ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>

          <div class="price">
            <p class="disc-price">₹850</p>
            <p class="actual-price">₹1500</p>
            <p class="price-percentage">(50% OFF)</p>
          </div>
          <p class="paragraph-sm msg">
            <i class="fa fa-bolt" aria-hidden="true"></i> Hurry , Only Few Left
            !
          </p>

          <span class="tag-msg">
            <i class="fa fa-tag" aria-hidden="true"></i> Fastest Delivery
          </span>

          <span class="tag-msg">
            <i class="fa fa-tag" aria-hidden="true"></i> Inclusive of All Taxes
          </span>

          <span class="tag-msg">
            <i class="fa fa-tag" aria-hidden="true"></i> Cash On Delivery
            Available
          </span>

          <div class="other-info">
            <li>
              <ul>
                Author : <p class="card-description">Ankur Warikoo</p>
              </ul>
              <ul>
                Category : <p class="category">Self Help</p>
              </ul>
              <ul>
                Binding : <p>Hard Cover</p>
              </ul>
              <ul>
                Language : <p>English</p>
              </ul>
            </li>
          </div>

          <button class="btn default ">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart
          </button>

          <button class="btn outlined-default  wishlist-btn">
            {" "}
            <i class="fa fa-heart-o" aria-hidden="true"></i> Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
