import React, { useState } from 'react';

function Array() {
    
    const [count,setCount] = useState([])

    const add = () => {
        setCount([...count,{
            id : count.length,
            value : Math.floor(Math.random() * 20)
            
        }])
      
    }

    return ( 
        <div>
            <button onClick={add} >Click</button>
            <ul>
                {
                    count.map(i=> <li key={i.id}>{i.id} and {i.value}</li>)
                
                 }
            </ul>
        </div>
     );
}

export default Array;