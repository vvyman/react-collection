import React, { PureComponent } from 'react'
import './index.css'
import Home from '../home'
import Profile from '../profile'

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className="title">App的title</h2>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
