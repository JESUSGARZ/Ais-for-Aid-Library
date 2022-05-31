import React from 'react';
import '../styles/loading.css'

const Loading = () => {
  return (
    <div className='loading__container'>
        <img className='loading__img' src="https://i.postimg.cc/mDDckB3r/libro.png" alt="Logo"  />
        <h2>Loading ....</h2>
    </div>
  )
}

export default Loading