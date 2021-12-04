import React from 'react'
import './index.css'

export default function ThreeLayout(props) {
  const defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800
  }
  const datas = Object.assign({}, defaultProps, props)

  return (
    <div className="three-layout" style={{ mainWidth:datas.minWidth}}> 
      <div className="main" style={{ minWidth:datas.minWidth }}>
        {/* 中间的内容 */}
        {props.children}
      </div>
      <div className="aside-left" style={{width: datas.leftWidth}}>
        {/* 左边的内容 */}
        {props.left}
      </div>
      <div className="aside-right" style={{width: datas.rightWidth}}>
        {/* 右边的内容 */}
        {props.right}
      </div>
    </div>
  )
}
