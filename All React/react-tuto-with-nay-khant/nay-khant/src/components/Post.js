import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        title:'',
        body:'',
        userId:''
      } 
      handleChange = (e) => {
          e.preventDefault()
          this.setState({
              [e.target.name]:e.target.value
            
          })
      }

      handleSubmit=(e)=>{
          e.preventDefault()
          axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
          .then((response)=>{
              console.log(response)

          })
          .catch((error)=>{
                console.log(error)
          })
      }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <input type='text' name='title' value={this.state.title} onChange={this.handleChange} ></input>
                    </div>
                    <div>
                        <input type='text' name='body' value={this.state.body} onChange={this.handleChange} ></input>
                    </div>
                    <div>
                        <input type='text' name='userId' value={this.state.userId} onChange={this.handleChange} ></input>
                    </div>
                    <div>
                        <button type='submit' onChange={this.handleChange}>Submit</button>
                    </div>

                </form>
            </div>
        );
    }
}
 
export default Post;


