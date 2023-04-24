import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function HomePage(props) {
  // const [loadedProducts, setloadedProducts] = useState([]);

  // useEffect(() => {
  //   setloadedProducts(products);
  // }, []);

  return (
    <Fragment>
      <ProductList products={props.products} />
    </Fragment>
  );
}
export default HomePage;

//To get data from server before loading the page
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    }, // will be passed to the page component as props
  };
  // return {
  //   //applying Preerendring concept
  //   props: {
  //     products,
  //   },
  //   //to update site every one second to get new data
  //   revalidate: 1,
  // };
}
