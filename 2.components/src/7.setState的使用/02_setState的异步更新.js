import React, { Component } from 'react'

export default class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    message: 'hello world'
  }
}

  render() {
    return (
      <div>
       <h2>{this.state.message}</h2> 
       <button onClick={() => this.changeText()}>change</button>
      </div>
    )
  }

  componentDidUpdate() {
    console.log('钩子函数message', this.state.message)
  }

  changeText() {
    // setState是异步的
    this.setState({
      message: '你好～'
    },() => {
      // 1. 回调函数获取异步更新后的数据
      console.log('callback message', this.state.message)
    })

    console.log('message', this.state.message)
  }
}
