import React, { useState } from 'react';
import  Header from '../Components/Header'
import { Row, Col, Modal ,Button,Container} from 'react-bootstrap';
// import vf1 from '../assets/ce1.mp4';
import vf2 from '../assets/ce2.mp4';
import vf3 from '../assets/ce3.mp4';
import vf5 from '../assets/ce5.mp4';
import img1 from '../assets/d1.jpg';
import img2 from '../assets/d9.jpg';
import img3 from '../assets/d8.jpg';
import img4 from '../assets/d6.jpg';
import img5 from '../assets/d7.jpg';
import img6 from '../assets/e1.jpg';
import img7 from '../assets/e2.jpg';
import img8 from '../assets/e3.jpg';
import img9 from '../assets/e4.jpg';
import img10 from '../assets/e5.jpg';
import '../Components/College.css';
const College = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const handleClose = () => setShow(false);
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
    setCurrentVideo('');
  };

  return (
    <>

   <div className='header'>
            <Header/>
    </div>
   <div className='content'>
    <Container fluid className='mb-5'> 
     <Row className='ms-3'><h3>Stage:</h3></Row>
     <Row className='ms-3'>
       <Col>
         <video width="250" height="180" controls onClick={() => handleVideoClick(vf1)}>
           <source src={vf2} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       </Col>
       <Col>
         <video width="250" height="180" controls onClick={() => handleVideoClick(vf2)}>
           <source src={vf2} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       </Col>
       <Col>
         <video width="250" height="180" controls onClick={() => handleVideoClick(vf3)}>
           <source src={vf3} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       </Col>
       <Col>
         <video width="250" height="180" controls onClick={() => handleVideoClick(vf5)}>
           <source src={vf5} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       </Col>
       <Col>
         <video width="250" height="180" controls onClick={() => handleVideoClick(vf5)}>
           <source src={vf5} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       </Col>
     </Row>
     <Row className='ms-3'>
          <Col className='col-2'><h5>Stage-1</h5><h5>Price: Rs.80000<span className='ms-3 '><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Stage-2</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Stage-3</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Stage-4</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Stage-5</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
      </Row>
      <Row className='mt-3 ms-3'><h3>Stalls:</h3></Row>
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
          <Col className='col-2'><h5>Clothes Stall</h5><h5>Price: Rs.80000<span className='ms-3 '><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Books Stall</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Fruits Stall</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Food Stall</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Juice Stall</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
      </Row>
      <Row className='mt-3 ms-3'><h3>Entertainment:</h3></Row>
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
                     onClick={() => handleShow(img10)}
                     style={{ backgroundImage: `url(${img10})` }}
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
                     onClick={() => handleShow(img7)}
                     style={{ backgroundImage: `url(${img7})` }}
                 ></div>
             </Col>
         </Row>
         <Row className='ms-3'>
          <Col className='col-2'><h5>Ghost House</h5><h5>Price: Rs.80000<span className='ms-3 '><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Magic Show</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>DJMusic & Dance</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>3D Shows</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
          <Col className='col-2 ms-5'><h5>Fun Games</h5><h5>Price: Rs.80000<span className='ms-3'><Button className='bt'>Add</Button></span></h5></Col>
      </Row>
      </Container>
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

     <Modal show={show} onHide={handleClose} size="lg" centered>
               <Modal.Body>
                   <img src={currentImage} alt="Full Size" style={{ width: '100%' }} />
               </Modal.Body>
           </Modal>
         
 </div>
 </>
 
    
   
  );
};

export default College;
