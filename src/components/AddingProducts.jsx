import React from 'react'

const AddingProducts = (props) => {

    const handleLess = () => {
        if (props.count > 1) {
            props.setCount((n) => n-1)
        }
    }
  return (
      <>
          <button onClick={handleLess}>-</button>
            <p id = {props.id}>{props.count}</p>
          <button onClick={() => props.setCount((n) => n + 1)}>+</button>
      </>
  )
}

export default AddingProducts