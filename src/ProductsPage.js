import React from "react";
import "./ProductsPage.css";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$10"
    },
    {
      id: 2,
      name: "Product 2",
      price: "$15"
    },
    {
      id: 3,
      name: "Product 3",
      price: "$20"
    }
  ];

  return (
    <div className="products-container">
      <h1>Products Page</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
