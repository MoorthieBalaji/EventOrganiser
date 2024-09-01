import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Profile = () => {
    const navigate=useNavigate();
    const userName=sessionStorage.getItem('userName');
    const userMobile=sessionStorage.getItem('userMobile');
    if(!userName || !userMobile){
        navigate('/Login');
        return null;
    }
    return (
        <div className='header-container'>
                <Header />
                <div className='body'>
                    <div className='card'>
                        <h2><FontAwesomeIcon icon={faUser} size="x" /></h2>
                        <p className='mt-3'><strong>Name:</strong> {userName}</p>
                        <p><strong>Mobile Number:</strong> {userMobile}</p>
                    </div>
                </div>
            </div>
      )
}

export default Profile
