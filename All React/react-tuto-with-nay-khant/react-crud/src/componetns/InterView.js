import React, { Component } from 'react';

class Interview extends Component {
    state = {
        result : {
            
        }
      } 
      componentDidMount(){
          fetch('https://randomuser.me/api/')
          .then(res=>res.json())
          .then(res=>
            {
                this.setState({result : res})
                console.log(res)
            })
      }
    render() { 
        return (
            <div>
                <h1></h1>
            </div>
        );
    }
}
 
export default Interview;