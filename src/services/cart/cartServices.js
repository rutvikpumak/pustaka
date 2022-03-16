import axios from "axios";
import { ACTION_TYPE } from "../../utils";

export async function addToCart(dataDispatch, product, token) {
  try {
    const {
      data: { cart },
    } = await axios.post(
      "api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    dataDispatch({
      type: ACTION_TYPE.ADD_TO_CART,
      payload: cart,
    });
  } catch (error) {
    console.log("Error in addToCart service", error);
  }
}

export async function removeFromCart(id, dataDispatch, token) {
  try {
    const {
      data: { cart },
    } = await axios.delete(`api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dataDispatch({
      type: ACTION_TYPE.REMOVE_FROM_CART,
      payload: cart,
    });
  } catch (error) {
    console.log("Error in updateQtyFromCart service", error);
  }
}

export async function updateQtyFromCart(id, dataDispatch, token, actionType) {
  try {
    const {
      data: { cart },
    } = await axios.post(
      `api/user/cart/${id}`,
      {
        action: {
          type: actionType === "INC_QTY" ? "increment" : "decrement",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    dataDispatch({
      type: ACTION_TYPE.UPDATE_QTY_IN_CART,
      payload: cart,
    });
  } catch (error) {
    console.log("Error in updateQtyFromCart service", error);
  }
}
