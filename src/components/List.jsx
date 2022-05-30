import React, {useContext} from 'react';
import {LibraryContext}  from '../context' 
import AddButton from './AddButton';

const List = () => {
    const [[books,setBooks],[cart,setcart]]=  useContext(LibraryContext );
    const show = () => {
        console.log(books);
        console.log(cart);
    }
  return (
    <div>
        {
            books.data?.map( element => {
                return (
                    <div key={element.title}>
                        <img src={element.image} alt={element.title} onClick = {show} />
                        <h2>{element.title}</h2>
                        <h3>{element.author}</h3>
                        <p>{element.isbn}</p>
                        <p>{element.edithorial}</p>
                        <p>{element.price}</p>
                        <AddButton title = {element.title} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default List