import React, {useContext} from 'react';
import {useAuth0} from '@auth0/auth0-react'
import Button from './Button';
import '../styles/logoutButton.css';
import { LibraryContext } from '../context';

const LogoutButton = () => {
    const {logout} = useAuth0();
    const [[books,setBooks],[cart,setCart],[open, setOpen]] = useContext(LibraryContext);

    const showShopppingCart = () => {
      setOpen(!open)
    }
  return (
    <div className='logout__container'>
      <img src="https://i.postimg.cc/zBr5v1sg/carro-de-la-carretilla.png" alt="carrito" onClick={showShopppingCart} />
      <Button action = {logout}  text = 'Logout'/> 
    </div>
   
  )
}

export default LogoutButton