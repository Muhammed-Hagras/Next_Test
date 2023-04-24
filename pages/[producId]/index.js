import ProductDetails from "../../components/ProductDetails";
import { useRouter } from "next/router";

export default function ProductDetailsPage(props) {
  console.log(props);
  // const router = useRouter();
  // const myProductId = router.query.producId; //to get params which is the file Iteself
  return (
    <div>
      <ProductDetails
        // id={props.productData.productId}
        title={props.productData.title}
        price={props.productData.price}
        img={props.productData.img}
        desc={props.productData.desc}
      />
    </div>
  );
}

// export function getStaticPaths() {
//   //Connect to db to get products ids
//   return {
//     fallback: true,
//     paths: [
//       {
//         params: {
//           productId: "1",
//         },
//       },
//       {
//         params: {
//           productId: "2",
//         },
//       },
//     ],
//   };
// }

export function getStaticPaths() {
  return {
    paths: [
      { params: { productId: "1" } },
      { params: { productId: "2" } },
      // { params: { productId: "3" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export function getStaticProps(context) {
  // Fetch data => productDetails //Dynamically
  const productId = context.params.productId;

  return {
    props: {
      productData: {
        id: productId,
        title: "Coffe",
        price: "15$",
        img: "https://images.pexels.com/photos/3806690/pexels-photo-3806690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
      },
    },
  };
}
