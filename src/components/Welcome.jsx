import React from 'react';
import '../styles/welcome.css'
import LoginButton from './LoginButton';

const Welcome = () => {
  return (
    <div className='welcome__container'>
        <img src="https://i.postimg.cc/mDDckB3r/libro.png" alt="" srcset="" />
        <h1>Aid for Aid</h1>
        <h2>Library</h2>
        <LoginButton/>
    </div>
  )
}

export default Welcome