import React, {useContext, useState, useEffect} from 'react'
import { LibraryContext } from '../context';
import Button from './Button';

const AddButton = (props) => {
    const [[books, setBooks],[cart, setCart]]=  useContext(LibraryContext);
    const [open, setOpen] = useState(true)
 

    const addToShoppingCart = () => {
         books.map( book => {
           if(book.name === props.name) {
               if (!cart.includes(book)) {
                setCart(prev => [...prev,book])     
                setOpen(false)
               } else {
                 setOpen(true)
               }
            }     
         })  
    }
    
    
    if (open === true) {
      return (
        <div>
          <Button action={addToShoppingCart} text = 'Agergar al carrito' />
        </div>
      )
    } else {
      return (
        <div>
          <h3 style={{color:"white", backgroundColor:"green", borderRadius:"10px", padding:"10px", margin:"8px 0"}}>En el carrito</h3>
        </div>
        
      )
    }
  
}

export default AddButton