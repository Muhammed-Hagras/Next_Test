import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function MyNav() {
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="/">Coffe Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/posts" className="nav-link">
              Posts
            </Link>
            <Link href="/books" className="nav-link">
              Books
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
