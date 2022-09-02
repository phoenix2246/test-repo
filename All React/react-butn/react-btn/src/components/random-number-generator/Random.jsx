import React, { useEffect } from 'react'
import { useState } from 'react'

function Random() {
   
    const [state,setState] = useState([])
    const addRandom = ()=>{
            setState([...state,{
                id: state.length,
                value: Math.floor(Math.random()*20)}
            ])
    }
  return (
    <div>
      <button onClick={addRandom}>Add Random Number</button>
      <ul>
            {
                state.map(i=><li key={i.id}>{i.value}</li>)
            }
      </ul>
    </div>
  )
}

export default Random
