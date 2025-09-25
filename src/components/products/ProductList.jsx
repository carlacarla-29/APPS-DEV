import React from 'react';
import ProductCard from './ProductCard';
import Loader from '../common/Loader';
import useFetchProducts from '../../hooks/useFetchProducts';


export default function ProductList() {
const { products, loading, error } = useFetchProducts();


if (loading) return <Loader />;
if (error) return <p className="text-red-600">{error}</p>;


return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{products.map((product) => (
<ProductCard key={product.id} product={product} />
))}
</div>
);
}