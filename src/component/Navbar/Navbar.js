import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
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
            <li>
              {" "}
              <Link to="/login">
                <img
                  src="https://github.com/rutvikpumak/pustaka-ecom/blob/dev/images/logo.png?raw=true"
                  alt="login"
                />
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <div className="icon cart-badge">
                  <i className="fa fa-heart-o "></i>
                  <div className="notification-icon flex-center">
                    <span>1</span>
                  </div>
                </div>
              </Link>
            </li>

            <Link to="/cart">
              <li className="nav-cart">
                <div className="icon cart-badge">
                  <i className="fa fa-shopping-cart "></i>
                  <div className="notification-icon flex-center">
                    <span>1</span>
                  </div>
                  {/* {cartCount > 0 && (
                      <div className="notification-icon flex-center">
                        <span>{cartCount}</span>
                      </div>
                    )} */}
                </div>
              </li>
            </Link>
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
