import React from 'react'

export default function Contact() {
   return (
      <div className="container mt-2">
         <h3>Contact</h3>
         <form>
            <div className="row">
               <div className="col-md-6 my-2">
                  <label >Nombres</label>
                  <input type="text" className="form-control" />
               </div>
               <div className="col-md-6 my-2">
                  <label >Apellidos</label>
                  <input type="text" className="form-control"  />
               </div>
               <div className="col-md-12 my-2">
                  <label >Dirección</label>
                  <input type="text" className="form-control" />
               </div>
               <div className="col-md-12 my-2">
                  <label >Email</label>
                  <input type="text" className="form-control" />
               </div>
            </div>
            <div className="my-2 text-center">
               <button className="btn btn-outline-success btn-lg">Enviar</button>
            </div>
         </form>
      </div>
   )
}
