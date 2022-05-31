import React, {useContext, useState} from 'react'
import { LibraryContext } from '../context';
import Button from './Button';

const AddButton = (props) => {
    const [[books, setBooks],[cart, setCart],[button, setButton]]=  useContext(LibraryContext);
    const [open, setOpen] = useState(true)
 

    const addToShoppingCart = () => {
   
         books.data?.map( book => {
           if(book.title === props.title) {
               if (!cart.includes(book)) {
                setCart(prev => [...prev,book])     
               }
            }    
         }) 
         setOpen(false)
    }
    if (open === true) {
      return (
        <div>
          <Button action={addToShoppingCart} text = 'Agergar al carrito' />
        </div>
      )
    } else {
      return (
        <h3 style={{color:"white", backgroundColor:"green", borderRadius:"10px", padding:"10px", margin:"8px 0"}}>En el carrito</h3>
      )
    }
  
}

export default AddButton