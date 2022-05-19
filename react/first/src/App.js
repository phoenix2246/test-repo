import React from 'react';
import ToolsBar from './ToolsBar';




// class Title extends React.Component{
//   render(){
//     return(
//       <div>
//       <h1>{this.props.name}</h1>
//       </div>
//     )
//   }
// }
const Title = props =>(
  <div>
    <h1>{props.name}</h1>
  </div>
)

// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//       <Title name={this.props.name}/>
//       </div>
//     )
//   }
// }
const Header = ({name}) =>(

  <div>
    <Title name={name}/>
  </div>)



class AddForm extends React.Component{
  nameRef = React.createRef()
    priceRef = React.createRef()
    add = () => {
      let name = this.nameRef.current.value;
      let price = this.priceRef.current.value;
      this.props.add(name, price);
      }
  render(){
    return(
      <div>
            <input type="text" ref={this.nameRef}/><br/>
            <input type="text" ref={this.priceRef} /><br/>
            <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

// class Item extends React.Component{
//   render(){
//     return(
//       <li>
//         {this.props.name}, ${this.props.price}
//       </li>
//     )
//   }
// }
const Item = ({name,price}) =>(
  <li>
    {name}, ${price}
  </li>
)

class App extends React.Component {
  state = {
    items: [
    { id: 1, name: 'Milk', price: 0.49 },
    { id: 2, name: 'Weed', price: 2.89 },
    ]
    }
    
    add = (name,price) =>{
      let id = this.state.items.length + 1
     



      this.setState({
        items:[
          ...this.state.items,
          {id,name,price}
        ]
      })
    }
  render() {
  return (<div>
    <h1>Hello React</h1>;
    <ul>
     {this.state.items.map(i=>{
       return(
         <Item
            key={i.id}
            name = {i.name}
            price = {i.price}/>
       )
     })}

    </ul>
          <AddForm add={this.add}/>
          <Header name="I am Title"/>
          <ToolsBar>
                    <h1>ToolsBar</h1>
                    <h2>SomeContent</h2>
          </ToolsBar>

          

    </div>)
  }
  }

export default App;
