import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import products from "../data/products";

function CategoryPage() {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Category: {categoryName}</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default CategoryPage;