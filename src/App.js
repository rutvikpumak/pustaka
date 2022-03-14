import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart, Home, Product, ProductPage, Wishlist } from "./pages/index.js";
import Mockman from "mockman-js";
import Navbar from "./component/Navbar/Navbar";
import { Login } from "./pages/Auth";

function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/product" element={<Product />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
