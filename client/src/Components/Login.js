import React ,{useState} from 'react'
import Header from './Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Store user info temporarily in sessionStorage or state
      sessionStorage.setItem('userName', name);
      sessionStorage.setItem('userMobile', mobileNumber);
     try{
        const response=await axios.post('http://localhost:5001/api/login',{
            name,
            mobileNumber,
        });
        if (response.status >= 200 && response.status < 300){
            navigate('/Service');
        }
        else{
            console.error('Failed to save user data');
        }
     }
     catch(error){
        console.error('Error during login submission:', error);
     }

      
    };
  return (
    <div className='header-container'>
    <Header/>
  <div className='body'>
     <div className='card'>
     <form onSubmit={handleSubmit}>
      <h3>LOGIN</h3>
      <label className='me-5'>
        Name: 
      </label>
      <input  className='ms-4'type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label className='mt-3 mb-3 me-1 '>
        Mobile Number:
        <input type="tel" className='ms-1' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
      </label>
      <button type="submit">Login</button>
    </form>
             
     </div>
     
  </div>
  </div>
  )
}

export default Login
