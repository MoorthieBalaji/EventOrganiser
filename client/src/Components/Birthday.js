import React from "react";
import { Modal, Row, Col, Button, Container } from "react-bootstrap";
import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import "../Components/Birthday.css";
import img1 from "../assets/bp1.jpg";
import img2 from "../assets/bp2.jpg";
import img3 from "../assets/bp3.jpg";
import img4 from "../assets/bp4.jpg";
import img5 from "../assets/bp5.jpg";
import img6 from "../assets/bp6.jpg";
import img7 from "../assets/bp7.jpg";
import img8 from "../assets/bp8.jpg";
import img11 from "../assets/c1.jpg";
import img12 from "../assets/c2.jpg";
import img13 from "../assets/c3.jpg";
import img14 from "../assets/c4.jpg";
import img15 from "../assets/c5.jpg";
import img16 from "../assets/c6.jpg";
import img17 from "../assets/c7.jpg";
import img18 from "../assets/c8.jpg";
import img19 from "../assets/c9.jpg";
import img21 from "../assets/d5.jpg";

const Birthday = () => {
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
      <div className="header-container">
        <Header />
      </div>
      <div className="main-content">
        <Container>
          <Row className="mt-5 g-4 justify-content-center">
            <h3 className="text4">Background Decoration:</h3>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 b1" onClick={() => handleShow(img1)}></div>
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
              <div className="card1 b2" onClick={() => handleShow(img2)}></div>
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
              <div className="card1 b3" onClick={() => handleShow(img3)}></div>

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
              <div className="card1 b4" onClick={() => handleShow(img4)}></div>

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

          <Row className="mt-5 g-4 justify-content-center">
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 b5" onClick={() => handleShow(img5)}></div>
              <div className="text2">
                <p>Decoration-5</p>
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.80000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Decoration-5", 80000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 b6" onClick={() => handleShow(img6)}></div>
              <div className="text2">
                <p>Decoration-6</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.70000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Decoration-6", 70000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </h5>{" "}
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 b7" onClick={() => handleShow(img7)}></div>

              <div className="text2">
                <p>Decoration-7</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.85000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Decoration-7", 85000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 b8" onClick={() => handleShow(img8)}></div>

              <div className="text2">
                <p>Decoration-8</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.75000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Decoration-8", 75000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 g-4 justify-content-center">
            <h3 className="text4">Cake:</h3>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 b9" onClick={() => handleShow(img11)}></div>
              <div className="text2">
                <p>Cake-1</p>
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.500/Kg
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Cake-1", 500)}>
                      BUY
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 b10"
                onClick={() => handleShow(img12)}
              ></div>
              <div className="text2">
                <p>Cake-2</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.450/Kg
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Cake-2", 450)}>
                      BUY
                    </Button>
                  </span>
                </h5>{" "}
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 b11"
                onClick={() => handleShow(img13)}
              ></div>

              <div className="text2">
                <p>Cake-3</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.850/Kg
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Cake-3", 850)}>
                      BUY
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 b12"
                onClick={() => handleShow(img14)}
              ></div>

              <div className="text2">
                <p>Cake-4</p>
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.750/Kg
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Cake-4", 750)}>
                      BUY
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 g-4 justify-content-center">
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 b13"
                onClick={() => handleShow(img15)}
              ></div>
              <div className="text2">
                <p>Cake-5</p>
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.800/Kg
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Cake-5", 800)}>
                      BUY
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 b14"
                onClick={() => handleShow(img16)}
              ></div>
              <div className="text2">
                <p>Cake-6</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.700/Kg
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Cake-6", 700)}>
                      BUY
                    </Button>
                  </span>
                </h5>{" "}
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 b15"
                onClick={() => handleShow(img17)}
              ></div>

              <div className="text2">
                <p>Cake-7</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.850/Kg
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Cake-7", 850)}>
                      BUY
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 b16"
                onClick={() => handleShow(img18)}
              ></div>

              <div className="text2">
                <p>Cake-8</p>
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.550
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Cake-8", 550)}>
                      BUY
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
          </Row>

          <Row className="mt-3 g-4 justify-content-center">
            <h3 className="text4">DJ & Photography:</h3>

            <Col xs={10} sm={6} md={3} className="text-center ">
              <div
                className="card1 b17"
                onClick={() => handleShow(img21)}
              ></div>
              <div className="text2">
                <p>DJ Event</p>
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.40000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("DJ Event", 40000)}>
                      BOOK
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 b18"
                onClick={() => handleShow(img19)}
              ></div>
              <div className="text2">
                <p>Photography</p>
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.50000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Photography", 50000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </h5>
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
export default Birthday;
