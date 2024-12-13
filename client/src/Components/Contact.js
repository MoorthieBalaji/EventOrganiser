import React, { useState } from "react";
import { toast } from "react-toastify";
import Header from "../Components/Header";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import axios from "axios";
import "../Components/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = async (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!name) {
      toast.error("Enter name", { position: "top-center" });
    } else if (!email) {
      toast.error("Enter email", { position: "top-center" });
    } else if (!phone) {
      toast.error("Enter phone no", { position: "top-center" });
    } else if (!address) {
      toast.error("Enter address", { position: "top-center" });
    } else if (!desc) {
      toast.error("Add Description", { position: "top-center" });
    } else {
      try {
        await axios.post("http://localhost:5001/api/contacts", {
          name,
          phone,
          email,
          address,
          desc,
        });
        toast.success("Submitted successfully", { position: "top-center" });
        setName("");
        setPhone("");
        setEmail("");
        setAddress("");
        setDesc("");
      } catch (error) {
        toast.error("Submission failed", { position: "top-center" });
      }
    }
  };

  return (
    <div>
      <div className="header-container">
        <Header />
      </div>

      <div className="contact-form-container">
        <Container className="mt-5 pt-5">
          <Row className="mb-4">
            <Col xs={12} className="text-center">
              <h2>
                <span style={{ color: "#0AFFFF" }}>Contact</span>
                <span style={{ color: "#FF00FF" }}> Us</span>
              </h2>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Form onSubmit={handleClick}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="myInput"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="myInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Phone No"
                    className="myInput"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Address"
                    className="myInput"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Description"
                    className="myInput"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" className="btn-custom">
                    SUBMIT
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
