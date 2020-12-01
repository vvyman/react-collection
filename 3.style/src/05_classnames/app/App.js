import React, { PureComponent } from 'react'
import './index.css'
import Home from '../home'
import Profile from '../profile'
import className from 'classnames'

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className={className('title', {active: true})}>App的title</h2>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
