import React, { Component } from 'react'

export default class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      text: '123',
    }
  }

  render() {
    console.log('App render')
    return (
      <div>
        {this.state.counter}
        <button onClick={() => this.increment()}>plus</button>
        <button onClick={() => this.changeText()}>change</button>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 如果不添加判断条件，则每次触发state，props修改都会触发render函数
    // 此处message没有进行展示，所以不需要触发render
    if (this.state.counter !== nextState.counter) {
      return true
    }
    return false
  }

  increment() {
    this.setState({ counter: this.state.counter + 1})
  }

  changeText() {
    this.setState({ text: 'new text' })
  }
}
