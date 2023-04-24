import { books } from "@/data/booksData";

export default function handler(req, res) {
  res.status(200).json(books);
}

//http://localhost:3000/api/books
