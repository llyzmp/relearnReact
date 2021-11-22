import React, {useEffect, useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({name: '张三'})
  useEffect(()=>{
    console.log('11111')
    document.title = count
  },[count])
  return (
    <div>
      <span>{count}</span>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setPerson({name: '小李小李'})}>setPerson</button>
    </div>
  )
}

export default App
