// 类组件
import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super()
//   }

//   render() {
//     return (
//       <div>
//         Hello world
//       </div>
//     )
//   }
// }

// 函数式组件
/**
 * 特点：
 *  1. 没有this对象
 *  2. 没有内部的状态
 */
export default function App() {
  return (
    <div>
      function 函数式组件
    </div>
  )
}