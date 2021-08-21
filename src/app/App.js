import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './security/pages/Login';
import Blog from './blog/Index';

export default function App() {
   
   return (
      <BrowserRouter>
         <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={Blog} />
         </Switch>
      </BrowserRouter>
   )
}
