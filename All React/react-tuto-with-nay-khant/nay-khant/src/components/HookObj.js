import React,{useState} from 'react';

function HookObj() {
    const [name,setName] = useState({firstName:'',lastName:''})
    return ( 
        <div>
            <form>
                <div>
                    <label>FirstName</label>
                    <input type='text' value={name.firstName} name="firstName" onChange={(e)=>setName({...name,firstName:e.target.value})} ></input>
                </div>
                <div>
                    <label>LastName</label>
                    <input type='text' value={name.lastName} name='lastName' onChange={(e)=>setName({...name,lastName:e.target.value})} ></input>
                </div>
                <h3>FirstName : {name.firstName}</h3>
                <h3>LastName : {name.lastName}</h3>
            </form>
        </div>
     );
}

export default HookObj;