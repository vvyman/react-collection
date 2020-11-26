import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor="username">
          用户名：
          <input
            type="text"
            id="username"
            onChange={(e) => this.handleChange(e)}
            value={this.state.username}
          />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("username", this.state.username);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
}
