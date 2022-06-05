import React, { Component } from 'react';

class Form extends Component {
     state = { 
        userName : '',
        comment : ''
     } 
     handleSubmit = (e) => {
         e.preventDefault()
         alert(`My Name is ${this.state.userName} and ${this.state.comment}  `)
     }

     commentChange = (e) => {
         this.setState({
             comment : e.target.value 
         })
         console.log(this.state.comment)
     }

     handleChange = (e) =>{
         this.setState({
             userName : e.target.value
         })
         console.log(this.state.userName)
     }
    render() { 
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                <label>userName</label>
                <input type='text' value={this.state.userName} onChange={this.handleChange} ></input>
            </div>
            <div>
                <label>Comment</label>
                <input type='text' value={this.state.comment} onChange={this.commentChange} ></input>
            </div>
            <button type='submit'>Submit</button>
            </form>
        );
    }
}
 
export default Form;