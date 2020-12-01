import React, { PureComponent } from 'react'
import style from './index.module.css'
export default class Profile extends PureComponent {
  render() {
    return (
      <div className={style.profile}>
        <h2 className={style.title}>Profile title</h2>
        <ul className={style.list}>
          <li>item-1</li>
          <li>item-2</li>
          <li>item-3</li>
        </ul>
      </div>
    )
  }
}
