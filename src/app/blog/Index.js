import React from 'react'
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
import HeaderBlog from './components/HeaderBlog'
import Home from './pages/Home'
import './assets/blog.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';

export default function Index() {
   const match = useRouteMatch();
   return (
      <div>
         <HeaderBlog />
            <Switch>
               <Route path='/about' component={About} />
               <Route path='/contact' component={Contact} />
               <Route path='/products' component={Products} />
               <Route path='/'component={Home} />
            </Switch>
      </div>
   )
}
