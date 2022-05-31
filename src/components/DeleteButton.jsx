import React, {useContext} from 'react'
import { LibraryContext } from '../context';
import '../styles/deleteButton.css'

const DeleteButton = (props) => {
    const [[books,setBooks],[cart,setCart]] = useContext(LibraryContext);
    
   const handleDelete = () => {
       const newArray = cart.filter(e => e.title !== props.title)
       setCart(newArray)
   }

  return (
    <button className='delete__Button' onClick={handleDelete}>Eliminar</button>
  )
}

export default DeleteButton