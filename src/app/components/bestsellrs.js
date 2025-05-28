// components/BestSellers.js
"use client"
import { useEffect, useState } from 'react';

export default function BestSellers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/premium-backend/get-products.php')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="px-8 py-12">
 
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded text-center">
            <img src={`/products/${product.image}`} alt={product.name} className="mb-2 mx-auto" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
