import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from '@containers/Home'
import NotFound from '@containers/NotFound'
import PartOne from '@containers/PartOne'
import PartThree from '@containers/PartThree'
import PartTwo from '@containers/PartTwo'
import Layout from '@layouts/Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/partone' component={PartOne} />
          <Route exact path='/parttwo' component={PartTwo} />
          <Route exact path='/partthree' component={PartThree} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
