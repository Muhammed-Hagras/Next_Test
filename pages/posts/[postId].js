// import { useRouter } from "next/router";
import { Card } from "react-bootstrap";

export default function postId({ post }) {
  //   const router = useRouter();
  //   const myPostId = router.query.params.postId;
  console.log(post);
  return (
    <div>
      <Card style={{ width: "40rem" }} className="my-3 ">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { postId: `${post.id}` }, //must be postId as the filename and route
  }));
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps(context) {
// Everytime makes a request
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.postId}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       post: data,
//     }, // will be passed to the page component as props
//   };
// }
