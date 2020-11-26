import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [
        { name: "John", age: 20 },
        { name: "lucy", age: 18 },
        { name: "tom", age: 30 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>朋友列表</h2>
        <ul>
          {this.state.friends.map((friend, idx) => {
            return (
              <li key={friend.name}>
                姓名：{friend.name}
                年龄：{friend.age}
                <button onClick={() => this.incrementAge(idx)}>年龄 + 1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={() => this.insertData()}>添加新数据</button>
      </div>
    );
  }

  insertData() {
    const friends = [...this.state.friends, { name: "wyman", age: 11 }];
    this.setState({ friends });
  }

  incrementAge(idx) {
    const friends = [...this.state.friends];
    friends[idx].age += 1;
    this.setState({ friends });
  }
}
