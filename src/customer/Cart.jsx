import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import "../assets/css/Cart.css";

export default function Cart() {

  const {
    cart,
    removeFromCart,
    decreaseQty,
    addToCart,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const confirmed = window.confirm("Xác nhận thanh toán giỏ hàng?");
    if (confirmed) {
      clearCart();
      alert("Thanh toán thành công! Cảm ơn bạn.");
      navigate("/customer");
    }
  };

  return (
    <div className="cart-page">
      {/* Back */}
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Quay lại
      </button>

      <h2>🛒 Giỏ hàng</h2>

      {/* Empty */}
      {cart.length === 0 && (
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h3>Giỏ hàng của bạn đang trống</h3>
          <p>
            Hãy thêm sản phẩm vào giỏ để tiếp tục mua sắm nhé!
          </p>
          <button
            className="cart-empty-btn"
            onClick={() => navigate("/customer")}
          >
            Tiếp tục mua sắm
          </button>
        </div>
      )}

      {/* List */}
      {cart.map((item) => (
        <div
          className="cart-item"
          key={item.id}
        >

          {/* IMAGE */}
          <img
            src={item.img}
            alt={item.name}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/150";
            }}
          />

          <div className="cart-info">

            <h3>{item.name}</h3>

            <p>
              Giá: {item.price.toLocaleString()} đ
            </p>

            {/* Quantity */}
            <div className="qty-box">

              <button
                onClick={() =>
                  decreaseQty(item.id)
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => addToCart(item)}
              >
                +
              </button>

            </div>

            <p>
              Thành tiền:{" "}
              {(item.price * item.quantity)
                .toLocaleString()}{" "}
              đ
            </p>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Xóa
            </button>

          </div>

        </div>
      ))}

      {/* Total */}
      {cart.length > 0 && (
        <div className="cart-total">
          <p>
            Tổng tiền:{" "}
            <span>
              {totalPrice.toLocaleString()} đ
            </span>
          </p>

          <button className="checkout-btn" onClick={handleCheckout}>
            Thanh toán
          </button>
        </div>
      )}
    </div>
  );
}
