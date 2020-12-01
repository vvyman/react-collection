import React, { PureComponent } from "react";
import Home from "../home";
import Profile from "../profile";
import styled, { ThemeProvider } from 'styled-components'

const CommonButton = styled.button`
  padding: 10px 20px;
  background: skyblue;
`

const CusPrimaryButton = styled(CommonButton)`
  color: red;
`

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App的title</h2>
        <ThemeProvider theme={{color: "red", fontSize: "60px"}}>
          <Home />
        </ThemeProvider>
        <Profile />
        <CommonButton>common</CommonButton>
        <CusPrimaryButton>btn</CusPrimaryButton>
      </div>
    );
  }
}
