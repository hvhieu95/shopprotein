import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { MainContent } from "./components/content";
import { Footer } from "./components/footer";
import { Login } from "./components/login";
import { ForgotPassword } from "./components/ForgotPassword";
import { Register } from "./components/Register";
import { AllProducts } from "./components/allproducts";
function App() {
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
              <Header />
              <MainContent />
              <Footer />
            </>
          }
        />
        <Route
          path="/allproducts"
          element={
            <>
              <Header />
              <AllProducts />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
