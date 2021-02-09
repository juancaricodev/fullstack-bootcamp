import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PartOne from '@containers/PartOne'

import Layout from '@layouts/Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={PartOne} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
