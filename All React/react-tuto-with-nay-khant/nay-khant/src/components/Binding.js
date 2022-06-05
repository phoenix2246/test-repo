import React, { Component } from 'react';

class Binding extends Component {
    constructor(){
        super()
        this.state={
            message:'Hello'
        }
    }
    handleChange = () =>{
        this.setState({
            message:'Stay At Home'
        })
    }
    render() { 
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleChange} >Click</button>
            </div>
        );
    }
}
 
export default Binding;