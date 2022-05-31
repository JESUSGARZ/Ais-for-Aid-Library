import React, {useState,createContext,useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import data from '../components/data2.json';
import axios from 'axios';

export const LibraryContext = createContext();
const url = 'https://crudcrud.com/api/94ff6dda74b941c8919799ba49de9888/unicorns';


const LibraryProvider = props => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [open, setOpen] = useState(false);
   
    useEffect(() => {
        setBooks(data)
    }, [])
    return (
        <LibraryContext.Provider value={[[books,setBooks],[cart,setCart],[open, setOpen]]}>
            {props.children}
        </LibraryContext.Provider>
    )
}

export default LibraryProvider;