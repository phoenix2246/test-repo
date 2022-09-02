import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import CounterItems from './CounterItems'


const Counter = ({name}) => {
    const [post,setPost] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            setPost(res.data)
           
        }).catch(err=>{
            console.log(err)
        })
    },[])
    handleChange = (e) =>{
        setPost([{...post},e.target.value])
    }
  return (
    <div>
      <h1>{name}</h1>
      <input type='text' name='title' style={{margin : '3rem'}} value={setPost("")} onChange='handleChange'></input>
      <button onClick={(e)=>setPost(e.target.value)}>Submit</button>
      {
        post.map(i => <CounterItems key={i.id} name={i.title}></CounterItems> ) 
      }
    </div>
  )
}

export default Counter
