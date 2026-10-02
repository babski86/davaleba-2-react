"use client";

import Image from "next/image";

import ProductItem from "../components/ProductItem/productitem";
import { useState, useEffect } from "react";

export default function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      {product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
