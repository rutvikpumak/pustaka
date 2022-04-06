import axios from "axios";
import { ACTION_TYPE } from "../../utils";

export async function addToWishlist(dataDispatch, product, token, toast, setWishlistBtnDisabled) {
  setWishlistBtnDisabled && setWishlistBtnDisabled(() => true);
  try {
    const {
      data: { wishlist },
    } = await axios.post(
      "/api/user/wishlist",
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
    toast.success("Added In Wishlist !");
  } catch (error) {
    toast.error("Something Went Wrong !");
    console.log("Error in Add To Wishlist Service", error);
  }
  setWishlistBtnDisabled && setWishlistBtnDisabled(() => false);
}

export async function removeFromWishlist(id, dataDispatch, token, toast) {
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
    toast.error("Removed From Wishlist  !");
  } catch (error) {
    toast.error("Something Went Wrong !");

    console.log("Error in Remove From Wishlist Service", error);
  }
}
