import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const HookDataFetch = () => {
    const [post,setPost] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res)
            setPost(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>
       <ul>
        {
            post.map(i=><li key={i.id}>{i.title}</li>)
        }
       </ul>
    </div>
  )
}

export default HookDataFetch
