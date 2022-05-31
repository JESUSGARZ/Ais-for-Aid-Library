import React,{useContext, useState,useEffect} from 'react'
import { LibraryContext } from '../context';
import DeleteButton from './DeleteButton';
import '../styles/shoppingCart.css'
import Button from './Button';

const ShoppingCart = () => {
   const [[books,setBooks],[cart,setCart],[open,setOpen]] = useContext(LibraryContext);
   let [count, setCount] = useState(0);
   

   const addItem = () => {
       let number = count;
       number++
       setCount(number)
   }
   const lessItem = () => {
       let number = count;
       number--
       setCount(number)
   }


    useEffect(() => {
        let shoppingCart = document.getElementById('shopping__cart');
        if (open === true) {
            shoppingCart.style.display = 'block'     
        } else if (open === false) {
            shoppingCart.style.display = 'none' 
        }
    
    }, [open])
    
    
   
   const showShopppingCart = () => {
    setOpen(false);
   }
   const clearShoppingCart = () => {
       setCart([])
   }
   if (cart.length !== 0) {
    return (
        <div className='shopping__background' id='shopping__cart' >
            <div className='shopping__container'> 
            <div className='shopping__header'>
              <h1>Tu Carrito</h1>
              <img src="https://i.postimg.cc/L8t1B60s/letra-x.png" alt="x" onClick={showShopppingCart} />
            </div>
              {
              cart?.map(item => {
                  let numr = 0;
                  const add = () => {
                      numr = numr +1
                  }
                  return (
                      <div className='shopping__item' key={item.id}>
                          <div className='shopping__item-data'>
                              <img className='shopping__item-img' src={item.sprites.other.dream_world.front_default} alt={item.name}/>
                              <div className='shopping__item-title'>
                                  <h2 >{item.name}</h2>
                                    {
                                        item.types.map( e => {
                                            return (<p key={e.type.name}>{e.type.name}</p>)
                                        })
                                    } 
                                  <p>{item.edithorial}</p>
                              </div>
                              
                          </div>
                          <div className='shopping__item-add'>
                              <h3>$ {item.stats[0].base_stat}</h3>
                              <div className='shopping__item-button'>
                                  <button onClick={() => add()}>-</button>
                                      <p>{numr}</p>
                                  <button onClick={addItem}>+</button>  
                              </div>
                          </div>
                          <DeleteButton title = {item.name}/>  
                      </div>
                  )
                  })
              }  
              <div className='shopping__button-end'>
                  <Button action ={showShopppingCart} text ={'Volver'}/>
                  <Button  action ={clearShoppingCart} text = {'Vaciar'}/>
              </div>
            </div>
        </div>
    )   
   } else {
       return (
        <div className='shopping__background' id='shopping__cart' >
            <div className='shopping__container'> 
            <div className='shopping__header'>
            <h1>Tu Carrito Esta Vacio</h1>
            <img src="https://i.postimg.cc/L8t1B60s/letra-x.png" alt="x" onClick={showShopppingCart} />
            </div>
            <div>
                <Button action ={showShopppingCart} text ={'Volver'}/>
            </div>
            </div>
        </div>
       )       
   }
}

export default ShoppingCart