import React from 'react'
import Product from '../product/Product'
import "./productList.css"


const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-text'>
        <h1>My Projects</h1>
        <p className='pl-des'>Honestly, ever since the e-commerce app, i feel 110% comfortable working on react, redux and all.. it got me thinking to start building mobiles too with react-native... i really would love to see you build react native apps too...don't know why it feels so good waiting and learning with you..

        </p>
        </div>
      <div className='pl-list'>
        <div className='item'>
        <Product/>
        <Product/>
        <Product/>
        </div>
        <div className='item'>
        <Product/>
        <Product/>
        <Product/>
        </div>
        
        
      </div>
    </div>
  )
}

export default ProductList
