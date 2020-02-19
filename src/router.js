import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './telas/home';
import Restaurantes from './telas/restaurantes';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route exact path='/restaurantes' component={Restaurantes} />
    </Switch>
  </BrowserRouter>
)
 
export default Routes;