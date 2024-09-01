import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

export default function Header(){
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='nav'>
        <Container>
          <Navbar.Brand href="#home" className='logo'><span className='t1' style={{color:'#0AFFFF',fontSize:'50px',fontWeight:'inherit'}}>D</span>ream<span className='t2' style={{color:'#FF00FF',fontSize:'40px',fontWeight:'inherit',  fontfamily: "Princess Sofia,cursive"}}>C</span>atcher</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/" className='link lb' ><span style={{color:'#0AFFFF'}}>H</span>ome</Nav.Link>
            <Nav.Link href="/Service" className='link lv'><span style={{color:'#FF00FF'}}>S</span>ervices</Nav.Link>
            <Nav.Link href="/About" className='link lb'><span style={{color:'#0AFFFF'}}>A</span>bout</Nav.Link>
            <Nav.Link href="/Contact" className='link lv'><span style={{color:'#FF00FF'}}>C</span>ontact</Nav.Link>
            <Nav.Link href="/Profile" className='link lv'><span style={{color:'#0AFFFF'}}>P</span>rofile </Nav.Link>
            <Nav.Link href="/Cart" className='link lv'><span style={{color:'#FF00FF'}}>C</span>art</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};




