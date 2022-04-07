import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart, Home, Product, ProductPage, UserProfile, Wishlist, Checkout, Error } from "./pages";
import Mockman from "mockman-js";
import Navbar from "./component/Navbar/Navbar";
import { Login, Signup } from "./pages/Auth";
import { useData } from "./context";
import { Loader } from "./component/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";
import { PrivateRoute } from "./component/PrivateRoute/PrivateRoute";

function App() {
  const { loader } = useData();
  return (
    <div className="App">
      {loader && <Loader />}

      <Router>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose="500"
          limit="1"
          style={{ top: "4.5em", right: "0em" }}
        />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/user_profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/order_summary"
            element={
              <PrivateRoute>
                <OrderSummary />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
