import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({products}) => {
  return (
    <div>
      {products.map((val,index)=>{
        return <div key={index}>
            <Link to={`/product/${index+1}`}>{val.name}</Link>
            </div>
      })}
    </div>
  )
}

export default Product
