import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter : [
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
            }
        ]
      } 
    render() { 
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                {this.state.counter.map(i=><h2 key={i.id } >{i.title}</h2>)}
            </div>
        );
    }
}
 
export default Counter;
