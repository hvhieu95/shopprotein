import React from "react";
import "../style/cartdropdown.css";

export function CartDropDown ({cartVisible,closeCart}){
    return (
        cartVisible && (
          <div className="cart-overlay" onClick={closeCart}>
            <div className="cart-dropdown visible" onClick={closeCart}>
              <button className="close-cart" onClick={closeCart}>X</button>
              <div className="cart-header">
                <h3>Shopping Cart</h3>
              </div>
              <div className="cart-content">
                <p>No products in the cart.</p>
              </div>
              <div className="cart-footer">
                <button className="continue-shopping">CONTINUE SHOPPING</button>
              </div>
            </div>
          </div>
        )
      );
}