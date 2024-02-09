import React, { useState } from 'react'

export const SearchCategory = ({elementList, SetElementList}) => {

const [inputcategory, setInputCategory] = useState([""]);

const handleInput = (evento) =>{
    setInputCategory(evento.target.value);
}


const handleSubmit = (e) =>{
    e.preventDefault();
    SetElementList([...elementList, inputcategory]);
    setInputCategory("")
}


  return (
    <>
    <form onSubmit={handleSubmit}>
    <input 
    onChange={evento => handleInput(evento)}
    type='text'
    placeholder='Write here'
    value={inputcategory}
    />

    </form>
    </>
  )
}
