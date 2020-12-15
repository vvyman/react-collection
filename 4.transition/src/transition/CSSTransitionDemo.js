import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={(e) => this.changeState()}>show/hide</button>
        <CSSTransition
          in={isShow}
          classNames="title"
          timeout={300}
          unmountOnExit={true}
          appear
          onEnter={e => {console.log('开始进入')}}
          onEntering={e => {console.log('正在进入')}}
          onEntered={e => {console.log('进入完成')}}
          onExit={e => {console.log('开始退出')}}
          onExiting={e => {console.log('正在推出')}}
          onExited={e => {console.log('退出完成')}}
        >
          <h2>Hello World</h2>
        </CSSTransition>
      </div>
    );
  }

  changeState() {
    console.log(123);
    this.setState({ isShow: !this.state.isShow });
  }
}
