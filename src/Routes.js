import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import PostsList from './components/PostsList';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      {/* Switch faz com que so seja procurado uma rota em nossa aplicação*/}
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={PostsList} />
      <Route component={NotFound} />
    </Switch>
  );
}