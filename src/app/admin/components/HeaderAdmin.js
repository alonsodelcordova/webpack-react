import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function HeaderAdmin() {
   const [collapse, setCollapse] = useState("navbar-collapse collapse");
   const change = () => {
      setCollapse(collapse.includes(" collapse") ? 'navbar-collapse' : 'navbar-collapse collapse');
   }

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
         <div className="container-fluid">
            <Link to="/" className="navbar-brand">Tiendas</Link>
            <button className="navbar-toggler" type="button" onClick={change} >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className={collapse} >
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                     </a>
                     <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                     </ul>
                  </li>
               </ul>
               <ul className="navbar-nav d-flex">
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User
                     </a>
                     <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Perfil</a></li>
                        <li><a className="dropdown-item" href="#">Configuración</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/">Cerrar Sessión</a></li>
                     </ul>
                  </li>
               </ul>

            </div>
         </div>
      </nav>
   )
}
