import Link from "next/link";
import { Card } from "react-bootstrap";

export default function Posts({ posts }) {
  //getting data from psops and make use of itS
  // console.log(posts);
  return (
    <>
      {posts.map((post) => (
        // <div key={post.id}>
        <Card key={post.id} style={{ width: "40rem" }} className="my-3 ">
          <Card.Body>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </Card.Body>
        </Card>
        // </div>
      ))}
    </>
  );
}

//Fetching data to props
export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  return {
    props: {
      posts: data,
    }, // will be passed to the page component as props
  };
}
