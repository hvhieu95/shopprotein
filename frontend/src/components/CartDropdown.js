import React from "react";
import "../style/cartdropdown.css";

export function CartDropDown({ cartVisible, closeCart, cart, setCart,getTotalPrice}) {

  // hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };
  //hàm tăng số lượng sản phẩm trong giỏ hàng
  const increaseQuantify = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };
  // hàm giảm số lượng sản phẩm  trong giỏ hàng
  const decreaseQuantify = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  return (
    cartVisible && (
      <div className="cart-overlay" onClick={closeCart}>
        <div
          className="cart-dropdown visible"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="cart-header">
            <h3>Your Cart</h3>
            <span className="close-cart" onClick={closeCart}>
              ✖
            </span>
          </div>
          <div className="cart-content">
            {cart && cart.length > 0 ? (
              cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <img src={product.image} alt={product.name} />

                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <span className="product-price">{product.price}</span>

                    <div className="product-quantity">
                      <button onClick={() => decreaseQuantify(product.id)}>
                      ➖
                      </button>
                      <input type="number" value={product.quantity} readOnly />
                      <button onClick={() => increaseQuantify(product.id)}>
                      ✖️
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(product.id)}
                  >
                   ❎
                  </button>
                </div>
              ))
            ) : (
              <p>No products in the cart.</p>
            )}
          </div>
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <div className="cart-buttons">
              <button className="view-cart-btn">View Cart</button>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
