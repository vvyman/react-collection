import React, { PureComponent } from 'react'

// 1. 引入store
import store from '../store'

// 3. 引入reducer
import {
  addAction
} from '../store/actionCreators'

export default class Home extends PureComponent {


  constructor(props) {
    super(props)
    // 2. 初始化state
    this.state = {
      counter: store.getState().counter
    }
  }


  componentDidMount() {
    // 5. 订阅事件，并触发render
    this.unSubscribe = store.subscribe(() => {
      this.setState({ counter: store.getState().counter})
    })
  }

  componentWillUnmount() {
    // 6. 组件销毁时，接触订阅
    this.unSubscribe()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前记数为：{ this.state.counter }</h2>
        <button onClick={ e => this.increment()}>+1</button>
        <button onClick={ e => this.addNumber(5)}>+5</button>
      </div>
    )
  }

  // 4. 派发事件
  increment() {
    store.dispatch(addAction(1))
  }

  addNumber() {
    store.dispatch(addAction(5))
  }
}
