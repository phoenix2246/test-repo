import React,{useEffect, useState} from 'react';



function Hook() {

    const [count,setCount] = useState(0)

    const [name,setName] = useState('')

    useEffect(()=>{
        console.log('Updating...')
        document.title = `${count}`
    },[count])

    return ( 
      <div>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)} ></input>
          <button onClick={()=>setCount(count+1)} >Count : {count} </button>
      </div>
     );
}

export default Hook;