import React from "react";
import { useAuth, useData } from "../../../context";
import { addToAddress, updateFromAddress } from "../../../services";
import { toast } from "react-toastify";

export function AddressForm({
  addressForm,
  setAddForm,
  formDisplay,
  setFormDisplay,
  formValue,
}) {
  const { dataDispatch } = useData();
  const { token } = useAuth();

  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setAddForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  const cancelForm = (e) => {
    e.preventDefault();
    setFormDisplay(false);
    setAddForm(formValue);
  };

  const fillFormValueWithDummy = (e) => {
    e.preventDefault();
    setAddForm((form) => ({
      ...form,
      name: "Admin",
      street: "33 , MG Road",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      zipCode: "411046",
      mobile: "12345678",
    }));
  };

  const saveHandler = (e) => {
    e.preventDefault();
    addressForm._id
      ? updateFromAddress(
          dataDispatch,
          addressForm,
          token,
          toast,
          setFormDisplay
        )
      : addToAddress(dataDispatch, addressForm, token, toast, setFormDisplay);
  };

  return (
    <div
      className={`address-form-container flex-center ${
        !formDisplay ? "displayNone" : "displayFlex"
      }`}
    >
      <form className="address-form" onSubmit={(e) => saveHandler(e)}>
        <h4>ADD NEW ADDRESS</h4>
        <div className="form-input">
          <input
            placeholder="Enter Name"
            className="text-input address-form-input"
            type="text"
            value={addressForm.name}
            onChange={(e) => fillFormValue(e, "name")}
            required
          />
          <input
            placeholder="Enter House No. , Road , Colony"
            className="text-input address-form-input"
            type="text"
            value={addressForm.street}
            onChange={(e) => fillFormValue(e, "street")}
            required
          />
          <input
            placeholder="Enter City"
            className="text-input address-form-input"
            type="text"
            value={addressForm.city}
            onChange={(e) => fillFormValue(e, "city")}
            required
          />
          <input
            placeholder="Enter State"
            className="text-input address-form-input"
            type="text"
            value={addressForm.state}
            onChange={(e) => fillFormValue(e, "state")}
            required
          />
          <input
            placeholder="Enter Country"
            className="text-input address-form-input"
            type="text"
            value={addressForm.country}
            onChange={(e) => fillFormValue(e, "country")}
            required
          />
          <input
            placeholder="Enter Postal Code"
            className="text-input address-form-input"
            type="text"
            value={addressForm.zipCode}
            onChange={(e) => fillFormValue(e, "zipCode")}
            required
          />
          <input
            placeholder="Enter Mobile Number"
            className="text-input address-form-input"
            type="text"
            value={addressForm.mobile}
            onChange={(e) => fillFormValue(e, "mobile")}
            required
          />
        </div>
        <div className="address-form-btn">
          <input
            className="btn link-btn address-save"
            type="submit"
            value="Save"
          />
          <input
            type="reset"
            className="btn danger address-cancel"
            onClick={(e) => cancelForm(e)}
            value="Cancel"
          />
          <input
            type="submit"
            className="btn default address-cancel"
            onClick={(e) => fillFormValueWithDummy(e)}
            value="Fill with Dummy Values"
          />
        </div>
      </form>
    </div>
  );
}
