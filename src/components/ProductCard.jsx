import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div>
      <img src={product.image} alt={product.name} width="200" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;