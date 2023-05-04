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
      <ProductList products={props.products.data} />
    </Fragment>
  );
}
export default HomePage;

//To get data from server before loading the page
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/mongoproducts");
  const data = await res.json();
  console.log(data);
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
