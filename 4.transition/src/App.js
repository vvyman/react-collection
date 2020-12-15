import React, { PureComponent } from 'react'
// import CSSTransitionDemo from'./transition/CSSTransitionDemo'
// import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
// import './transition/CSSTransitionDemo.css'
// import './transition/SwitchTransitionDemo..css'

import TransitionGroupDemo from './transition/TransitionGroupDemo'

export default class App extends PureComponent {
  render() {
    return (
      <div>
       {/* <CSSTransitionDemo />  */}
       {/* <SwitchTransitionDemo /> */}
       <TransitionGroupDemo />
      </div>
    )
  }
}
