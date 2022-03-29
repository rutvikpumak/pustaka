import { ACTION_TYPE } from "../utils";

export const orderState = {
  address: [],
  order: [],
  priceDetails: {
    price: 0,
    discount: 0,
    coupon: 0,
    total: 0,
  },
};

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.PRICE_DETAILS:
      const { priceOnMRP, discountOnMRP, couponApplied } = action.payload;

      return {
        ...state,
        priceDetails: {
          price: priceOnMRP,
          discount: discountOnMRP,
        },
      };
    case "default":
      return state;
  }
};
