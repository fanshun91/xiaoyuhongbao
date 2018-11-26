import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from 'pages/login'
import Router from './router'
import store from './store'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Router} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
