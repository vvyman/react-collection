import React, { Component } from "react";

// 1. 创建context对象, 配置默认值
const UserContext = React.createContext({
  name: "Wyman",
  level: 10,
});

const ThemeContext = React.createContext({
  color: "blue",
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lin",
      level: 99,
    };
  }
  render() {
    return (
      <div>
        {/* 2. 给子组件的最上层组件包裹Provider 设置传入值*/}
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{color: 'red'}}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
        {/** 没找到对应provider的value会使用context的默认值 */}
        <Profile />
      </div>
    );
  }
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>
    </div>
  );
}
// 3.使用函数组件获取context
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <div style={{color: theme.color}}>
                  <div>用户昵称：{value.name}</div>
                  <div>用户等级：{value.level}</div>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}
