import React, { PureComponent } from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  font-size: ${props => props.theme.fontSize};
  color: red;

  .title {
    color: ${props => props.theme.color};
  }
`;

const CusInput = styled.input.attrs({
  placeholder: "hello",
  paddingLeft: (props) => props.left || "5px",
})`
  background: skyblue;
  padding-left: ${(props) => props.paddingLeft};
  color: ${(props) => props.color};
`;

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "purple"
    };
  }
  render() {
    return (
      <HomeWrapper>
        <h2 className="title">Home Title</h2>
        <span>banner</span>
        <hr />
        <CusInput type="password" left="10px" color={this.state.color} />
        <hr />
      </HomeWrapper>
    );
  }
}
