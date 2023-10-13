import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    
    const [posts,setpost] = useState([])
    const [id,setid] = useState(1)
    const [idbtn,setidbtn] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idbtn}`).then(res=>{
            console.log(res);
            setpost(res.data)
        }).catch(error=>{
            console.log(error);
        })
    },[idbtn])


  return (
    
    <div>
        <input type='text' name='id' onChange={e =>setid(e.target.value)}/>
        <button onClick={() => setidbtn(id)}>fetch post</button>
        {/* {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        } */
        posts.title}
    </div>
  )
}

export default DataFetching