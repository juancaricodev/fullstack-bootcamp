import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from '@components/Home'
import PartOne from '@containers/PartOne'
import Layout from '@layouts/Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/partone' component={PartOne} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
