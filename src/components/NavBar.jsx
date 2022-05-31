import React from 'react'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import '../styles/navbar.css';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  return (
    <>
      <nav className='navbar__container'>
        <Profile/>
        <LogoutButton/>
      </nav>
    </>  
 )
   
    
}
export default NavBar