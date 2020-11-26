import React, { PureComponent, createContext } from "react";

// 1. 创建Context，配置默认值
const UserContext = createContext({
  name: "wyman",
  level: 99,
});

function enhanceContent(WrapperComponent) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(value) => {
          return <WrapperComponent {...props} {...value} />;
        }}
      </UserContext.Consumer>
    );
  };
}


function Header(props) {
  return <div>{props.name + " " + props.level + " " + props.region}</div>;
}

function Content(props) {
  return <div>{props.name + " " + props.level + " " + props.region}</div>;
}

const EnhanceContent = enhanceContent(Content);
const EnhanceHeader = enhanceContent(Header);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{ name: "admin", level: 777 }}>
          <EnhanceHeader region="cn" />
          <EnhanceContent region="us" />
        </UserContext.Provider>
      </div>
    );
  }
}
