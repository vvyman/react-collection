import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello world",
      name: "wyman"
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.changeText()}>change1</button>
        <button id="btn">change2</button>
      </div>
    );
  }

  changeText() {
    this.setState({
      message: "你好1～",
      // setState执行的其实是对象的合并Object.assign({}, oldState, targetState)
    });
  }
}
