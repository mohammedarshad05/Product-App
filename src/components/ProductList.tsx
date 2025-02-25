import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


interface Product {
  id: number;
  title: string;
  thumbnail: string; 
  description: string;
  category: string;
  price: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Error while fetching the products list");
      }

      const data = await response.json();
      setProducts(data.products); 

    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
    <div className="row">
      <h2>👚 product Lists</h2>
        {products.map((product) => (
            <div className="col-md-4" key={product.id}>
                <div className="card mb-4 ">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <img src={product.thumbnail} className="card-img-top" alt="..."/>
                        <p className="card-text">{product.category}</p>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">{product.price}</p>
                        <Link className="btn btn-outline-primary" to={`/products/${product.id}`}>🍴{product.title}</Link>
                        </div>
                </div>
            </div>
        ))}
    </div>
</div>
);
}

export default ProductList;
