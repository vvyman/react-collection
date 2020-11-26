import React, { Component } from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        {/**插槽1 使用children */}
        <NavBar>
          <span>button</span>
          <strong>content</strong>
          <span>right</span>
        </NavBar>
        {/**插槽2 使用props */}
        <NavBar2
          leftSlot={<span>button</span>}
          contentSlot={<span>content</span>}
          rightSlot={<span>right</span>}
        />
      </div>
    );
  }
}

export default App;
