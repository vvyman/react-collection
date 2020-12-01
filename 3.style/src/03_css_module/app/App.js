import React, { PureComponent } from 'react'
import style from './index.module.css'
import Home from '../home'
import Profile from '../profile'

export default class App extends PureComponent {
  render() {
    return (
      <div className={style.app}>
        <h2 className={style.title}>App的title</h2>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
