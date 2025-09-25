// src/services/api.js
const BASE_URL = "https://dummyjson.com";

// Get all products
export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.products; // returns an array of products
}

// Get single product by ID
export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product details");
  return res.json();
}
