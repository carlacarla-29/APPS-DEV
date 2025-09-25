// src/pages/BrowseProducts.jsx
import { useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/products/ProductCard";

export default function BrowseProducts() {
  const { products, loading, error } = useFetchProducts();

  // Local states
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // number of products per page

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  // Handle search (Enter key)
  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchInput.trim());
      setCurrentPage(1); // reset to first page when searching
    }
  };

  // 1. Search filter
  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 2. Category filter
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // 3. Price range filter
  filtered = filtered.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  // 4. Sorting
  if (sort === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "bestSeller") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // --- Pagination logic ---
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filtered.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Browse Products</h2>

      {/* Search + Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products... Enter"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          className="border p-2 rounded w-48"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="default">Sort</option>
          <option value="az">A–Z</option>
          <option value="priceLowHigh">Price: Low → High</option>
          <option value="priceHighLow">Price: High → Low</option>
          <option value="bestSeller">Best Seller</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All Categories</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
        </select>

        <div className="flex items-center gap-2">
          <span>Price:</span>
          <input
            type="number"
            placeholder="Min"
            className="border p-1 w-20"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([+e.target.value, priceRange[1]])
            }
          />
          <input
            type="number"
            placeholder="Max"
            className="border p-1 w-20"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], +e.target.value])
            }
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-gray-200 text-black"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
