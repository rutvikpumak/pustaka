import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import "./Navbar.css";

export default function Navbar() {
  const { token } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="nav-header">
      <ul className="navbar">
        <div className="navbar-main ">
          <div className="navbar-left">
            {/* <i
                className="fa fa-bars drawer-hamberg-btn"
                aria-hidden="true"
                // onClick={() => setDrawer(!drawer)}
              />
                 */}

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
                {/* <div className="notification-icon flex-center">
                    <span>1</span>
                  </div> */}
              </div>
            </li>

            <li
              className="nav-cart"
              onClick={() => (token ? navigate("/cart") : navigate("/login"))}
            >
              <div className="icon cart-badge">
                <i className="fa fa-shopping-cart "></i>
                {/* {cartCount > 0 && (
                      <div className="notification-icon flex-center">
                        <span>{cartCount}</span>
                      </div>
                    )} */}
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
