import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from 'pages/login'
import Router from './router'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Router} />
    </Switch>
  </BrowserRouter>
)

export default App
