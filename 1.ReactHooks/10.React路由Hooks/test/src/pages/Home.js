import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export default function Home(props) {
  console.log(props);
  // console.log(useNavigate());
  console.log(useLocation());
  console.log(useParams());
  return <div>Home 页面</div>
}