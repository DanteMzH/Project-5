import React from 'react'

export const ListCategory =async ({elementList, SetElementList}) => {

const handleclick = ()=>{
  SetElementList([...elementList, "Este es mi lista modificada"])
}

  return (
    <>
      <button onClick={handleclick}>
        Click me please
      </button>

      <div>  

      {elementList.map(category =>(
        <li>{category}</li>
        ))}

      </div>
    </>
  )
}
