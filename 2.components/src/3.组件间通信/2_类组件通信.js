import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
       <ChildComp name={'Wyman'} age={10} job={'coder'} /> 
       <ChildComp name={'Lin'} age={12} job={'pm'} /> 
      </div>
    )
  }
}

class ChildComp extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { name, age, job } = this.props
    return (
    <h2>{name + age + job}</h2>
    )
  }
}
