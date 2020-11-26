import React, { Component } from 'react'

// 1. 创建context对象, 配置默认值
const UserContext = React.createContext({
  name: 'Wyman',
  level: 10
})

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Lin',
      level: 99
    }
  }
  render() {
    return (
      <div>
        {/* 2. 给子组件的最上层组件包裹Provider 设置传入值*/}
        <UserContext.Provider value={this.state}>
          <Profile/>
        </UserContext.Provider>
        {/** 没找到对应provider的value会使用context的默认值 */}
          <Profile/>
      </div>
    )
  }
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader/>
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
// 3.使用context对象 需要组件为类组件
class ProfileHeader extends Component {
  
  render() {
    // console.log('context', this.context)
    // 5. 从context中获取数据
    const { name, level } = this.context
    return (
      <div>
        <div>用户昵称：{name}</div>
        <div>用户等级：{level}</div>
      </div>
    )
  }
}

// 4. 获取上下文环境
ProfileHeader.contextType = UserContext
