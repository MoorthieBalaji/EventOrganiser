import React from 'react'
import {Modal, Row ,Col, Button} from 'react-bootstrap'
import  { useState } from 'react';
import Header from './Header';
import '../Components/Birthday.css'
import img1 from '../assets/bp1.jpg';
import img2 from '../assets/bp2.jpg';
import img3 from '../assets/bp3.jpg';
import img4 from '../assets/bp4.jpg';
import img5 from '../assets/bp5.jpg';
import img6  from '../assets/bp6.jpg';
import img7 from '../assets/bp7.jpg';
import img8 from '../assets/bp8.jpg';
import img9 from '../assets/bp9.jpg';
import img10 from '../assets/bp10.jpg';
import img11 from '../assets/c1.jpg';
import img12 from '../assets/c2.jpg';
import img13 from '../assets/c3.jpg';
import img14 from '../assets/c4.jpg';
import img15 from '../assets/c5.jpg';
import img16  from '../assets/c6.jpg';
import img17 from '../assets/c7.jpg';
import img18 from '../assets/c8.jpg';
import img19 from '../assets/c9.jpg';
import img20 from '../assets/c10.jpg';
import img21 from '../assets/d5.jpg';

const Birthday = () => {
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setCurrentImage(image);
        setShow(true);
    };
   
  return (
    <>
    <div className='head'>
    <Header/>
    </div>
      <div className='content'>
        <Row className='mt-3 ms-3'><h3>Background Decoration:</h3></Row>
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

        
       <Row className='ms-3'>
           <Col className='col-2'><h5>Decoration-1</h5><h5>Price: Rs.80000<span className='ms-3 '><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-2</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-3</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-4</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-5</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
       </Row>
       <Row className='mt-3 ms-3'>
              
                <Col className='col-2'>
                    <div 
                        className='s1' 
                        onClick={() => handleShow(img6)}
                        style={{ backgroundImage: `url(${img6})` }}
                    ></div>
                </Col>
            
                  <Col className='col-2 ms-5'>
                    <div 
                        className='s2' 
                        onClick={() => handleShow(img7)}
                        style={{ backgroundImage: `url(${img7})` }}
                    ></div>
                </Col>
                <Col className='col-2 ms-5'>
                    <div 
                        className='s3' 
                        onClick={() => handleShow(img8)}
                        style={{ backgroundImage: `url(${img8})` }}
                    ></div>
                </Col>
                <Col className='col-2 ms-5'>
                    <div 
                        className='s4' 
                        onClick={() => handleShow(img9)}
                        style={{ backgroundImage: `url(${img9})` }}
                    ></div>
                </Col>
                <Col className='col-2 ms-5'>
                    <div 
                        className='s5' 
                        onClick={() => handleShow(img10)}
                        style={{ backgroundImage: `url(${img10})` }}
                    ></div>
                </Col>
            </Row>
            <Row className='ms-3'>
           <Col className='col-2'><h5>Decoration-1</h5><h5>Price: Rs.80000<span className='ms-3 '><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-2</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-3</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-4</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Decoration-5</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
       </Row>

       <Row className='mt-3 ms-3'>
           <h3>Cake Type:</h3>
       </Row>
       <Row className='mt-3 ms-3'>
              
                <Col className='col-2'>
                    <div 
                        className='s1' 
                        onClick={() => handleShow(img11)}
                        style={{ backgroundImage: `url(${img11})` }}
                    ></div>
                </Col>
            
                  <Col className='col-2 ms-5'>
                    <div 
                        className='s2' 
                        onClick={() => handleShow(img12)}
                        style={{ backgroundImage: `url(${img12})` }}
                    ></div>
                </Col>
                <Col className='col-2 ms-5'>
                    <div 
                        className='s3' 
                        onClick={() => handleShow(img13)}
                        style={{ backgroundImage: `url(${img13})` }}
                    ></div>
                </Col>
                <Col className='col-2 ms-5'>
                    <div 
                        className='s4' 
                        onClick={() => handleShow(img14)}
                        style={{ backgroundImage: `url(${img14})` }}
                    ></div>
                </Col>
                <Col className='col-2 ms-5'>
                    <div 
                        className='s5' 
                        onClick={() => handleShow(img15)}
                        style={{ backgroundImage: `url(${img15})` }}
                    ></div>
                </Col>
            </Row>
            <Row className='ms-3'>
           <Col className='col-2'><h5>Cake-1</h5><h5>Price: Rs.80000<span className='ms-3 '><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Cake-2</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Cake-3</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Cake-4</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
           <Col className='col-2 ms-5'><h5>Cake-5</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
       </Row>
       <Row className='mt-3 ms-3'>
              
              <Col className='col-2'>
                  <div 
                      className='s1' 
                      onClick={() => handleShow(img16)}
                      style={{ backgroundImage: `url(${img16})` }}
                  ></div>
              </Col>
          
                <Col className='col-2 ms-5'>
                  <div 
                      className='s2' 
                      onClick={() => handleShow(img17)}
                      style={{ backgroundImage: `url(${img17})` }}
                  ></div>
              </Col>
              <Col className='col-2 ms-5'>
                  <div 
                      className='s3' 
                      onClick={() => handleShow(img18)}
                      style={{ backgroundImage: `url(${img18})` }}
                  ></div>
              </Col>
              <Col className='col-2 ms-5'>
                  <div 
                      className='s4' 
                      onClick={() => handleShow(img19)}
                      style={{ backgroundImage: `url(${img19})` }}
                  ></div>
              </Col>
              <Col className='col-2 ms-5'>
                  <div 
                      className='s5' 
                      onClick={() => handleShow(img20)}
                      style={{ backgroundImage: `url(${img20})` }}
                  ></div>
              </Col>
          </Row>
          <Row className='ms-3'>
         <Col className='col-2'><h5>Cake-6</h5><h5>Price: Rs.80000<span className='ms-3 '><Button>Add</Button></span></h5></Col>
         <Col className='col-2 ms-5'><h5>Cake-7</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
         <Col className='col-2 ms-5'><h5>Cake-8</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
         <Col className='col-2 ms-5'><h5>Cake-9</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
         <Col className='col-2 ms-5'><h5>Cake-10</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
     </Row>
       <Row className='mt-3 ms-3'>
           <h3>Food and Beverages:</h3>
       </Row>
       <Row className='mt-3 ms-3'>
              
              <Col className='col-2'>
                  <div 
                      className='s1' 
                      onClick={() => handleShow(img16)}
                      style={{ backgroundImage: `url(${img16})` }}
                  ></div>
              </Col>
          
                <Col className='col-2 ms-5'>
                  <div 
                      className='s2' 
                      onClick={() => handleShow(img17)}
                      style={{ backgroundImage: `url(${img17})` }}
                  ></div>
              </Col>
              <Col className='col-2 ms-5'>
                  <div 
                      className='s3' 
                      onClick={() => handleShow(img18)}
                      style={{ backgroundImage: `url(${img18})` }}
                  ></div>
              </Col>
              <Col className='col-2 ms-5'>
                  <div 
                      className='s4' 
                      onClick={() => handleShow(img19)}
                      style={{ backgroundImage: `url(${img19})` }}
                  ></div>
              </Col>
              <Col className='col-2 ms-5'>
                  <div 
                      className='s5' 
                      onClick={() => handleShow(img20)}
                      style={{ backgroundImage: `url(${img20})` }}
                  ></div>
                 
              </Col>
          </Row>
          <Row className='ms-3'>
         <Col className='col-2'><h5>Menu-1</h5><h5>Price: Rs.80000<span className='ms-3 '><Button>Add</Button></span></h5></Col>
         <Col className='col-2 ms-5'><h5>Menu-2</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
         <Col className='col-2 ms-5'><h5>Menu-3</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
         <Col className='col-2 ms-5'><h5>Menu-4</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
         <Col className='col-2 ms-5'><h5>Menu-5</h5><h5>Price: Rs.80000<span className='ms-3'><Button>Add</Button></span></h5></Col>
     </Row>
     <Row className='mt-3 ms-3'>
        <Col className='col-2'><h3>DJ:</h3> </Col>
      
       </Row>
       <Row className='ms-3'>
        <Col className='col-2 mt-3'>   <div 
                        className='s1' 
                        onClick={() => handleShow(img21)}
                        style={{ backgroundImage: `url(${img21})` }}
                    ></div></Col>
              
       </Row>
       <Row>
       <Col className='col-2 ms-5'><h5>DJ Event</h5><h5>Price: Rs.50000<span className='ms-3'><Button>Add</Button></span></h5></Col>
       </Row>

       <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Body>
                    <img src={currentImage} alt="Full Size" style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
    </div>
    </>
  
  )
}

export default Birthday
