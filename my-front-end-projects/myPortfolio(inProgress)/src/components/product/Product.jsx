import React from 'react'
import "./product.css"
import Mypj from "../../img/mypj.png"

const Product = () => {
  return (
    <div className='p'>
       <div className='p-card'>
        <div className='p-card-circle'>
            <div className='p-circle'>
                
            </div>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
        </div>
        <img src={Mypj} className="p-image"></img>
      </div> 
      
    </div>
  )
}

export default Product
