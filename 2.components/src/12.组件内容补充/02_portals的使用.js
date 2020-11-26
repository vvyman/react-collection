import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

class Modal extends PureComponent {
  render() { 
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('modal')
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Modal>
          <h2>title</h2>
        </Modal>
      </div>
    )
  }
}
