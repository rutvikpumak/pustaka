import React from "react";
import { useData } from "../../../context";
import { useOrder } from "../../../context/order/orderContext";
import { getPriceDetails } from "../../../utils";

export function CartPrice({ setCouponModal }) {
  const { cart } = useData();
  const { couponValue, setCouponValue } = useOrder();
  const { price, discount } = getPriceDetails(cart);
  const coupon = price
    ? Math.abs(
        (parseFloat(price - discount) / 100) * parseFloat(couponValue.value)
      )
    : 0;
  const totalAmt = price - discount - coupon;
  const totalDiscount = discount + coupon;
  return (
    <div className="price-details">
      <ul className="coupon">
        <p>
          <i className="fa fa-tag" aria-hidden="true"></i> Have A Coupon ?
        </p>
        <div
          className="btn outlined-default coupon-btn"
          onClick={() => setCouponModal(true)}
        >
          Apply
        </div>
      </ul>
      <h4 className="text-center">PRICE DETAILS</h4>

      <div className="price-calculate">
        <li>
          <ul>
            <p>Price ({cart.length} items)</p>
            <p>₹ {price}</p>
          </ul>
          <ul>
            <p>Discount</p>
            <p>-₹ {discount}</p>
          </ul>
          <ul>
            <p>Delivery Charges</p>
            <p>FREE</p>
          </ul>

          <ul>
            <p>Coupon Discount</p>
            <p>
              {coupon !== 0 && "-"}₹ {coupon}
            </p>
          </ul>
          {coupon !== 0 && (
            <ul className="coupon-msg">
              <p>
                <img src="https://cdn-icons-png.flaticon.com/512/726/726448.png" />
                {couponValue.couponName}
              </p>
              <p
                className="remove-coupon"
                onClick={() => setCouponValue({ couponName: "", value: 0 })}
              >
                ❌
              </p>
            </ul>
          )}
        </li>
      </div>

      <ul className="price-totalAmt">
        <h4>Total Amount</h4>
        <h4>₹ {totalAmt}</h4>
      </ul>

      <p className="save-msg">You will save ₹ {totalDiscount} on this order</p>

      <div className="primary-btn text-center">
        <a href="#" className="link-btn">
          Place Order
        </a>
      </div>
    </div>
  );
}
