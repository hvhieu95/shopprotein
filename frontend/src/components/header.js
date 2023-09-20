import React, { useEffect, useState } from "react";
import Logo from "../image/logo.png";
import { CartDropDown } from "./CartDropdown";
import { Link } from "react-router-dom";
import "../style/header.css";

export function Header({ cart, setCart }) {
  // State để kiểm tra xem giỏ hàng có đang hiển thị hay không
  const [cartVisible, setCartVisible] = useState(false);
  // Hàm để chuyển đổi trạng thái hiển thị của giỏ hàng
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  // Hook useEffect để kiểm soát việc cuộn trang khi giỏ hàng hiển thị
  useEffect(() => {
    if (cartVisible) {
      // Khóa cuộn trang khi giỏ hàng mở
      document.body.style.overflow = "hidden";
    } else {
      // Cho phép cuộn trang khi giỏ hàng đóng
      document.body.style.overflow = "auto";
    }
  }, [cartVisible]);

  // Hàm để đóng giỏ hàng khi nhấp vào nút đóng hoặc bên ngoài giỏ hàng
  const closeCart = (e) => {
    if (e.target === e.currentTarget) {
      setCartVisible(false);
    }
  };

  // hàm tính tổng giá tiền ở giỏ hàng
  const getTotalPrice = () => {
    const total = cart.reduce((acc, product) => {
      const price = Number(product.price.replace("$", "")).toFixed(1);
      return acc + price * product.quantity;
    }, 0);
    return total.toFixed(2);
  };
  // hàm tính tổng số lượng sản phẩm trong giỏ hàng
  const getTotalQuantify = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };

  return (
    <div className="main-header">
      <div className="container1">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/allproducts">Everything</Link>
            </li>
            <li>
              <a href="#">whey protein</a>
            </li>
            <li>
              <a href="#">BCAA</a>
            </li>
            <li>
              <a href="#">Omega</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="account-and-cart">
        <nav className="nav2">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="cart-container" onClick={toggleCart}>
          <span className="price-amount">${getTotalPrice()}</span>
          <a href="#" className="cart-link">
            <span className="cart-icon" data-quantity={getTotalQuantify()}>
              🛒
            </span>
          </a>
        </div>
        <CartDropDown
          cart={cart}
          setCart={setCart}
          cartVisible={cartVisible}
          closeCart={closeCart}
          getTotalPrice={getTotalPrice}
        />
        <div className="account">
          <Link to="/login" className="account-link">
            <span className="account-icon">👤</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
