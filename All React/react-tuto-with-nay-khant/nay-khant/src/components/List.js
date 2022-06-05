import React from 'react';
import List2 from './List2';

const List = () => {
    const names = [
        {
            id: 1,
            age: 30

        },
        {
            id: 2,
            age: 40
        },
        {
            id:3,
            age:21
        }
    ]
    return ( 
        <div>
            {
                names.map(i=><List2 id={i.id} age={i.age}/>)
            }
        </div>
     );
}
 
export default List;