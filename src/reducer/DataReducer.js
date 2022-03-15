import { ACTION_TYPE } from "../utils/constant";

export const initialState = {
  sortBy: "",
  priceRange: "",
  category: {},
  sortByRating: "",
  products: [],
};

export function dataReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.INITIALIZE_CATEGORIES:
      const obj = action.payload.reduce(
        (acc, ele) => ({
          ...acc,
          [`${ele.categoryName}`]: false,
        }),
        {}
      );
      return {
        ...state,
        category: {
          ...state.category,
          ...obj,
        },
      };

    case ACTION_TYPE.INITIALIZE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ACTION_TYPE.PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };

    case ACTION_TYPE.SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case ACTION_TYPE.SORT_BY_RATING:
      return {
        ...state,
        sortByRating: action.payload,
      };

    case ACTION_TYPE.CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          ...action.payload,
        },
      };

    case ACTION_TYPE.CLEAR_FILTER:
      for (const cat in state.category) {
        state.category[cat] = false;
      }
      return {
        sortBy: "",
        category: state.category,
        sortByRating: "",
        priceRange: "",
        products: action.payload,
      };

    default:
      throw new Error("Error in reducer");
  }
}
