import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'normalize.scss/normalize.scss'

//Components
import  Layout from 'layouts/Layout'
import Home from 'components/Home'
import TheDj from 'components/Thedj'
import TheChef from 'components/Thechef'
import Blog from 'components/Blog'
import Recipes from 'components/Recipes'
import ShaunStore from 'components/ShaunStore'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={Home}/>
      <Route path="/thedj" component={TheDj}/>
      <Route path="/thechef" component={TheChef}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/recipes" component={Recipes}/>
      <Route path="/store" component={ShaunStore}/>
    </Route>
  </Router>
), document.getElementById('app'))
