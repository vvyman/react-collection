import React, { PureComponent } from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import User from "./pages/User";
import UnMatch from "./pages/UnMatch";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Detail2 from "./pages/Detail2";

import { renderRoutes } from 'react-router-config'
import routes from "./router";


class App extends PureComponent {
  
  render() {
    const info = {
      name: 'wyman',
      age: 23
    }
    return (
      <div>
        <BrowserRouter>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link> */}

          <NavLink to="/" activeStyle={{ color: "red" }}>
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="link-active">
            About
          </NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/detail/1017">Detail</NavLink>
          <NavLink to={{
            pathname: '/detail2',
            state: info
          }}>Detail2</NavLink>
          <button onClick={() => this.jumpProduct()}>商品列表</button>

          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/:id" component={User} />
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
            <Route path="/product" component={Product} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/detail2" component={Detail2} />
            <Route component={UnMatch} />
          </Switch> */}
          { renderRoutes(routes) }
        </BrowserRouter>
      </div>
    );
  }

  jumpProduct() {
    const {history} = this.props;
    history.push('/product')
  }
}


export default withRouter(App)
