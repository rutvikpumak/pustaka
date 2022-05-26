import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { removeFromAddress } from "../../services";
import { ACTION_TYPE } from "../../utils";
import { AddressForm } from "./component/AddressForm";
import "./UserProfile.css";

export function UserProfile() {
  const navigate = useNavigate();
  const { user, setUser, token, setToken } = useAuth();
  const { setLoader, dataDispatch, address, changeTitle } = useData();
  const { firstName, lastName, email } = user;
  const [check, setChecked] = useState(true);
  const formValue = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  };
  const [formDisplay, setFormDisplay] = useState(false);
  const [addressForm, setAddForm] = useState(formValue);

  const logOutHandler = () => {
    dataDispatch({
      type: ACTION_TYPE.LOG_OUT,
    });
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");

    setUser();
    setToken("");
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
    navigate("/");
  };

  const editAddress = (_id, name, street, city, state, country, zipCode, mobile) => {
    setFormDisplay(true);
    setAddForm((form) => ({
      ...form,
      _id,
      name,
      street,
      city,
      state,
      country,
      zipCode,
      mobile,
    }));
  };

  useEffect(() => changeTitle("My Profile"), []);
  return (
    <div className="profile-container">
      <div className="profile-main-container">
        <h2>Account</h2>

        <div className="profile-main">
          <div className="tabs">
            <input
              type="radio"
              className="tabs"
              id="profile"
              checked={check}
              onChange={() => setChecked(true)}
            />
            <label htmlFor="profile">Profile</label>
            <div className="tab">
              <div className="profile-details">
                <h3 className="details-header">Profile Details</h3>

                <div className="profile-details-main">
                  <div className="title">
                    <p className="paragraph-md">Full Name</p>
                    <p className="paragraph-md">Email</p>
                  </div>
                  <div>
                    <p className="paragraph-md">{`${firstName} ${lastName}`}</p>
                    <p className="paragraph-md"> {email}</p>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="details-header">Account Settings</h3>
                <button className="btn danger setting-logout" onClick={() => logOutHandler()}>
                  Log Out
                </button>
              </div>
            </div>

            <input
              type="radio"
              className="tabs"
              id="address"
              checked={!check}
              onChange={() => setChecked(!check)}
            />
            <label htmlFor="address">Address</label>
            <div className="tab">
              <h3 className="details-header">My Addresses</h3>

              {address &&
                address.map(({ _id, name, street, city, state, country, zipCode, mobile }) => (
                  <div key={_id} className="address-container">
                    <p className="paragraph-md">{name}</p>
                    <div>
                      <p className="paragraph-sm">
                        {street}, {city},{state}. {zipCode}
                      </p>
                      <p className="paragraph-sm">{country}.</p>
                      <p className="paragraph-sm">Phone Number : {mobile}</p>
                    </div>
                    <div className="address-btn">
                      <button
                        className="btn outlined-default address-edit"
                        onClick={() =>
                          editAddress(_id, name, street, city, state, country, zipCode, mobile)
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="btn outlined-danger address-remove"
                        onClick={() =>
                          removeFromAddress(dataDispatch, _id, token, toast, setFormDisplay)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

              <button
                onClick={() => {
                  setFormDisplay(true);
                  setAddForm(formValue);
                }}
                className={`btn default address-add ${formDisplay && "displayNone"}`}
              >
                + Add New Address
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddressForm
        addressForm={addressForm}
        setAddForm={setAddForm}
        formDisplay={formDisplay}
        setFormDisplay={setFormDisplay}
        formValue={formValue}
      />
    </div>
  );
}
