import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Anecdotes from '@containers/Anecdotes'
import Courses from '@containers/Courses'
import Home from '@containers/Home'
import Notes from '@containers/Notes'
import NotFound from '@containers/NotFound'
import Phonebook from '@containers/Phonebook'
import Unicafe from '@containers/Unicafe'
import Layout from '@layouts/Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='/unicafe' component={Unicafe} />
          <Route exact path='/anecdotes' component={Anecdotes} />
          <Route exact path='/notes' component={Notes} />
          <Route exact path='/phonebook' component={Phonebook} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
