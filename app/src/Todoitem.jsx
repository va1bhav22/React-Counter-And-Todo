import React from 'react'

const Todoitem = ({item,handleId}) => {
    const {title, id, status}=item;
  return (
    <>
     <h1>{title}</h1>
     <button onClick={()=>handleId(id)}>Remove</button>
    </>


  )
}

export default Todoitem