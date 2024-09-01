import React from 'react';
import './Home.css';
import{useNavigate}  from  'react-router-dom';
import Header from './Header';

const Home = () => {
  const navigate=useNavigate();
  const handleBookNow = ()=>{
      navigate('/Login');
  }
  const moveLogin=()=>{
    navigate('/Admin');
  }
  return (
    <div className='header-container'>
      <Header/>
    <div className='body'>
       <div className='card'>
             
              <h3>Your Dream Events Await</h3>
               <p>Ready to start planning? Click the button below to book a consultation with one of our expert planners.</p>
               <button type='button' onClick={handleBookNow}>Book Now</button>
             
           
       </div>
       <div className='admin'><button type='button' onClick={moveLogin}>Admin</button></div>
       
    </div>
    </div>

  )
}

export default Home
