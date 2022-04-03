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
          <Route exact path="/home" element={<Home />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/product" element={<Product />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order_summary" element={<OrderSummary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user_profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
