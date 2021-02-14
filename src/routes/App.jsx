import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Anecdotes from '@containers/Anecdotes'
import Course from '@containers/Course'
import Home from '@containers/Home'
import NotFound from '@containers/NotFound'
import Unicafe from '@containers/Unicafe'
import Layout from '@layouts/Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/course' component={Course} />
          <Route exact path='/unicafe' component={Unicafe} />
          <Route exact path='/anecdotes' component={Anecdotes} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
