import React, { Component } from 'react'

class Comp extends Component {
  render() {
    return (
      <div>子组件</div>
    )
  }

  componentWillUnmount() {
    console.log('执行componentWillUnmount函数');
  }
}

export default class App extends Component {

  constructor(props) {
    super(props)
    console.log('执行constructor函数')
    this.state = {
      counter: 0,
      isShow: true
    }
  }

  render() {
    console.log('执行render函数')
    return (
      <div>
        <button onClick={() => this.increment()}>plus</button>
        {this.state.counter}       
        <div>
          <button onClick={() => this.changeCompDisplay()}>toggle</button>
          {this.state.isShow && <Comp />}
        </div>
      </div>
    )
  }

  changeCompDisplay() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  increment() {
    this.setState({
      count: this.state.counter + 1
    })
  }

  componentDidMount() {
    console.log('执行componentDidMount函数')
  }

  componentDidUpdate() {
    console.log('执行componentDidUpdate函数')
  }
}
