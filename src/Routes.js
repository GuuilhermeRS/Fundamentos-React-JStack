import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import PostsList from './components/PostsList';

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={PostsList} />
    </>
  );
}