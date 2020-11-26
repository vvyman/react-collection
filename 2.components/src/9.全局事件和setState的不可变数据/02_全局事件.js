import React, { PureComponent } from "react";
// 1.引入emitter
import { EventEmitter } from "events";

// 2. 创建全局事件对象
const eventBus = new EventEmitter();

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}

class Home extends PureComponent {
  // 4.注册对应事件监听事件
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleSayListener);
  }

  // 5.组件销毁时移除监听
  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayListener);
  }

  handleSayListener(name, message) {
    console.log("say", name + " " + message);
  }

  render() {
    return <h2>Home</h2>;
  }
}

class Profile extends PureComponent {
  render() {
    return <button onClick={() => this.emitEvent()}>profile</button>;
  }

  emitEvent() {
    // 3. 创建被监听事件，传入对应参数
    eventBus.emit("sayHello", "hello", "wyman");
  }
}
