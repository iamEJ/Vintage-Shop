import React from "react";
import localCart from "../utils/LocalCart";

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItem] = React.useState(0);

  React.useEffect(() => {
    //local storage
    //cart items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItem(newCartItems);
    //cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };
  const increaseAmount = (id) => {};
  const decreaseAmount = (id) => {};
  const addToCart = (product) => {};
  const clearCart = () => {};
  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
