// import { useRouter } from "next/router";
import { Card } from "react-bootstrap";

export default function bookId({ book }) {
  //   const router = useRouter();
  //   const mybookId = router.query.params.bookId;
  

  console.log(book);
  return (
    <div>
      <Card style={{ width: "40rem" }} className="my-3 ">
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get books
  const res = await fetch("http://localhost:3000/api/books");
  const books = await res.json();

  // Get the paths we want to prerender based on books
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = books.map((book) => ({
    params: { bookId: `${book.id}` }, //must be bookId as the filename and route
  }));
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/books/${context.params.bookId}`
  );
  const data = await res.json();
  return {
    props: {
      book: data,
    }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps(context) {
// Everytime makes a request
//   const res = await fetch(
//     `http://localhost:3000/api/books/${context.params.bookId}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       book: data,
//     }, // will be passed to the page component as props
//   };
// }
