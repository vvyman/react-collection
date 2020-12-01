import React, { PureComponent } from 'react'
import './index.css'
export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile">
        <h2 className="title">Profile title</h2>
        <ul className="list">
          <li>item-1</li>
          <li>item-2</li>
          <li>item-3</li>
        </ul>
      </div>
    )
  }
}
