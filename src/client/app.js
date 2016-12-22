import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'normalize.scss/normalize.scss'

//Components
import  Layout from 'layouts/Layout'
import Home from 'components/Home'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'))
