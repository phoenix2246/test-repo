import React,{useState} from 'react';



function Hook() {

    const [count,setCount] = useState(0)
   
    return ( 
      <div>
          <button onClick={()=>setCount(count+1)} >Count : {count} </button>
      </div>
     );
}

export default Hook;