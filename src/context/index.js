import React, {useState,createContext,useEffect} from 'react';

export const LibraryContext = createContext();


const LibraryProvider = props => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [open, setOpen] = useState(false);

    const fecthing =  () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=80`)
        .then(data => data.json())
        .then(resp => {
            for (let i = 0; i < resp.results.length; i++) {
                fetch(resp.results[i].url)
                .then(data => data.json())
                .then( result => {
                    setBooks(prevArray => [...prevArray, result])
                })
            }
        })  
    }
    useEffect(() => {
        fecthing()
        console.log(books)
    }, [])
    
    return (
        <LibraryContext.Provider value={[[books,setBooks],[cart,setCart],[open, setOpen]]}>
            {props.children}
        </LibraryContext.Provider>
    )
}

export default LibraryProvider;