import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export default function Cart() {
const { cart, updateQty, removeFromCart, clearCart } = useCart();


const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


if (cart.length === 0) {
return <p>Your cart is empty. <Link to="/products" className="text-blue-600">Shop now</Link>.</p>;
}


return (
<div>
<h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
{cart.map((item) => (
<div key={item.id} className="flex justify-between border-b py-2">
<div>
<h3>{item.title}</h3>
<p>${item.price} x {item.qty}</p>
<input
type="number"
value={item.qty}
min="1"
onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
className="w-16 border"
/>
<button
onClick={() => removeFromCart(item.id)}
className="ml-2 text-red-600"
>
Remove
</button>
</div>
<p>${item.price * item.qty}</p>
</div>
))}
<h3 className="text-xl font-semibold mt-4">Total: ${total.toFixed(2)}</h3>
<div className="mt-4 space-x-2">
<button onClick={clearCart} className="bg-gray-500 text-white px-4 py-2 rounded">Clear</button>
<Link to="/checkout" className="bg-green-600 text-white px-4 py-2 rounded">Checkout</Link>
</div>
</div>
);
}