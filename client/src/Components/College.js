import React, { useState } from "react";
import Header from "../Components/Header";
import { Row, Col, Modal, Button, Container } from "react-bootstrap";
// import vf1 from '../assets/ce1.mp4';
import axios from "axios";
import vf2 from "../assets/ce2.mp4";
import vf3 from "../assets/ce3.mp4";
import vf5 from "../assets/ce5.mp4";
import img1 from "../assets/d1.jpg";
import img2 from "../assets/d9.jpg";
import img3 from "../assets/d8.jpg";
import img4 from "../assets/d6.jpg";
import img5 from "../assets/d7.jpg";
import img6 from "../assets/e1.jpg";
import img7 from "../assets/e2.jpg";
// import img8 from '../assets/e3.jpg';
import img9 from "../assets/e4.jpg";
import img10 from "../assets/e5.jpg";
import "../Components/College.css";
const College = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const handleClose = () => setShow(false);
  const userName = sessionStorage.getItem("userName");
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };
  const handleVideoClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo("");
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
            <h3 className="text4">Stage Setup:</h3>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 ">
                <video
                  width="250"
                  height="180"
                  controls
                  onClick={() => handleVideoClick(vf2)}
                >
                  <source src={vf2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text2">
                <p>Stage-1</p>
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.500000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Stage-1", 500000)}>
                      BOOK
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 ">
                <video
                  width="250"
                  height="180"
                  controls
                  onClick={() => handleVideoClick(vf3)}
                >
                  <source src={vf2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text2">
                <p>Stage-2</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs.400000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Stage-2", 400000)}>
                      BOOK
                    </Button>
                  </span>
                </h5>{" "}
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 ">
                <video
                  width="250"
                  height="180"
                  controls
                  onClick={() => handleVideoClick(vf5)}
                >
                  <source src={vf5} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text2">
                <p>Satge-3</p>{" "}
              </div>
              <div className="text3">
                <h5>
                  Price: Rs350000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Stage-3", 350000)}>
                      BOOK
                    </Button>
                  </span>
                </h5>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 ">
                <video
                  width="250"
                  height="180"
                  controls
                  onClick={() => handleVideoClick(vf3)}
                >
                  <source src={vf3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text2">
                <p>Stage-4</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.450000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Stage-4", 450000)}>
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-3 g-4 justify-content-center">
            <h3 className="text4">Stalls:</h3>

            <Col xs={10} sm={6} md={3} className="text-center ">
              <div className="card1 s1" onClick={() => handleShow(img1)}></div>
              <div className="text2">
                <p>Clothes Stall</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.4000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Clothes Stall", 4000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 s2" onClick={() => handleShow(img2)}></div>
              <div className="text2">
                <p>Book Stall</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.3000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Book Stall", 3000)}>
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 s3" onClick={() => handleShow(img4)}>
                {" "}
              </div>
              <div className="text2">
                <p>Food Stall</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.8000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Food Stall", 8000)}>
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 s4" onClick={() => handleShow(img5)}></div>

              <div className="text2">
                <p>Juice Stall</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.5000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Juice Stall", 5000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 g-4 justify-content-center">
            <h3 className="text4">Entertainment:</h3>

            <Col xs={10} sm={6} md={3} className="text-center ">
              <div className="card1 s5" onClick={() => handleShow(img6)}></div>
              <div className="text2">
                <p>Ghost house</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.30000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Ghost house", 30000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 s6" onClick={() => handleShow(img9)}></div>
              <div className="text2">
                <p>3D Show</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.35000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("3D Show", 35000)}>
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>

            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 s7" onClick={() => handleShow(img10)}></div>
              <div className="text2">
                <p>Magic Show</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.30000
                  <span className="ms-3">
                    <Button
                      onClick={() => handleAddToCart("Magic Show", 30000)}
                    >
                      BOOK
                    </Button>
                  </span>
                </p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div className="card1 s8" onClick={() => handleShow(img7)}></div>

              <div className="text2">
                <p>Fun Games</p>
              </div>
              <div className="text3">
                <p>
                  Price: Rs.10000
                  <span className="ms-3">
                    <Button onClick={() => handleAddToCart("Fun Games", 10000)}>
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
          <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>Video Player</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <video width="100%" height="auto" controls>
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </div>
  );
};

export default College;
