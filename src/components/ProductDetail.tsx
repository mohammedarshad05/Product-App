import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Product {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  price: number;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch(() => setError("Failed to load product"));
  }, [id]);

  if (error) return <p className="text-danger"> {error} </p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="card custom-card">
        <img
          src={product.thumbnail}
          className="card-img-top custom-img"
          alt={product.title}
        />
        <div className="card-body">
          <h2 className="card-title text-danger">{product.title}</h2>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Category: {product.category}</p>
          <p className="card-text"> Price: ${product.price}</p>
          <Link to="/products" className="btn btn-primary mt-4">
            - Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
