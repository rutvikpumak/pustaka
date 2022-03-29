import axios from "axios";
import { ACTION_TYPE } from "../../utils";

export async function addToAddress(
  dataDispatch,
  address,
  token,
  toast,
  setFormDisplay
) {
  try {
    const { data } = await axios.post(
      "api/user/address",
      {
        address,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dataDispatch({
      type: ACTION_TYPE.ADDRESS,
      payload: data.address,
    });
    setFormDisplay(false);
    toast.success("Address Added Successfully !");
  } catch (error) {
    toast.error("Something Went Wrong !");
    console.log("Error in Add To Address Service", error);
  }
}
export async function removeFromAddress(dataDispatch, addressId, token, toast) {
  try {
    const { data } = await axios.delete(`api/user/address/${addressId}`, {
      headers: {
        authorization: token,
      },
    });
    dataDispatch({
      type: ACTION_TYPE.ADDRESS,
      payload: data.address,
    });
    toast.error("Address Deleted !");
  } catch (error) {
    toast.error("Something Went Wrong !");
    console.log("Error in Remove From Address Service", error);
  }
}

export async function updateFromAddress(
  dataDispatch,
  address,
  token,
  toast,
  setFormDisplay
) {
  try {
    const { data } = await axios.post(
      `api/user/address/${address._id}`,
      {
        address,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    setFormDisplay(false);
    dataDispatch({
      type: ACTION_TYPE.ADDRESS,
      payload: data.address,
    });
    toast.success("Address Updated !");
  } catch (error) {
    toast.error("Something Went Wrong !");
    console.log("Error in Updating Address Service", error);
  }
}
