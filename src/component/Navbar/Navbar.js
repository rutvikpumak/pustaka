import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { ACTION_TYPE } from "../../utils";
import "./Navbar.css";

export default function Navbar() {
  const { token } = useAuth();
  const { cart, wishlist, dataDispatch, setLoader, drawer, setDrawer } = useData();
  const navigate = useNavigate();
  let timer = useRef();
  const [input, setInput] = useState("");

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      dataDispatch({
        type: ACTION_TYPE.SEARCH,
        payload: input,
      });
      setLoader(true);
      setTimeout(() => setLoader(false), 500);
      if (input.trim().length > 0) {
        navigate("/product");
      }
    }, 500);
  }, [input]);

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
            <Link to="/">
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
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <ul className="navbar-right">
            <li>
              <div className="icon cart-badge" onClick={() => navigate("/wishlist")}>
                <i className="fa fa-heart" title="Wishlist"></i>
                {wishlist && wishlist.length > 0 && (
                  <div className="notification-icon flex-center">
                    <span>{wishlist.length}</span>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-cart" onClick={() => navigate("/cart")}>
              <div className="icon cart-badge">
                <i className="fa fa-shopping-cart" title="Cart"></i>
                {cart && cart.length > 0 && (
                  <div className="notification-icon flex-center">
                    <span>{cart.length}</span>
                  </div>
                )}
              </div>
            </li>{" "}
            <li onClick={() => navigate("/user_profile")}>
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
