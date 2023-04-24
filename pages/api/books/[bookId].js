import { books } from "@/data/booksData";

export default function handler(req, res) {
  let bookId = req.query.bookId;
  let book = books.find((book) => book.id == bookId);
  res.status(200).json(book);
}

//http://localhost:3000/api/books/bokId
