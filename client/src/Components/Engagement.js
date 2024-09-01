import React from 'react'
import {Modal, Row ,Col, Button} from 'react-bootstrap'
import  { useState } from 'react';
import '../Components/Engagement.css';
import img1 from '../assets/r1.jpg';
import img2 from '../assets/r2.jpg';
import img3 from '../assets/r3.jpg';
import img4 from '../assets/r5.jpg';
import img5 from '../assets/r6.jpg';
import img6  from '../assets/f2.jpg';
import Header from './Header';
import axios from 'axios';
const Engagement = () => {
    const userName=sessionStorage.getItem('userName');
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const handleClose = () => setShow(false);
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
    <div className='header-container'>
        <Header/>
    </div>
     <div className='content'>
        <Row className='mt-3 ms-3'><h3>Stage Decoration:</h3></Row>
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
           <Col className='col-2'><h5>Decoration-1</h5><h5>Price: Rs.80000<span className='ms-3 '><Button onClick={() => handleAddToCart('EngagementStage-1', 80000)}>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-2</h5><h5>Price: Rs.80000<span className='ms-3'><Button onClick={() => handleAddToCart('EngagementStage-2', 80000)}>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-3</h5><h5>Price: Rs.80000<span className='ms-3'><Button  onClick={() => handleAddToCart('EngagementStage-3', 80000)}>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-4</h5><h5>Price: Rs.80000<span className='ms-3'><Button  onClick={() => handleAddToCart('EngagementStage-4', 80000)}>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-5</h5><h5>Price: Rs.80000<span className='ms-3'><Button  onClick={() => handleAddToCart('EngagementStage-5', 80000)}>Add</Button></span></h5></Col>
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
    </div>
    </>
   
  )
}

export default Engagement
