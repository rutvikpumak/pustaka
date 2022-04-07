import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ACTION_TYPE } from "../../utils/constant";
import { initialState, dataReducer } from "../../reducer/DataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [drawer, setDrawer] = useState(false);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const { data: category } = await axios.get("/api/categories");
        dispatch({
          type: ACTION_TYPE.INITIALIZE_CATEGORIES,
          payload: category.categories,
        });

        const { data: products } = await axios.get("/api/products");
        dispatch({
          type: ACTION_TYPE.INITIALIZE_PRODUCTS,
          payload: products.products,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const changeTitle = (title) => (document.title = `${title} | Pustaka`);
  return (
    <DataContext.Provider
      value={{
        sortBy: state.sortBy,
        sortByRating: state.sortByRating,
        priceRange: state.priceRange,
        category: state.category,
        products: state.products,
        dataDispatch: dispatch,
        cart: state.cart,
        wishlist: state.wishlist,
        search: state.search,
        address: state.address,
        changeTitle,
        loader,
        setLoader,
        drawer,
        setDrawer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
