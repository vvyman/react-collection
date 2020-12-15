import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./TransitionGroupDemo.css";

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: ["wyman", "pika", "sally"],
    };
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {this.state.list.map((item, idx) => {
            return (
              <CSSTransition timeout={500} classNames="item" key={item} appear>
                <div>
                  {item}
                  <button onClick={() => this.removeItem(idx)}>remove</button>
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={() => this.addOne()}>addOne</button>
      </div>
    );
  }

  addOne() {
    const str = "abcdefghijklmnopqrstuvwxyz";
    const randomItem = Array(5)
      .fill(0)
      .map((item) => {
        return str[Math.floor(Math.random() * 26)];
      })
      .join("");
    this.setState({
      list: [...this.state.list, randomItem],
    });
  }

  removeItem(targetIdx) {
    this.setState({
      list: this.state.list.filter((item, idx) => idx !== targetIdx),
    });
  }
}
