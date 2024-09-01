import { toast } from 'react-toastify';
import React, { useState } from 'react';
import Header from '../Components/Header';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../Components/Contact.css';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');
  const [address, setAddress] = useState(''); // New state for address

  const handleClick = async () => {
    if (name === '') {
      toast.error('Enter name', { position: 'top-center' });
    } else if (email === '') {
      toast.error('Enter email', { position: 'top-center' });
    } else if (phone === '') {
      toast.error('Enter phone no', { position: 'top-center' });
    } else if (address === '') {
      toast.error('Enter address', { position: 'top-center' });
    } else if (desc === '') {
      toast.error('Add Description', { position: 'top-center' });
    } else {
      try {
        await axios.post('http://localhost:5001/api/contacts', { name, phone, email, address, desc }); // Include address
        toast.success('Submitted', { position: 'top-center' });
        setName('');
        setPhone('');
        setEmail('');
        setAddress(''); // Clear address field
        setDesc('');
      } catch (error) {
        toast.error('Submission failed', { position: 'top-center' });
      }
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: 'black', height: '100vh' }}>
        <div className='header-container'>
          <Header />
        </div>

        <Container fluid className='mb-5'>
          <Row className='mb-4 mt-3'>
            <Col className='col-1'></Col>
            <Col className='col-8 border-bottom'>
              <h2 className='text-start'>
                <span style={{ color: '#0AFFFF' }}>Contact</span>
                <span style={{ color: '#FF00FF' }}>Us</span>
              </h2>
            </Col>
            <Col className='col-2 border-bottom'></Col>
          </Row>
          <Row className='mt-5 mb-3'>
            <Col style={{ marginLeft: '680px', color: 'white' }}>
              <h4>Let's Talk</h4>
            </Col>
          </Row>

          <div style={{ marginLeft: '450px' }}>
            <form>
            <Row className='mb-2'>
              <Col className='col-5'>
                <input
                  type='text'
                  className='myInput'
                  placeholder='Name'
                  style={{ width: '600px', height: '50px', border: 'solid', borderColor: '#0AFFFF', borderRadius: '8px', backgroundColor: 'transparent', color: 'white' }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col className='col-5 text-start'>
                <input
                  type='text'
                  className='myInput'
                  placeholder='Email'
                  style={{ width: '600px', height: '50px', border: 'solid', borderColor: '#0AFFFF', borderRadius: '8px', backgroundColor: 'transparent', color: 'white' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col className='col-5 text-start'>
                <input
                  type='text'
                  className='myInput'
                  placeholder='Phone No'
                  style={{ width: '600px', height: '50px', border: 'solid', borderColor: '#0AFFFF', borderRadius: '8px', backgroundColor: 'transparent', color: 'white' }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col className='col-5 text-start'>
                <textarea
                  type='text'
                  className='myInput'
                  placeholder='Address'
                  style={{ width: '600px', height: '120px', border: 'solid', borderColor: '#0AFFFF', borderRadius: '8px', backgroundColor: 'transparent', color: 'white' }}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} // Update address state
                />
              </Col>
            </Row>
            <Row className='mb-2'>
              <Col className='col-5 text-start'>
                <textarea
                  type='text'
                  className='mInput'
                  placeholder='Description'
                  style={{ width: '600px', height: '180px', border: 'solid', borderColor: 'violet', borderRadius: '8px', backgroundColor: 'transparent', color: 'white', position: 'relative' }}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Col>
            </Row>

            <Button className='bttn'type='submit' onClick={handleClick}>SUBMIT</Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
