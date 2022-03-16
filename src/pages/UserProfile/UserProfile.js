import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import "./UserProfile.css";
export function UserProfile() {
  const { user, setUser, token, setToken } = useAuth();
  const { firstName, lastName, email } = user && user;
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("login");
    setUser({});
    setToken("");
    navigate("/home");
  };
  return (
    <div className="profile-container">
      <div className="profile-main-container">
        <h2>Account</h2>

        <div className="profile-main">
          <div className="tabs">
            <input type="radio" name="tabs" id="profile" checked />
            <label htmlFor="profile">Profile</label>
            <div className="tab">
              <div className="profile-details">
                <h3 className="details-header">Profile Details</h3>

                <div className="profile-details-main">
                  <div>
                    <p className="paragraph-md">Full Name</p>
                    <p className="paragraph-md">Email</p>
                  </div>
                  <div>
                    <p className="paragraph-md">{`${firstName} ${lastName}`}</p>
                    <p className="paragraph-md"> {email}</p>
                  </div>
                </div>
                <button
                  className="btn danger setting-logout"
                  onClick={() => logOutHandler()}
                >
                  Log Out
                </button>
              </div>
            </div>

            <label htmlFor="address">Address</label>

            <label htmlFor="tabthree">Settings</label>
          </div>
        </div>
      </div>
    </div>
  );
}
