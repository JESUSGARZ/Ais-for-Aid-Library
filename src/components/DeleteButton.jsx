import React, {useContext} from 'react'
import { LibraryContext } from '../context';
import '../styles/deleteButton.css'

const DeleteButton = (props) => {
  const [[books,setBooks],[cart,setCart],[open, setOpen]] = useContext(LibraryContext);
    
  const handleDelete = () => {
    const newArray = cart.filter(e => e.name !== props.name);
    setCart(newArray);
    setOpen(true)
  }

  return (
    <button className='delete__Button' onClick={handleDelete}>Eliminar</button>
  )
}
export default DeleteButton