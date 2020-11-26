import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {


  constructor(props) {
    super(props)

    // 使用对象获取ref需要调用createRef函数
    this.titleRef = createRef()
    this.titleEl = null
    this.counterRef = createRef()
  }

  render() {
    return (
      <div>
       <h2 ref="titleRef">Hello World</h2> 
       <h2 ref={this.titleRef}>Hello World</h2> 
       <h2 ref={arg => this.titleEl = arg}>Hello World</h2> 
       <Counter ref={this.counterRef} />
       <button onClick={() => this.changeText()}>change</button>
      </div>
    )
  }

  changeText() {
    // 1. 第一种方式： 使用refs（已废弃）
    this.refs.titleRef.innerHTML = "hello world"

    // 2. 第二种方式： 使用对象获取
    this.titleRef.current.innerHTML = "hello world again"

    // 3. 第三种方式： 使用函数获取
    this.titleEl.innerHTML = "hello world again and again"

    console.log('counter', this.counterRef)
  }
}

class Counter extends PureComponent {
  render() { 
    return ( 
      <div>Counter</div>
     );
  }
}
 
