import React, { PureComponent, memo } from "react";

class Header extends PureComponent {
  render() {
    const { name, level, region } = this.props;
    return <div>{name + " " + level + " " + region}</div>;
  }
}

const Content = memo(function Content(props) {
  return <div>{props.name + " " + props.level + " " + props.region}</div>;
});

function EnhancedComponent(WrapperComponent, otherProps) {
  return props => {
    return <WrapperComponent {...props} {...otherProps}></WrapperComponent>
  }
}

const EnhanceHeader = EnhancedComponent(Header, { region: 'China' })
const EnhanceContent = EnhancedComponent(Content, { region: 'US' })

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHeader name="wyman" level="99" />
        <EnhanceContent name="content" level="10" />
      </div>
    );
  }
}
