// render函数返回值
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      // react元素 普通html 和 自定义组件
      // <div>
        // hello World
      // </div>
      
      // 数组
      [
        <div>1</div>,
        <div>2</div>
      ]
    )
  }
}
