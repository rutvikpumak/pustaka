import { ACTION_TYPE } from "../utils";

export const orderState = {
  orderAddress: {},

  priceDetails: {
    price: 0,
    discount: 0,
    coupon: 0,
    totalAmt: 0,
    totalDiscount: 0,
  },
};

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.PRICE_DETAILS:
      const { price, discount, coupon, totalAmt, totalDiscount } = action.payload;
      return {
        ...state,
        priceDetails: {
          ...action.payload,
          price,
          discount,
          coupon,
          totalAmt,
          totalDiscount,
        },
      };
    case ACTION_TYPE.ORDER_ADDRESS:
      return {
        ...state,
        orderAddress: { ...action.payload },
      };
    case ACTION_TYPE.RESET_PRICE:
      return orderState;
    case "default":
      return state;
  }
};
