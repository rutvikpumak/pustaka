import React from "react";
import "./Cart.css";
export  function Cart() {
  return (
    <div class="cart-container">
      <div class="cart-main-container flex-center">
        <h3>MY CART (2)</h3>
        <div class="cart-manage">
          <div class="cart-manage-item">
            <div class="card horizontal-container">
              <div class="card-horizontal">
                <img
                  class="card-img horizontal-img"
                  src="https://rukminim1.flixcart.com/image/612/612/jpu324w0/book/0/9/0/believe-in-yourself-original-imafbzz2h7yfg5zz.jpeg?q=70"
                  alt=""
                />
                <div class="card-info">
                  <div class="card-title">
                    <div>
                      <h4>Believe In Yourself</h4>
                      <p class="card-description">Author Name</p>
                    </div>
                  </div>
                  <div class="price">
                    <p class="disc-price">₹850</p>
                    <p class="actual-price">₹1500</p>
                    <p class="price-percentage">(50% OFF)</p>
                  </div>
                  <div class="qty">
                    <button class="minus">-</button>
                    <input class="qty-count" type="number" value="1" />
                    <button class="add">+</button>
                  </div>
                </div>
              </div>
              <div class="horizontal-btn">
                <button class=" remove-btn">REMOVE</button>
                <button class="later-btn">MOVE TO WISHLIST</button>
              </div>
            </div>
          </div>

          <div class="price-details">
            <ul class="coupon">
              <p>
                <i class="fa fa-tag" aria-hidden="true"></i> Have A Coupon ?
              </p>
              <a href="#" class="btn outlined-default coupon-btn">
                Apply
              </a>
            </ul>
            <h4 class="text-center">PRICE DETAILS</h4>

            <div class="price-calculate">
              <li>
                <ul>
                  <p>Price (2 items)</p>
                  <p>Rs.2499</p>
                </ul>
                <ul>
                  <p>Discount</p>
                  <p>-Rs.499</p>
                </ul>
                <ul>
                  <p>Delivery Charges</p>
                  <p>FREE</p>
                </ul>

                <ul>
                  <p>Coupon Discount</p>
                  <p>-Rs.499</p>
                </ul>
              </li>
            </div>

            <ul class="price-totalAmt">
              <h4>Total Amount</h4>
              <h4>Rs.2499</h4>
            </ul>

            <p class="save-msg">You will save Rs. 1999 on this order</p>

            <div class="primary-btn text-center">
              <a href="#" class="link-btn">
                Place Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
