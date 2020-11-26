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
    // 由于setState自身的合并，传入对象的setState会被合并
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // 当使用函数时，可进行累加操作
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
}
