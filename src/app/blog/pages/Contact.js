import React from 'react'

export default function Contact() {
   return (
      <div className="container mt-2">
         <h3>Contact</h3>
         <form>
            <div className="row">
               <div className="col-md-6 my-2">
                  <label for="nombre">Nombres</label>
                  <input type="text" className="form-control" id="nombre" />
               </div>
               <div className="col-md-6 my-2">
                  <label for="apellido">Apellidos</label>
                  <input type="text" className="form-control" id="apellido" />
               </div>
               <div className="col-md-12 my-2">
                  <label for="direccion">Dirección</label>
                  <input type="text" className="form-control" id="direccion" />
               </div>
               <div className="col-md-12 my-2">
                  <label for="nombre">Email</label>
                  <input type="text" className="form-control" id="nombre" />
               </div>
            </div>
            <div className="my-2 text-center">
               <button className="btn btn-outline-success btn-lg">Enviar</button>
            </div>
         </form>
      </div>
   )
}
