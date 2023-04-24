import Link from "next/link";
import { Card } from "react-bootstrap";

export default function Books({ books }) {
  // console.log(books);
  return (
    <>
      {books.map((book) => (
        // <div key={book.id}>
        <Card key={book.id} style={{ width: "40rem" }} className="my-3 ">
          <Card.Body>
            <Link href={`/books/${book.id}`}>{book.title}</Link>
          </Card.Body>
        </Card>
        // </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/books");
  const data = await res.json();
  return {
    props: {
      books: data,
    }, // will be passed to the page component as props
  };
}
