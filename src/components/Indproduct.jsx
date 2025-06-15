import React, { useState } from 'react'
import {useParams } from 'react-router-dom'

const Indproduct = ({products}) => {

    const {id}=useParams();
    console.log(id);
    const filterArray=products.filter((x)=>x.id===Number(id));
    console.log(filterArray)

  return (
    <div className='flex flex-col gap-6'>
      {filterArray[0]?.products.map((x,ind)=>{
        return <div className='bg-green-300'>{x.name},{x.price}</div>
      })}
      
    </div>

  )
}

export default Indproduct
