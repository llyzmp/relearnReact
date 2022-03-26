import React,  {useState, useEffect} from 'react'
import axios from 'axios'

// 自定义hook函数
function useGetPost() {
  const [post, setPost] = useState({});
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => setPost(res.data));
  }, [])
  return [post, setPost]
}



function App() {
  const [ post, setPost ] = useGetPost()
  return <div>
    <div>{ post.title }</div>
    <div>{ post.body }</div>
  </div>
}
export default App
