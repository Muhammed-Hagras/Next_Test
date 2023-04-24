import { products } from "@/data/productsData";

export default function handler(req, res) {
  let productId = req.query.productId;
  let product = products.find((product) => product.id == productId);
  res.status(200).json(product);
}

//http://localhost:3000/api/products/productId
