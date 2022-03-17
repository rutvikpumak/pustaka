import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import "./Navbar.css";

export default function Navbar() {
  const { token } = useAuth();
  const { cart, wishlist } = useData();
  const navigate = useNavigate();

  return (
    <div className="nav-header">
      <ul className="navbar">
        <div className="navbar-main ">
          <div className="navbar-left">
            <Link to="/home">
              <h2>Pustaka</h2>
            </Link>
          </div>
          <div className="search-container">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              name="search"
              className="search-bar"
              placeholder="Search for product"
              id="/"
            />
          </div>
          <ul className="navbar-right">
            <li
              onClick={() =>
                token ? navigate("/userProfile") : navigate("/login")
              }
            >
              {" "}
              <img
                src="https://github.com/rutvikpumak/pustaka-ecom/blob/dev/images/logo.png?raw=true"
                alt="login"
              />
            </li>
            <li>
              <div
                className="icon cart-badge"
                onClick={() =>
                  token ? navigate("/wishlist") : navigate("/login")
                }
              >
                <i className="fa fa-heart-o "></i>
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
                <i className="fa fa-shopping-cart "></i>
                {cart && cart.length > 0 && (
                  <div className="notification-icon flex-center">
                    <span>{cart.length}</span>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>

        <div className="search-container search-mob">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
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
