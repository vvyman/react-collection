import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello world",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeText()}>change1</button>
        <button id="btn">change2</button>
      </div>
    );
  }

  changeText() {
    setTimeout(() => {
      this.setState({
        message: '你好1～'
      })
      console.log(this.state.message)
    }, 0)
  }

  componentDidMount() {
    document.getElementById('btn').addEventListener('click', () => {
      this.setState({
        message: '你好2~'
      })
      console.log(this.state.message)
    })
  }
}
