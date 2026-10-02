import styles from "./productitem.module.css";

export default function ProductItem({ product }) {
  return (
    <div className={styles.productItem} key={product.id}>
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>
          {product.rating.rate} ({product.rating.count})
        </p>
      </div>
    </div>
  );
}
