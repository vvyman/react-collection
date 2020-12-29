import About, { Background, Culture, Contact, JoinUs } from "../pages/About";
import Detail from "../pages/Detail";
import Detail2 from "../pages/Detail2";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import User from "../pages/User";

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about',
        exact: true,
        component: Background
      },
      {
        path: '/about/culture',
        component: Culture
      },
      {
        path: '/about/contact',
        component: Contact
      },
      {
        path: '/about/joinus',
        component: JoinUs
      }
    ]
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: './detail2',
    component: Detail2
  }
]

export default routes