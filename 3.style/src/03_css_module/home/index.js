import React, { PureComponent } from 'react'
import style from './index.module.css'
export default class Home extends PureComponent {
  render() {
    return (
      <div className={style.home}>
        <h2 className={style.title}>Home Title</h2>
      </div>
    )
  }
}
