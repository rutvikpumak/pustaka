import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { ACTION_TYPE } from "../../utils";
import "./Navbar.css";

export default function Navbar() {
  const { token } = useAuth();
  const { cart, wishlist, dataDispatch, setLoader, drawer, setDrawer } = useData();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const searchHandler = (e) => {
    if (e.key === "Enter" || e.keyCode === 8 || e.target.value === "") {
      dataDispatch({
        type: ACTION_TYPE.SEARCH,
        payload: e.target.value,
      });
    }

    if (e.key === "Enter") {
      setLoader(true);
      setTimeout(() => setLoader(false), 500);
    }
    navigate("/product");
  };

  useEffect(() => {
    setInput("");
    dataDispatch({
      type: ACTION_TYPE.SEARCH,
      payload: "",
    });
  }, [navigate]);

  return (
    <div className="nav-header">
      <ul className="navbar">
        <div className="navbar-main ">
          <div className="navbar-left">
            {window.location.href.includes("product") && (
              <i
                className="fa fa-bars drawer-hamberg-btn"
                aria-hidden="true"
                onClick={() => setDrawer(!drawer)}
              />
            )}
            <Link to="/home">
              <h2>Pustaka</h2>
            </Link>
          </div>
          <div className="search-container">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="search"
              name="search"
              className="search-bar"
              value={input}
              placeholder="Search for product"
              onKeyDown={(e) => searchHandler(e)}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <ul className="navbar-right">
            <li>
              <div
                className="icon cart-badge"
                onClick={() => (token ? navigate("/wishlist") : navigate("/login"))}
              >
                <i className="fa fa-heart" title="Wishlist"></i>
                {wishlist && wishlist.length > 0 && (
                  <div className="notification-icon flex-center">
                    <span>{wishlist.length}</span>
                  </div>
                )}
              </div>
            </li>
            <li
              className="nav-cart"
              onClick={() => (token ? navigate("/cart") : navigate("/login"))}
            >
              <div className="icon cart-badge">
                <i className="fa fa-shopping-cart" title="Cart"></i>
                {cart && cart.length > 0 && (
                  <div className="notification-icon flex-center">
                    <span>{cart.length}</span>
                  </div>
                )}
              </div>
            </li>{" "}
            <li onClick={() => (token ? navigate("/user_profile") : navigate("/login"))}>
              <img
                src="https://github.com/rutvikpumak/pustaka-ecom/blob/dev/images/logo.png?raw=true"
                alt="login"
                title={token ? "User Profile" : "Sign In"}
              />
            </li>
          </ul>
        </div>

        <div className="search-container search-mob" onKeyDown={(e) => searchHandler(e)}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="search"
            name="search"
            className="search-bar"
            placeholder="Search for product"
            id=""
          />
        </div>
      </ul>
    </div>
  );
}
