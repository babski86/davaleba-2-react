"use client";

import Image from "next/image";

import ProductItem from "../components/ProductItem/productitem";
import { useState, useEffect } from "react";

export default function Home() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if (product === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
