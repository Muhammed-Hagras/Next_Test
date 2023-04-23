import ProductDetails from "../../components/ProductDetails";
import { useRouter } from "next/router";

export default function ProductDetailsPage() {
  const router = useRouter();
  const myProduct = router.query.producId; //to get params which is the fileIteself
  return (
    <div>
      <ProductDetails
        id={1}
        title="Coffe"
        price="15$"
        img="https://images.pexels.com/photos/3806690/pexels-photo-3806690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        desc="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"
      />
    </div>
  );
}
