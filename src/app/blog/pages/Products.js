import React from 'react'
import Product from '../components/Product'

export default function Products() {
   return (
      <div className="container mt-2">
         <h5>Products</h5>
         <div className="product">
            <div className="row">
               <div className="col-lg-6 my-2">
                  <Product />
               </div>
               <div className="col-lg-6 my-2">
                  <Product />
               </div>
               <div className="col-lg-6 my-2">
                  <Product />
               </div>
               <div className="col-lg-6 my-2">
                  <Product />
               </div>
               <div className="col-lg-6 my-2">
                  <Product />
               </div>
            </div>

         </div>
      </div>
   )
}
