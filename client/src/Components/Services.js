import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './Services.css'
import { useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container'
import Header from './Header'
const Services = () => {
  const navigate=useNavigate();

  return (
    <div className='header-container'>
      <Header/>
         <Container>
    
      <Row className='mt-3'>
        <Col className='col-12 text-center head'><p>Our Services</p></Col>
      </Row>
      <Row className='mt-3 align-items-center'>
        <Col className='col-1 '>
        
          <div className='card1 c1' onClick={() => navigate('/Wedding')}></div>
       
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
       
          <div className='card1 c2'  onClick={() => navigate('/Engagement')}></div>
         
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
       
          <div className='card1 c3'  onClick={() => navigate('/Birthday')}></div>
       
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
        
          <div className='card1 c4'  onClick={() => navigate('/Bachelor')}></div>
       
        </Col>
      </Row>

      {/* Second row with text */}
      <Row className='mt-3  mb-5 align-items-center '>
        <Col className='col-1 '>
        <div className='text1'> <p>Weddings</p></div>
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
        <div className='text1'> <p>Engagement</p></div>
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
        <div className='text1'> <p>BirthDayParty</p></div>
         
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
        <div className='text1'> <p>BachelorsParty</p></div>
         
        </Col>
      </Row>
      <Row className='mt-3 align-items-center'>
        <Col className='col-1 '>
     
          <div className='card1 c5' onClick={() => navigate('/College')} ></div>
      
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
     
          <div className='card1 c6 '  onClick={() => navigate('/College')}></div>
       
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
     
          <div className='card1 c7'></div>
     
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
  
          <div className='card1 c8'></div>
      
        </Col>
      </Row>
      <Row className='mt-3  mb-5 align-items-center '>
        <Col className='col-1 '>
        <div className='text1'> <p>CollegeCulturals</p></div>
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
        <div className='text1'> <p>Conference</p></div>
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
        <div className='text1'> <p>Tourism</p></div>
         
        </Col>
        <Col className='col-2'></Col>
        <Col className='col-1 '>
        <div className='text1'> <p>OpeningCeremony</p></div>
         
        </Col>
      </Row>
    </Container>
       
     
    </div>
  )
}

export default Services
