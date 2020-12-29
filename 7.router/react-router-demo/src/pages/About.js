import React, { PureComponent } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { renderRoutes } from 'react-router-config'

export function Background(props) {
  return <h1>企业背景</h1>;
}

export function Culture(props) {
  return <h1>企业文化</h1>;
}

export function Contact(props) {
  return <h1>联系我们</h1>;
}

export function JoinUs(props) {
  return <h1>加入我们123321</h1>
}

export default class About extends PureComponent {
  render() {
    const { routes } = this.props.route
    return (
      <div>
        <NavLink exact to="/about" activeClassName="about-active">
          企业背景
        </NavLink>
        <NavLink exact to="/about/culture" activeClassName="about-active">
          企业文化
        </NavLink>
        <NavLink exact to="/about/contact" activeClassName="about-active">
          联系我们
        </NavLink>
        <button onClick={e => this.jumpJoinUs()}>加入我们</button>
        {/* <Switch>
          <Route exact path="/about" component={Background}></Route>
          <Route path="/about/culture" component={Culture}></Route>
          <Route path="/about/contact" component={Contact}></Route>
          <Route path="/about/joinus" component={JoinUs}></Route>
        </Switch> */}
        { renderRoutes(routes) }
      </div>
    );
  }

  jumpJoinUs() {
    const { history } = this.props
    history.push('/about/joinus')
  }
}
