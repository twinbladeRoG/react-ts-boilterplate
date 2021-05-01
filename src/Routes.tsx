import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fallback from './Fallback';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Login = React.lazy(() => import('./pages/Login'));

const Routes = () => (
  <React.Suspense fallback={<Fallback />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default Routes;
