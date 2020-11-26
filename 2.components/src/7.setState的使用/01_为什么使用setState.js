import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  

  render() {
    return (
      <div>
       <h2>当前计数：{this.state.counter}</h2> 
       <button onClick={() => this.increment()}>plus</button>
      </div>
    )
  }

  increment() {
    // 直接修改state不能触发页面更新
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
