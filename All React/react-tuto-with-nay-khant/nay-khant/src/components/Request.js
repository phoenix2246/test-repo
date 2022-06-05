import React, { Component } from 'react';
import Axios from 'axios'

class Req extends Component {
    state = { 
        post:[],
        msg:""
     } 
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState({
                post: response.data
            })
        }).catch((error)=>{
            console.log(error)
            this.setState({
                msg:error
            })
        })
    }
     
        render(){
            return(
                <div>

                    {
                        this.state.msg ? <div>{this.state.msg}</div>: null
                    }
                    {
                       this.state.post ? this.state.post.map(
                            i=><div key={i.id}>{i.title}</div>
                        ) : null
                    }
                </div>
            )
        }
    }
export default Req;