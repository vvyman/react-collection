import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      erCode: "",
    };
  }

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <label htmlFor="username">
          用户名：
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <label htmlFor="password">
          密码：
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <label htmlFor="erCode">
          二维码：
          <input
            type="text"
            id="erCode"
            name="erCode"
            value={this.state.erCode}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }

  // handleUsernameChange(e) {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // }

  // handlePasswordChange(e) {
  //   this.setState({ password: e.target.value });
  // }

  // handleErCodeChange(e) {
  //   this.setState({
  //     erCode: e.target.value,
  //   });
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const { username, password, erCode } = this.state;
    console.log("username, password, erCode: ", username, password, erCode);
  }
}
