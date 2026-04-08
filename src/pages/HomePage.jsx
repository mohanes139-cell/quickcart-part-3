import { useState } from "react";
import ProductList from "../components/ProductList";
import products from "../data/products";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      {filteredProducts.length === 0 ? (
        <p>No search results found.</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default HomePage;