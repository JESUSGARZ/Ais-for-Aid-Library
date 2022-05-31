import React from 'react'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import '../styles/navbar.css';

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