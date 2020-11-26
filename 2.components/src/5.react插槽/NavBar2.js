import React, { Component } from 'react'
export default class NavBar extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    const {leftSlot, contentSlot, rightSlot} = this.props
    return (
      <div className="navbar">
        <div className="nav-item nav-left">{leftSlot}</div>
        <div className="nav-item nav-content">{contentSlot}</div>
        <div className="nav-item nav-right">{rightSlot}</div>
      </div>
    )
  }
}
