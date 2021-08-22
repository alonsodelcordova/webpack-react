import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

export default function HeaderBlog() {
   const [collapse, setCollapse] = useState("navbar-collapse collapse");
   let match = useRouteMatch();
   const change = () => {
      setCollapse(collapse.includes(" collapse") ? 'navbar-collapse' : 'navbar-collapse collapse');
   }

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
         <div className="container-fluid">
            <Link to={`${match.url}`} className="navbar-brand">Tiendas</Link>
            <button className="navbar-toggler" type="button" onClick={change} >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className={collapse}>
               <ul className="navbar-nav   mb-lg-0">
                  <li className="nav-item">
                     <Link to={`${match.url}`} className="nav-link">Inicio</Link>
                  </li>
                  <li className="nav-item">
                     <Link to={`${match.url}products`} className="nav-link">Productos</Link>
                  </li>
                  <li className="nav-item">
                     <Link to={`${match.url}about`} className="nav-link">Nosotros</Link>
                  </li>
                  <li className="nav-item">
                     <Link to={`${match.url}contact`} className="nav-link">Contáctanos</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}
