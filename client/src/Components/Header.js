import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="nav">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <span
              className="t1"
              style={{
                color: "#0AFFFF",
                fontSize: "50px",
                fontWeight: "inherit",
              }}
            >
              D
            </span>
            ream
            <span
              className="t2"
              style={{
                color: "#FF00FF",
                fontSize: "40px",
                fontWeight: "inherit",
                fontFamily: "Princess Sofia,cursive",
              }}
            >
              C
            </span>
            atcher
          </Navbar.Brand>

          {/* Hamburger Button (Navbar.Toggle) */}
          <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />

          {/* Collapsible Navbar Links */}
          <Navbar.Collapse id="navbar-nav" className="ms-auto">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="link lb">
                <span style={{ color: "#0AFFFF" }}>H</span>ome
              </Nav.Link>
              <Nav.Link href="/Service" className="link lv">
                <span style={{ color: "#FF00FF" }}>S</span>ervices
              </Nav.Link>
              <Nav.Link href="/About" className="link lb">
                <span style={{ color: "#0AFFFF" }}>A</span>bout
              </Nav.Link>
              <Nav.Link href="/Contact" className="link lv">
                <span style={{ color: "#FF00FF" }}>C</span>ontact
              </Nav.Link>
              <Nav.Link href="/Profile" className="link lv">
                <span style={{ color: "#0AFFFF" }}>P</span>rofile
              </Nav.Link>
              <Nav.Link href="/Cart" className="link lv">
                <span style={{ color: "#FF00FF" }}>C</span>art
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
