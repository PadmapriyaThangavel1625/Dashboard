"use client";

import { useEffect, useState } from "react";

interface Product {
  product_id: string;
  product_name: string;
  price: string;
  offer_price: string;
  stock_qty: string;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "list",
        }),
      });

      const result = await res.json();

      if (result.status) {
        setProducts(result.data);
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="p-5">Loading...</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">Products</h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Offer Price</th>
            <th className="border p-2">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.product_id}>
                <td className="border p-2 text-center">
                  {product.product_id}
                </td>
                <td className="border p-2">
                  {product.product_name}
                </td>
                <td className="border p-2 text-center">
                  ₹{product.price}
                </td>
                <td className="border p-2 text-center">
                  ₹{product.offer_price}
                </td>
                <td className="border p-2 text-center">
                  {product.stock_qty}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="border p-4 text-center text-red-500"
              >
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}