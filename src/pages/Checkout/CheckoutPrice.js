import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { useOrder } from "../../context/order/orderContext";
import { toast } from "react-toastify";
import { clearCart } from "../../services/cart/cartServices";
import { ACTION_TYPE } from "../../utils";

export function CheckoutPrice({ setMsg }) {
  const navigate = useNavigate();
  const { cart, dataDispatch, address } = useData();
  const { couponValue, priceDetails, orderAddress, dispatch, order, setOrder } = useOrder();
  const {
    user: { firstName, lastName, email },
    token,
  } = useAuth();
  const { price, discount, coupon, totalAmt } = priceDetails;

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      toast.error("Razorpay SDK failed to load, check you connection");
      return;
    }

    const options = {
      key: "rzp_test_M7jr3sNuOwTIPE",
      amount: totalAmt * 100,
      currency: "INR",
      name: "Pustaka",
      description: "Thank you for shopping with us",
      image: "https://github.com/rutvikpumak/pustaka-ecom/blob/dev/images/logo.png?raw=true",
      handler: function (response) {
        const orderData = {
          products: [...cart],
          amount: totalAmt,
          paymentId: response.razorpay_payment_id,
          delivery: orderAddress,
        };
        setOrder({ ...orderData });
        clearCart(dataDispatch, cart, token);
        dispatch({ type: ACTION_TYPE.RESET_PRICE });
        setMsg(true);
      },
      prefill: {
        name: `${firstName} ${lastName}`,
        email: email,
        contact: "9876543210",
      },
      theme: {
        color: "#007bb5",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrderHandler = () => {
    if (address.length === 0) {
      toast.error("Please Add Address");
      setTimeout(() => {
        navigate("/user_profile");
      }, 1500);
    } else {
      !orderAddress.name ? toast.error("Please Select Address") : displayRazorpay();
    }
  };
  return (
    <div className="checkout-details">
      <h4 className="text-center border-header">ORDER DETAILS</h4>
      <div>
        <li>
          <ul className="order-header">
            <p>Item</p>
            <p>Qty</p>
          </ul>
        </li>
        <li>
          {cart.map(({ _id, name, qty }) => (
            <ul key={_id}>
              <p>{name}</p>
              <p>{qty}</p>
            </ul>
          ))}
        </li>
      </div>
      <h4 className="text-center border-header">PRICE DETAILS</h4>

      <div className="checkout-calculate">
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
            </ul>
          )}
        </li>
      </div>

      <ul>
        <h4>Total Amount</h4>
        <h4>₹ {totalAmt}</h4>
      </ul>

      <h4 className="text-center border-header">DELIVER TO</h4>
      {orderAddress.name && (
        <div className="deliver-container ">
          <div>
            <p className="paragraph-md ">{orderAddress.name}</p>
            <p className="paragraph-sm">
              {orderAddress.street}, {orderAddress.city} , {orderAddress.state} ,
              {orderAddress.country}. {orderAddress.zipCode}
            </p>
            <p className="paragraph-sm">Phone Number : {orderAddress.mobile}</p>
          </div>
        </div>
      )}
      <div className="primary-btn text-center" onClick={() => placeOrderHandler()}>
        <button className="link-btn checkout-btn">Place Order</button>
      </div>
    </div>
  );
}
