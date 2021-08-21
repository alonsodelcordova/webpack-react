import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeaderBlog from './components/HeaderBlog'
import Home from './pages/Home'
import './assets/blog.css';

export default function Index() {
   return (
      <div>
         <HeaderBlog />
         <BrowserRouter>
            <Switch>
               <Route path='/' component={Home} />
            </Switch>
         </BrowserRouter>
      </div>
   )
}
