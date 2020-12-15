import React, { PureComponent } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }

  render() {
    const { isOn } = this.state;
    return (
      <SwitchTransition mode="in-out">
        <CSSTransition
          key={isOn ? "on" : "off"}
          classNames="btn"
          timeout={1000}
        >
          <button
            onClick={() => {
              this.setState({ isOn: !isOn });
            }}
          >
            {isOn ? "on" : "off"}
          </button>
        </CSSTransition>
      </SwitchTransition>
    );
  }
}
