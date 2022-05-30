import React, {useContext} from 'react'
import { LibraryContext } from '../context';

const AddButton = (props) => {
    const [[books, setBooks],[cart, setCart]]=  useContext(LibraryContext);
 

    const addToShoppingCart = () => {
   
         books.data?.map( book => {
           if(book.title === props.title) {
               if (!cart.includes(book)) {
                setCart(prev => [...prev,book])     
               }
            }    
         }) 
    }
  return (
    <div>
        <button onClick={ addToShoppingCart}>Agergar al carrito</button>
    </div>
  )
}

export default AddButton