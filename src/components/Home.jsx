import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {


  return (<div className='h-[80%]'>
    
    <div className='h-[70%] flex flex-col justify-center mt-8'>

      <div>my Home Page </div>
      <div className='text-blue-400'>
        <Link to='/product'>Products Avaliable</Link>
      </div>
    </div>
  </div>
  )
}

export default Home
