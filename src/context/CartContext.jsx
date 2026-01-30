import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Thêm sản phẩm
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find(
        (item) => item.id === product.id
      );

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Giảm số lượng
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Xóa sản phẩm
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQty,
        clearCart,

        // Tổng số lượng
        totalQty: cart.reduce(
          (sum, item) => sum + item.quantity,
          0
        ),

        // Tổng tiền
        totalPrice: cart.reduce(
          (sum, item) =>
            sum + item.price * item.quantity,
          0
        ),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
