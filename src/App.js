import { useEffect, useState } from "react";
import CartPage from "./pages/cartpage/CartPage";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import ProductDetailPage from "./pages/productdetailpage/ProductDetailPage";
import RegisterPage from "./pages/registerpage/RegisterPage";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {

  const user = useSelector((state) => {
    return state.Reducers.userLog[0].isLoggedIn;
});


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
