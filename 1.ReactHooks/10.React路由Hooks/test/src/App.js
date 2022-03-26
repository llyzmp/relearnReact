import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <>
      <div>
        <Link to='/home'>首页</Link>
        <Link to='/list'>列表页</Link>
      </div>
      <div>
        {/* 定义路由规则 */}
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/list" element={ <List /> } />
        </Routes>
      </div>
    </>
  )
}


export default App
