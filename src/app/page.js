"use client";

import Image from "next/image";

import ProductItem from "../components/ProductItem/productitem";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(3);
  const [fotoError, setFotoError] = useState(false);
  const foto = "https://friendlystock.com/wp-content/uploads/2018/03/1-man-with-exploding-computer-cartoon-clipart.jpg";
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(true);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    if (error && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 1;
          if (newTimer <= 0) {
            setFotoError(true);
          }
          return newTimer;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [error, timer]);
  if (fotoError) {
    return (
      <div className={styles.fotoError}>
        <img src={foto} alt="Error" width={400} height={400} />
      </div>
    );
  }
  if (loading) {
    return <div>მაცადე ვიტვირთები...</div>;
  }

  if (error) {
    return (
      <section className={styles.errorState} role="alert">
        <div>Error fetching products dropdown</div>
        <h3>დროზე გათიშე კამპუტერი </h3>
        <p>ტაიმერი ჩაირთო!!!!!!!!!</p>
        <p>დარჩენილი დრო: {timer} წამი</p>
      </section>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
