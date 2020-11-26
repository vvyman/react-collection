import React, { Component } from 'react'
export default class NavBar extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    const [left, content, right] = this.props.children
    return (
      <div className="navbar">
        <div className="nav-item nav-left">{left}</div>
        <div className="nav-item nav-content">{content}</div>
        <div className="nav-item nav-right">{right}</div>
      </div>
    )
  }
}
