import React,{useContext, useState,useEffect} from 'react'
import { LibraryContext } from '../context';

const ShoppingCart = () => {
   const [[books,setBooks],[cart,setCart]] = useContext(LibraryContext);
   const [count, setCount] = useState(0);
  


   const addItem = () => {
       let number = count;
       number++
       setCount(number)
       console.log(cart);
   }
   const lessItem = () => {
       let number = count;
       number--
       setCount(number)
   }

  return (
      <> 
        {
           cart.map(item => {
               return (
                <div key={item.title}>
                    <p>___________________________________________________</p>
                    <div>
                        <img src={item.image} alt={item.title}/>
                        <h2>{item.name}</h2>
                    </div>
                    <button>Eliminar</button>
                    <div>
                        <button onClick={lessItem}>-</button>
                        <p>{count}</p>
                        <button onClick={addItem}>+</button>
                    </div>
                </div>
               )
            })
        }
       
      </>
  )
}

export default ShoppingCart