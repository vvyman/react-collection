import React, { Fragment, PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      friends: [
        { name: "wyman", age: 30 },
        { name: "lin", age: 18 },
      ],
    };
  }
  render() {
    return (
      <>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.increment()}>plus</button>
        {this.state.friends.map((friend) => {
          return (
            <Fragment key={friend.name}>
              <div>{friend.name}</div>
              <p>{friend.age}</p>
              <hr />
            </Fragment>
          );
        })}
      </>
    );
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
}
