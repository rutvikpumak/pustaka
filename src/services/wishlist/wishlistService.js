import axios from "axios";
import { ACTION_TYPE } from "../../utils";

export async function addToWishlist(dataDispatch, product, token) {
  try {
    const {
      data: { wishlist },
    } = await axios.post(
      "api/user/wishlist",
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
      type: ACTION_TYPE.ADD_TO_WISHLIST,
      payload: wishlist,
    });
  } catch (error) {
    console.log("Error in Add To Wishlist Service", error);
  }
}

export async function removeFromWishlist(id, dataDispatch, token) {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dataDispatch({
      type: ACTION_TYPE.REMOVE_FROM_WISHLIST,
      payload: wishlist,
    });
  } catch (error) {
    console.log("Error in Remove From Wishlist Service", error);
  }
}
