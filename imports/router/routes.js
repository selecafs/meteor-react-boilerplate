import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import Dashboard from '../ui/pages/Dashboard.jsx';
import Recover from '../ui/pages/Recover.jsx';

let requireAuth = (nextState, replace)=> {
  if (!Meteor.loggingIn()) {
      if(nextState.location.pathname && nextState.location.pathname !== '/') {
        replace('/');
      }
  } else {
    if(nextState.location.pathname && nextState.location.pathname !== '/dashboard') {
      replace('/dashboard');
    }
  }
}

const routes = [
  {
    path: '/',
    component: Home,
    onEnter: (requireAuth)
  },
  {
    path: '/dashboard',
    component: Dashboard,
    onEnter: (requireAuth)
  },
  {
    path: '/recover',
    component: Recover
  },
  {
    path: '/about',
    component: About,
  }, {
    path: '*',
    component: NotFound
  }
];

export default routes;
