import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

export default function ProductList(props) {
  return (
    <ul className={styles.list}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          img={product.img}
          desc={product.desc}
          title={product.title}
          price={product.price}
        />
      ))}
    </ul>
  );
}
