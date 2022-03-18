import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import "./UserProfile.css";
export function UserProfile() {
  const { user, setUser, setToken } = useAuth();
  const { firstName, lastName, email } = user;
  const navigate = useNavigate();
  const [check, setChecked] = useState(true);
  const { setLoader } = useData();

  const logOutHandler = () => {
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
              name="tabs"
              id="profile"
              checked={check ? true : false}
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
            </div>

            <input
              type="radio"
              name="tabs"
              id="address"
              onClick={() => setChecked(false)}
            />
            <label for="address">Address</label>
            <div class="tab">
              <h3 class="details-header">My Addresses</h3>

              <div class="address-container">
                <p class="paragraph-md">John Cena</p>
                <p class="paragraph-sm">
                  #1/4 , 100ft Ring Road, Karve Nagar, Bangalore, Maharashtra
                  560078
                </p>
                <p class="paragraph-sm">India.</p>
                <p class="paragraph-sm">Phone Number : 2458544515</p>
                <div class="address-btn">
                  <button class="btn outlined-default address-edit">
                    Edit
                  </button>
                  <button class="btn outlined-danger address-remove">
                    Remove
                  </button>
                </div>
              </div>

              <button class="btn default address-add">+ Add New Address</button>
            </div>

            <input
              type="radio"
              name="tabs"
              id="tabthree"
              onClick={() => setChecked(false)}
            />
            <label for="tabthree">Settings</label>
            <div class="tab">
              <h3 class="details-header">Account Settings</h3>
              <button
                className="btn danger setting-logout"
                onClick={() => logOutHandler()}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
