import { useState } from "react"
 const url = 'https://crudcrud.com/api/94ff6dda74b941c8919799ba49de9888/unicorns'

const useFetch = async (url) => {
    const [fetchData,setFetchData] = useState([])
    try {
        const response = await fetch(url)
        const data = await response.json()
        setFetchData(data)
        return fetchData;
    } catch (error) {
        console.log(error) 
        return <h1>{error.message}</h1>
    }
    
}
export default useFetch;