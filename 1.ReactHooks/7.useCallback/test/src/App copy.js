import React, {useEffect, useState} from 'react'
import axios from 'axios'

function useGetPost () {
  const [post, setPost] = useState({})
  useEffect(()=>{
    axios.get('heeps://jsonplaceholder.typicode.com/posts/1').then(res => {
      setPost(res.data)
    })
  },[])
  return [post, setPost]
}

const App = () => {
  const [post, setPost] = useGetPost()
  return (
    <div>
      <span>{ post.title }</span>
      <span>{ post.body }</span>
    </div>
  )
}

export default App
