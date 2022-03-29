import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { orderState, orderReducer } from "../../reducer/OrderReducer";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, orderState);
  const [couponValue, setCouponValue] = useState({ couponName: "", value: 0 });

  return (
    <OrderContext.Provider
      value={{
        priceDetails: state.priceDetails,
        dispatch,
        couponValue,
        setCouponValue,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };
