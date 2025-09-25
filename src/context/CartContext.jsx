import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
	setCart((prev) => [...prev, product]);
  };

  const updateQty = (id, qty) => {
	setCart((prev) =>
	  prev.map((p) => (p.id === id ? { ...p, qty } : p))
	);
  };

  const removeFromCart = (id) => {
	setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
	<CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart }}>
	  {children}
	</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


// ======================= src/services/api.js =======================
const BASE_URL = 'https://dummyjson.com/products';


export async function fetchProducts() {
const res = await fetch(`${BASE_URL}?limit=100`);
return res.json();
}


export async function fetchProductById(id) {
const res = await fetch(`${BASE_URL}/${id}`);
return res.json();
}