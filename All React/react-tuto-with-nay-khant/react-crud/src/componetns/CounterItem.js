import React from 'react';
import style from './CounterItem.module.css'



const CounterItem = ({id,title,handleDelete,handleUpdate})=> {
    return ( 
        <div >
            <div className={style.title}>
                <input className={style.input} type='text' value={title} onChange={(e)=>handleUpdate(e.target.value,id)} />
            </div>
            <button className={style.delete} onClick={()=>handleDelete(id)} >Delete</button>
        </div>
     );
}

export default CounterItem;