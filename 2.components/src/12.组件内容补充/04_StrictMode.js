import React, { PureComponent, StrictMode } from "react";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    console.log("render Home");
  }

  UNSAFE_componentWillMount() {
    console.log('unsafe mount home')
  }
  render() {
    return <h2>Home</h2>;
  }
}
class Profile extends PureComponent {
  constructor(props) {
    super(props);
    console.log("render Profile");
  }

  UNSAFE_componentWillMount() {
    console.log("unsafe mount profile");
  }
  render() {
    return <h2 ref="profile">profile</h2>;
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    );
  }
}
