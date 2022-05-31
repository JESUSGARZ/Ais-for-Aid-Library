import React, {useContext} from 'react';
import {LibraryContext}  from '../context' 
import AddButton from './AddButton';
import '../styles/list.css'


const List = () => {
    const [[books,setBooks]]=  useContext(LibraryContext );
   
  return (
    <div className='list__container'>
        {
            books.data?.map( element => {
                return (
                    <div className='card' key={element.title}>
                        <img className='card__img'src={element.image} alt={element.title} />
                        <h2 className='card__title'>{element.title}</h2>
                        <h3>Autor: {element.author}</h3>
                        <p>ISBN: {element.isbn}</p>
                        <p>Editorial: {element.edithorial}</p>
                        <p>Precio: {element.price}</p>
                        <AddButton title = {element.title} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default List