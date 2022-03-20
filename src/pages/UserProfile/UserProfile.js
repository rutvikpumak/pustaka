import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { ACTION_TYPE } from "../../utils";
import "./UserProfile.css";
export function UserProfile() {
  const { user, setUser, setToken } = useAuth();
  const { firstName, lastName, email } = user;
  const navigate = useNavigate();
  const [check, setChecked] = useState(true);
  const { setLoader, dataDispatch } = useData();

  const logOutHandler = () => {
    dataDispatch({
      type: ACTION_TYPE.LOG_OUT,
    });
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    setUser();
    setToken("");
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
    navigate("/home");
  };
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
              onClick={() => setChecked(true)}
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
                <button
                  className="btn danger setting-logout"
                  onClick={() => logOutHandler()}
                >
                  Log Out
                </button>
              </div>
            </div>

            <input
              type="radio"
              className="tabs"
              id="address"
              checked={!check}
              onClick={() => setChecked(!check)}
            />
            <label htmlFor="address">Address</label>
            <div className="tab">
              <h3 className="details-header">My Addresses</h3>

              <div className="address-container">
                <p className="paragraph-md">John Cena</p>
                <p className="paragraph-sm">
                  #1/4 , 100ft Ring Road, Karve Nagar, Bangalore, Maharashtra
                  560078
                </p>
                <p className="paragraph-sm">India.</p>
                <p className="paragraph-sm">Phone Number : 2458544515</p>
                <div className="address-btn">
                  <button className="btn outlined-default address-edit">
                    Edit
                  </button>
                  <button className="btn outlined-danger address-remove">
                    Remove
                  </button>
                </div>
              </div>

              <button className="btn default address-add">
                + Add New Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
