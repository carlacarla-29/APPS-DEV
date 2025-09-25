import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/api";
import { useCart } from "../../context/CartContext";
import Loader from "../common/Loader";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function load() {
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-2xl mx-auto border p-4 rounded">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <h2 className="text-2xl font-bold mt-2">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2">Price: ${product.price}</p>
      <p>Rating: {product.rating}⭐</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
