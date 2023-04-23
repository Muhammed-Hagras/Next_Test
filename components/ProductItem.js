import { Button, Card } from "react-bootstrap";
import styles from "./ProductItem.module.css";
import { useRouter } from "next/router";

export default function ProductItem({ id, title, desc, img, price }) {
  const router = useRouter();
  const showDetaisHandler = () => {
    router.push(`/${id}`);
  };
  return (
    <li className="">
      <Card style={{ width: "40rem" }} className="my-3">
        <Card.Img
          style={{ height: "250px", objectFit: "cover" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="dark" onClick={showDetaisHandler}>
            Show Details
          </Button>
        </Card.Body>
      </Card>
    </li>
  );
}
