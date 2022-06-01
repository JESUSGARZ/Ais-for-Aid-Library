import React,{useContext, useState,useEffect} from 'react'
import { LibraryContext } from '../context';
import DeleteButton from './DeleteButton';
import '../styles/shoppingCart.css'
import Button from './Button';
import AddingProducts from './AddingProducts';

const ShoppingCart = () => {
   const [[books,setBooks],[cart,setCart],[open,setOpen]] = useContext(LibraryContext);
   const [count, setCount] = useState(1);
   
   

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
                  const total = document.getElementById(item.id) 
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
                              <div>
                                <h3>$ {item.stats[0].base_stat}/und</h3>
                                <h3>total: $ {(parseInt(item.stats[0].base_stat)) * count}</h3>
                              </div>
                             
                              <div className='shopping__item-button'>
                                <AddingProducts id = {item.id} count ={count} setCount = {setCount}/>
                              </div>
                          </div>
                          <DeleteButton name = {item.name}/>  
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