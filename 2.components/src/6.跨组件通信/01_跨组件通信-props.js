import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Wyman',
      level: 10
    }
  }
  render() {
    return (
      <div>
        <Profile {...this.state}/>
      </div>
    )
  }
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>

    </div>    
  )
}

function ProfileHeader(props) {
  return (
    <div>
      <div>用户昵称：{props.name}</div>
      <div>用户等级：{props.level}</div>
    </div>
  )
}