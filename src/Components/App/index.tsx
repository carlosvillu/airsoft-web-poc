import React from 'https://cdn.skypack.dev/react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'https://cdn.skypack.dev/react-router-dom'

import { Layout } from '../Layout'
import { Home } from '../Home'
import { Login } from '../Login'

const App = () => {
  return (
    <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/hello">
              <h1>Hello</h1>
            </Route>
          </Switch>
        </Layout>
    </Router>
  )
}

export { App }
