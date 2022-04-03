import React from "react";
import { useData } from "../../context";
import { CheckoutPrice } from "./CheckoutPrice";
import "./Checkout.css";
import { useOrder } from "../../context/order/orderContext";
import { ACTION_TYPE, popper } from "../../utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { address } = useData();
  const { dispatch, orderAddress } = useOrder();
  const [msg, setMsg] = useState(false);
  const navigate = useNavigate();

  const placedHandler = () => {
    popper();
    setTimeout(() => {
      navigate("/order_summary");
    }, 1500);
  };
  return (
    <>
      <div className="checkout-container">
        {msg ? (
          <h1 className="checkout-main-container flex-center  text-center">
            🥂 You order is successfully placed !{placedHandler()}
          </h1>
        ) : (
          <div className="checkout-main-container flex-center">
            <h3>CHECKOUT </h3>
            <div className="checkout-manage">
              <div className="checkout-manage-item ">
                {address &&
                  address.map(({ _id, name, street, city, state, country, zipCode, mobile }) => (
                    <>
                      <div className="address-checkout-container ">
                        <label className="select-input">
                          <input
                            type="radio"
                            name="radio"
                            className="radio-input-address"
                            checked={orderAddress._id === _id}
                            onChange={() =>
                              dispatch({
                                type: ACTION_TYPE.ORDER_ADDRESS,
                                payload: {
                                  _id,
                                  name,
                                  street,
                                  city,
                                  state,
                                  country,
                                  zipCode,
                                  mobile,
                                },
                              })
                            }
                          />
                          <p className="paragraph-md ">{name}</p>
                        </label>
                        <div className="address-details-checkout">
                          <p className="paragraph-sm">
                            {street}, {city},{state}. {zipCode}
                          </p>
                          <p className="paragraph-sm">{country}.</p>
                          <p className="paragraph-sm">Phone Number : {mobile}</p>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
              <CheckoutPrice setMsg={setMsg} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
