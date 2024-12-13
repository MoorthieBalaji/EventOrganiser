import React, { useState } from "react";
import { Modal, Row, Col, Button, Container } from "react-bootstrap";
import "../Components/Wedding.css";
import Header from "./Header";
import axios from "axios";
import img1 from "../assets/s11.jpeg";
import img2 from "../assets/s7.jpg";
import img3 from "../assets/s8.jpg";
import img4 from "../assets/s4.jpg";
import img7 from "../assets/d5.jpg";
import img8 from "../assets/b1.jpg";
import img9 from "../assets/b2.jpg";

const Weddng = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const handleClose = () => setShow(false);
  const userName = sessionStorage.getItem("userName");

  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  const handleAddToCart = async (itemName, itemPrice) => {
    const newItem = {
      name: itemName,
      price: itemPrice,
      user: userName,
    };

    try {
      const response = await axios.post(
        "http://localhost:5001/api/add-to-cart",
        newItem
      );
      if (response.status === 201) {
        console.log("Item added to cart successfully");
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (e) {
      console.error("Error adding item to cart:", e);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="header-container">
        <Header />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Container>
          {/* First Row of Cards */}

          <Row className="mt-5 g-4 justify-content-center">
            <h3 className="text4">Stage Decoration:</h3>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 r1" onClick={() => handleShow(img1)}></div>
              <div className="text2">
                <p>Decoration-1</p>
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.80000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Decoration-1", 80000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 r2" onClick={() => handleShow(img2)}></div>
              <div className="text2">
                <p>Decoration-2</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.70000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Decoration-2", 70000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </h5>{" "}
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 r3" onClick={() => handleShow(img3)}></div>

              <div className="text2">
                <p>Decoration-3</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.85000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Decoration-3", 85000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 r4" onClick={() => handleShow(img4)}></div>

              <div className="text2">
                <p>Decoration-4</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.75000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Decoration-4", 75000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-3 g-4 justify-content-center">
            <h3 className="text4">DJ & Photography:</h3>

            <Col xs={10} sm={6} md={3} className="text-center ">
              <div className="card1 r5" onClick={() => handleShow(img7)}></div>
              <div className="text2">
                <p>DJ Event</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.40000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("DJ Event", 40000)}>
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 r8" onClick={() => handleShow(img7)}></div>
              <div className="text2">
                <p>Photography</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.50000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Photography", 50000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-4 g-4 justify-content-center">
            <h3 className="text4">Musical Band:</h3>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 r6" onClick={() => handleShow(img8)}></div>
              <div className="text2">
                <p>Band</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.60000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Band", 60000)}>
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 r7" onClick={() => handleShow(img9)}></div>

              <div className="text2">
                <p>Chandamela</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.50000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Chandamela", 50000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Body>
              <img
                src={currentImage}
                alt="Full Size"
                style={{ width: "100%" }}
              />
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </div>
  );
};

export default Weddng;
