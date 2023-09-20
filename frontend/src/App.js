import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { MainContent } from "./components/content";
import { Footer } from "./components/footer";
import { Login } from "./components/login";
import { ForgotPassword } from "./components/ForgotPassword";
import { Register } from "./components/Register";
import { AllProducts } from "./components/allproducts";
function App() {
  // state cho giỏ hàng
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/ForgotPassword"
          element={
            <>
              <ForgotPassword />
            </>
          }
        />
        <Route
          path="/Register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              {/* truyền cart và setcart dưới dạng props đến header */}
              <Header cart={cart} setCart={setCart} />
              <MainContent />
              <Footer />
            </>
          }
        />
        <Route
          path="/allproducts"
          element={
            <>
              {/* truyền cart và setCart dưới dạng props đến header và allproducts */}
              <Header cart={cart} setCart={setCart} />
              <AllProducts cart={cart} setCart={setCart} />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
