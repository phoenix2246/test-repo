import React, { Component } from 'react';

class Count extends Component {
    state = { 
        count:0
     } 
     showConsole=()=>{
         console.log(this.state.count)
     }
     Increment=()=>{
         this.setState({ count : this.state.count + 1},this.showConsole
            
         )
     }
    render() { 
        return (
            <div>
                <h3>Count:{this.state.count}</h3>
                <button onClick={this.Increment}>Change</button>
            </div>
        );
    }
}
 
export default Count;