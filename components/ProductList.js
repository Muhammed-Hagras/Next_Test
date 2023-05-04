import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

export default function ProductList(props) {
  return (
    <ul className={styles.list}>
      {props.products.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          img={product.image}
          desc={product.desc}
          title={product.name}
          price={product.price}
        />
      ))}
    </ul>
  );
}
