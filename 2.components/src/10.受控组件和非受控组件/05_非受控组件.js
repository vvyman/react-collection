import React, { PureComponent, createRef } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();
  }

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <label htmlFor="username">
          Username:{" "}
          <input
            type="text"
            id="username"
            ref={this.usernameRef}
          />
        </label>
        <input type="submit" value="submit"/>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('username', this.usernameRef.current.value)
  }

  
}
