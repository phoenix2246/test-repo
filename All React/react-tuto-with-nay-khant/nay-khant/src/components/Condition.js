import React, { Component } from 'react';

class Condition extends Component {
    state = { 
        message: false
     } 
    render() { 
    //     if (this.state.message) {
    //         return(
    //             <div>React</div>
    //         )
    // }else{
    //     return(
    //         <div>VueJs</div>
    //     )
    // }} 

    //   return  this.state.message ?<div>React</div>:<div>VueJs</div>
    // let Condition
    // if (this.state.message) {
    //     Condition = <div>React</div>
    // } else {
    //     Condition = <div>VueJs</div>
    // }
    // return Condition
    return this.state.message && <div>React</div>

    }
}
 
export default Condition;