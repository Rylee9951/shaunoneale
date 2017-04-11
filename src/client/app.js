import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'normalize.scss/normalize.scss'

//Components
import  Layout from 'layouts/Layout'
import Home from 'components/Home'
import Blog from 'components/Blog'
import Recipes from 'components/Recipes'
import ShaunStore from 'components/ShaunStore'
import Cocktails from 'components/Cocktail'
import Family from 'components/Family'
import Classy from 'components/Classy'
import Snacks from 'components/Snacks'
import Dessert from 'components/Dessert'
import Sides from 'components/Sides'
import Contact from 'components/Contact'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={Home}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/recipes" component={Recipes}/>
      <Route path="/cocktails" component={Cocktails}/>
      <Route path="/family" component={Family}/>
      <Route path="/classy" component={Classy}/>
      <Route path="/dessert" component={Dessert}/>
      <Route path="/sides" component={Sides}/>
      <Route path="/snacks" component={Snacks}/>
      <Route path="/store" component={ShaunStore}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'))
