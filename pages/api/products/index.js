import { products } from "@/data/productsData";

export default function handler(req, res) {
  res.status(200).json(products);
}

//http://localhost:3000/api/products/
