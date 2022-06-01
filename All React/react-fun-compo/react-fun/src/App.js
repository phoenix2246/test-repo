import React,{createRef,useState} from 'react';
import './App.css';

const Item = ({name,price}) =>(
 <li>
   {name}, ${price}
 </li>
)


const App= props => {
  let [items,setItems] = React.useState([
    {id: 1 , name: 'Apple' , price: '0.89'},
    {id: 2 , name: 'Orange' , price: '0.99'}
  ])

  let nameRef = createRef()
  let priceRef = createRef()

  const add = () => {
    let id = items.length + 1
    let name = nameRef.current.value
    let price = priceRef.current.value

    setItems([
      ...items,
      {id,name,price}
    ])

  }

  return (
    <div>
      <ul>
        {items.map(i=> <Item key={i.id} name={i.name} price={i.price} />)}
      </ul>
      <input type='text' ref={nameRef}></input><br/>
      <input type='text' ref={priceRef} ></input><br/>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
