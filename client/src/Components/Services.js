import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

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
          <Row className="mt-4"></Row>
          <Row className="mt-5 g-4 justify-content-center">
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 c1"
                onClick={() => navigate("/Wedding")}
              ></div>
              <div className="text1">
                <p>Weddings</p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 c2"
                onClick={() => navigate("/Engagement")}
              ></div>
              <div className="text1">
                <p>Engagement</p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 c3"
                onClick={() => navigate("/Birthday")}
              ></div>
              <div className="text1">
                <p>Birthday Party</p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 c5"
                onClick={() => navigate("/College")}
              ></div>
              <div className="text1">
                <p>College Culturals</p>
              </div>
            </Col>
          </Row>

          {/* Second Row of Cards */}
          <Row className="mt-3 g-4 justify-content-center">
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 c4"
                onClick={() => navigate("/Bachelor")}
              ></div>
              <div className="text1">
                <p>Bachelor's Party</p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 c6"
                onClick={() => navigate("/Conference")}
              ></div>
              <div className="text1">
                <p>Conference</p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 c7"
                onClick={() => navigate("/Tourism")}
              ></div>
              <div className="text1">
                <p>Tourism</p>
              </div>
            </Col>
            <Col xs={10} sm={6} md={3} className="text-center">
              <div
                className="card1 c8"
                onClick={() => navigate("/OpeningCeremony")}
              ></div>
              <div className="text1">
                <p>Opening Ceremony</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
