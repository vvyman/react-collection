import React, { PureComponent, createRef, forwardRef } from "react";

class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }
}

// 通过forwardRef获取函数式组件中的dom元素
const Profile = forwardRef(function (props, ref) {
  return <div ref={ref}>Profile</div>;
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>title</h2>
        <Home ref={this.homeRef} />
        <Profile ref={this.profileRef} />
        <button onClick={() => this.printRef()}>print</button>
      </div>
    );
  }

  printRef() {
    console.log("title", this.titleRef);
    console.log("Home", this.homeRef);
    console.log("profile", this.profileRef);
  }
}
