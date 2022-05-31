import React, {useContext} from 'react';
import {LibraryContext}  from '../context' 
import AddButton from './AddButton';
import '../styles/list.css'



const List = () => {
    const [[books,setBooks]]=  useContext(LibraryContext );
   
  return (
    <div className='list__container'>
        {
            books?.map( element => {
                return (
                    <div className='card' key={element.name}>
                        <img className='card__img'src={element.sprites.other.dream_world.front_default} alt={element.title} />
                        <h2 className='card__title'>{element.name}</h2>
                        
                        <h3>Typo:
                            {
                                element.types.map( e => {
                                    return (<p key={e.type.name}>{e.type.name}</p>)
                                })
                            } 
                        </h3> 
                        <p>ISBN: {element.id}</p>
                        <p>Precio: {element.stats[0].base_stat}</p>
                        <AddButton name = {element.name} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default List