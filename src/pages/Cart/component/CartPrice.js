import React from "react";
import { useData } from "../../../context";
import { getPriceDetails } from "../../../utils";

export function CartPrice() {
  const { cart } = useData();
  const { price, discount } = getPriceDetails(cart);

  return (
    <div className="price-details">
      <ul className="coupon">
        <p>
          <i className="fa fa-tag" aria-hidden="true"></i> Have A Coupon ?
        </p>
        <a href="#" className="btn outlined-default coupon-btn">
          Apply
        </a>
      </ul>
      <h4 className="text-center">PRICE DETAILS</h4>

      <div className="price-calculate">
        <li>
          <ul>
            <p>Price ({cart.length} items)</p>
            <p>Rs.{price}</p>
          </ul>
          <ul>
            <p>Discount</p>
            <p>-Rs.{discount}</p>
          </ul>
          <ul>
            <p>Delivery Charges</p>
            <p>FREE</p>
          </ul>

          <ul>
            <p>Coupon Discount</p>
            <p>Rs.0</p>
          </ul>
        </li>
      </div>

      <ul className="price-totalAmt">
        <h4>Total Amount</h4>
        <h4>Rs.{price - discount}</h4>
      </ul>

      <p className="save-msg">You will save Rs. {discount} on this order</p>

      <div className="primary-btn text-center">
        <a href="#" className="link-btn">
          Place Order
        </a>
      </div>
    </div>
  );
}
