import React, { Component } from "react";
import TabControl from "./TabControl";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      curIndex: 0,
      titles: ['饿了么', '美团', '滴滴']
    };
  }

  render() {
    const { curIndex, titles } = this.state
    return (
      <div>
        <TabControl itemClick={idx => this.itemClick(idx)} titles={titles}/>
        <h2>{titles[curIndex]}</h2>
      </div>
    );
  }

  itemClick(idx) {
    this.setState({
      curIndex: idx
    })
  }
}
