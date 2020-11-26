import React, { PureComponent, memo } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log('App render')
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>plus</button>
        <MemoHeader />
        <Main />
        <Footer />
      </div>
    );
  }

  increment() {
    // 当函数每次执行时，所有render函数都会被重新执行一次
    this.setState({ counter: this.state.counter + 1 });
  }
}

const MemoHeader = memo(function Header() {
  console.log('Header render')
  return <header>头部</header>;
})

class Main extends PureComponent {
  render() {
    console.log('Main render')
    return (
      <div>
        <Banner />
        <ProductionList />
      </div>
    );
  }
}

function Banner() {
  console.log('Banner render')
  return <div>banner</div>;
}

function ProductionList() {
  console.log('ProductionList render')
  return (
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
    </ul>
  );
}

function Footer() {
  console.log('Footer render')
  return <footer>Footer</footer>;
}
