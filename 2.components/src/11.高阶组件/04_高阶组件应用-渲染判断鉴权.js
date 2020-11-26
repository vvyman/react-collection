import React, { PureComponent } from "react";

class Login extends PureComponent {
  render() {
    return <h2>LoginPage</h2>;
  }
}

class CartPage extends PureComponent {
  render() {
    return <h2>CartPage</h2>;
  }
}

function withAuth(WrapperComponent) {
  return (props) => {
    const { isLogin } = props;
    return isLogin ? <WrapperComponent /> : <Login />;
  };
}

const Page = withAuth(CartPage);

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  render() {
    return (
      <div>
        App
        <Page isLogin={this.state.isLogin} />
        <button onClick={() => this.handleClick()}>{this.state.isLogin ? "退出" : "登陆"}</button>
      </div>
    );
  }

  handleClick() {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
}
