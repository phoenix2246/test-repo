import React, { Component } from 'react';
import CounterItem from './CounterItem';

class Counter extends Component {
    state = {
        counters : [
            {
                id:1,
                title: 'React'
            }
            ,
            {
                id:2,
                title: 'Angular'
            },
            {
                id:3,
                title: 'Vue'
            },{
                id:4,
                title: 'Php'
            }
        ],
        counterItem : '', 
      } 

      componentDidMount(){
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => this.setState({counters : data}))
      }

      handleChange = (e) => {
          this.setState({
              counterItem : e.target.value
          })
      }

      handleSubmit = () => {
          const submitCounter =[...this.state.counters]
          const newId = submitCounter.length? submitCounter[submitCounter.length -1].id + 1 : 1;
        //   console.log(newCounter)
          submitCounter.push({id: newId, title:this.state.counterItem})
          
          console.log(submitCounter)
        this.setState({counters:submitCounter})
      }

      handleDelete = (id) =>{
          const newCounter = [...this.state.counters]
          const counterUpdate = newCounter.filter(i=>i.id !== id)
          this.setState({counters : counterUpdate})
          console.log(counterUpdate)
      }
      handleUpdate = (text,id)=>{
        const newCounter = [...this.state.counters]
        newCounter.map(i=>{
            if(i.id === id){
                i.title = text
            }
        })
        this.setState(newCounter)
    // console.log(counters)
        }

    render() { 
        // console.log(this.state.counterItem)
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <input type='text' name='title' value={this.state.counterItem} onChange={this.handleChange} />
                <button type='submit' onClick={this.handleSubmit} >Submit</button>
                {this.state.counters.map(i=><CounterItem 
                id={i.id} key={i.id} title={i.title} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />)}
                
            </div>
        );
    }
}
 
export default Counter;
