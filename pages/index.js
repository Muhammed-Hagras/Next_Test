import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import ProductList from "../components/ProductList";

const products = [
  {
    id: 1,
    title: "Coffe",
    price: "15$",
    img: "https://images.pexels.com/photos/3806690/pexels-photo-3806690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 2,
    title: "Nescafe",
    price: "30$",
    img: "https://images.pexels.com/photos/1002649/pexels-photo-1002649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    title: "Milk",
    price: "35%",
    img: "https://images.pexels.com/photos/799273/pexels-photo-799273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "This is a ook for explaining javaScript\n",
    id: 3,
  },
];

function HomePage(props) {
  const [loadedProducts, setloadedProducts] = useState([]);

  useEffect(() => {
    setloadedProducts(products);
  }, []);

  return (
    <Fragment>
      <ProductList products={props.products} />
    </Fragment>
  );
}
export default HomePage;

//To get data from server before loading the page
export function getStaticProps() {
  return {
    //applying Preerendring concept
    props: {
      products,
    },
    //to update site every one second to get new data
    revalidate: 1,
  };
}
