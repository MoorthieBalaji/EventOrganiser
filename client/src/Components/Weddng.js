import React from 'react'
import { Modal, Row, Col, Button } from 'react-bootstrap'
import '../Components/Wedding.css';
import Header from './Header'
import axios from 'axios';
import { useState } from 'react';
import img1 from '../assets/s11.jpeg';
import img2 from '../assets/s7.jpg';
import img3 from '../assets/s8.jpg';
import img4 from '../assets/s4.jpg';
import img5 from '../assets/s6.jpg';
import img6 from '../assets/f2.jpg';
import img7 from '../assets/d5.jpg';
import img8 from '../assets/b1.jpg';
import img9 from '../assets/b2.jpg';

const Weddng = () => {
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const handleClose = () => setShow(false);
    const userName = sessionStorage.getItem('userName');

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
            const response = await axios.post('http://localhost:5001/api/add-to-cart', newItem);
            if (response.status === 201) {
                console.log('Item added to cart successfully');
            } else {
                console.error('Failed to add item to cart');
            }
        } catch (e) {
            console.error('Error adding item to cart:', e);
        }
    };

    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='content'>
                <Row className='mt-5 ms-3'><h3>Stage Decoration:</h3></Row>
                <Row className='mt-3 ms-3'>
                    <Col className='col-2'>
                        <div
                            className='s1'
                            onClick={() => handleShow(img1)}
                            style={{ backgroundImage: `url(${img1})` }}
                        ></div>
                    </Col>
                    <Col className='col-2 ms-5'>
                        <div
                            className='s2'
                            onClick={() => handleShow(img2)}
                            style={{ backgroundImage: `url(${img2})` }}
                        ></div>
                    </Col>
                    <Col className='col-2 ms-5'>
                        <div
                            className='s3'
                            onClick={() => handleShow(img3)}
                            style={{ backgroundImage: `url(${img3})` }}
                        ></div>
                    </Col>
                    <Col className='col-2 ms-5'>
                        <div
                            className='s4'
                            onClick={() => handleShow(img4)}
                            style={{ backgroundImage: `url(${img4})` }}
                        ></div>
                    </Col>
                    <Col className='col-2 ms-5'>
                        <div
                            className='s5'
                            onClick={() => handleShow(img5)}
                            style={{ backgroundImage: `url(${img5})` }}
                        ></div>
                    </Col>
                </Row>

                <Modal show={show} onHide={handleClose} size="lg" centered>
                    <Modal.Body>
                        <img src={currentImage} alt="Full Size" style={{ width: '100%' }} />
                    </Modal.Body>
                </Modal>

                <Row className='ms-3'>
                    <Col className='col-2'>
                        <h5>Decoration-1</h5>
                        <h5>Price: Rs.80000
                            <span className='ms-3 '>
                                <Button onClick={() => handleAddToCart('Decoration-1', 80000)}>Add</Button>
                            </span>
                        </h5>
                    </Col>
                    <Col className='col-2 ms-5'>
                        <h5>Decoration-2</h5>
                        <h5>Price: Rs.80000
                            <span className='ms-3'>
                                <Button onClick={() => handleAddToCart('Decoration-2', 80000)}>Add</Button>
                            </span>
                        </h5>
                    </Col>
                    <Col className='col-2 ms-5'>
                        <h5>Decoration-3</h5>
                        <h5>Price: Rs.80000
                            <span className='ms-3'>
                                <Button onClick={() => handleAddToCart('Decoration-3', 80000)}>Add</Button>
                            </span>
                        </h5>
                    </Col>
                    <Col className='col-2 ms-5'>
                        <h5>Decoration-4</h5>
                        <h5>Price: Rs.80000
                            <span className='ms-3'>
                                <Button onClick={() => handleAddToCart('Decoration-4', 80000)}>Add</Button>
                            </span>
                        </h5>
                    </Col>
                    <Col className='col-2 ms-5'>
                        <h5>Decoration-5</h5>
                        <h5>Price: Rs.80000
                            <span className='ms-3'>
                                <Button onClick={() => handleAddToCart('Decoration-5', 80000)}>Add</Button>
                            </span>
                        </h5>
                    </Col>
                </Row>

                <Row className='mt-3 ms-3'>
                    <h3>Food Menu:</h3>
                </Row>
                <Row className='mt-3 ms-3'>
                    <Col className='col-2'>
                        <div
                            className='s1'
                            onClick={() => handleShow(img6)}
                            style={{ backgroundImage: `url(${img6})` }}
                        ></div>
                        <h5>As per the no of count the price may differ</h5>
                    </Col>
                </Row>
                <Row className='mt-3 ms-3'>
                    <Col className='col-2'>
                        <h3>DJ:</h3>
                    </Col>
                </Row>
                <Row className='ms-3'>
                    <Col className='col-2 mt-3'>
                        <div
                            className='s1'
                            onClick={() => handleShow(img7)}
                            style={{ backgroundImage: `url(${img7})` }}
                        ></div>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-2 ms-5'>
                        <h5>DJ Event</h5>
                        <h5>Price: Rs.50000
                            <span className='ms-3'>
                                <Button onClick={() => handleAddToCart('DJ Event', 50000)}>Add</Button>
                            </span>
                        </h5>
                    </Col>
                </Row>
                <Row className='mt-3 me-3'>
                    <Col className='col-2 ms-3'>
                        <h3>Musical band :</h3>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col className='col-2 ms-5 mt-3'>
                        <div
                            className='s1'
                            onClick={() => handleShow(img8)}
                            style={{ backgroundImage: `url(${img8})` }}
                        ></div>
                    </Col>
                    <Col className='col-2 ms-3 mt-3'>
                        <div
                            className='s2'
                            onClick={() => handleShow(img9)}
                            style={{ backgroundImage: `url(${img9})` }}
                        ></div>
                    </Col>
                </Row>
                <Row className='ms-3'>
                    <Col className='col-2 ms-3'>
                        <h5>Band</h5>
                        <h5>Price: Rs.25000
                            <span className='ms-3 '>
                                <Button onClick={() => handleAddToCart('Band', 25000)}>Add</Button>
                            </span>
                        </h5>
                    </Col>
                    <Col className='col-2 ms-3'>
                        <h5>Chenda Mela</h5>
                        <h5>Price: Rs.40000
                            <span className='ms-3'>
                                <Button onClick={() => handleAddToCart('Chenda Mela', 40000)}>Add</Button>
                            </span>
                        </h5>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Weddng
