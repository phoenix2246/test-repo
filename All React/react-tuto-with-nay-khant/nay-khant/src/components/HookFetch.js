import React, { useState, useEffect } from 'react';
import axios from 'axios'

function HookFetch() {
   const [post,setPost] = useState([])
   const [postId,setPostId] = useState(1)

   useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
       .then((res)=>{
       console.log(res)
        setPost(res.data)
                    })
       .catch(err=>console.log(err))
   },[postId])

    return ( 
       <div>
           <input type='text' value={postId} onChange={e=>setPostId(e.target.value)}/>
           Title : {post.title}

           {/* <ul>
               {
                   post.map(i=><li key={i.id} >{i.title}</li>)
               }
           </ul> */}
       </div>
     );
}

export default HookFetch;