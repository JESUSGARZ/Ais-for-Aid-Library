import React from 'react';
import {useAuth0, } from '@auth0/auth0-react';
import Button from './Button';


const LoginButton = () => {
    const {loginWithRedirect} = useAuth0()
  return (
    <div >
      <Button action = {() => loginWithRedirect()}  text = 'Login'/>
    </div>
  )
}

export default LoginButton