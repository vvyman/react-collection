import React, { Component } from "react";

function CounterButton(props) {
  const { btnClick } = props;
  return <button onClick={btnClick}>plus</button>;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return <div>
      <h2>Counter: {this.state.counter}</h2>
      <CounterButton btnClick={() => this.increment()} />
    </div>;
  }
}
