import React from "react";
import { Card } from "react-bootstrap";

export default function ProductDetails({ img, id, desc, title }) {
  return (
    <div className="">
      <Card style={{ width: "40rem" }} className="my-3">
        <Card.Img
          style={{ height: "250px", objectFit: "cover" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
