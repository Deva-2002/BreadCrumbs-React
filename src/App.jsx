import React, { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Indproduct from './components/Indproduct';
import BreadCrumbs from './components/BreadCrumbs';

const App = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Alice",
      products: [
        { name: "Laptop", price: 900 },
        { name: "Mouse", price: 25 }
      ]
    },
    {
      id: 2,
      name: "Bob",
      products: [
        { name: "Smartphone", price: 700 },
        { name: "Charger", price: 30 }
      ]
    },
    {
      id: 3,
      name: "Charlie",
      products: [
        { name: "Desk", price: 150 },
        { name: "Chair", price: 80 },
        { name: "Lamp", price: 40 }
      ]
    },
    {
      id: 4,
      name: "Diana",
      products: [
        { name: "Headphones", price: 120 }
      ]
    }
  ]);


  return (<div className='h-screen w-screen flex justify-between'>
    <BreadCrumbs />
    <div className='h-[80%] w-screen flex justify-center items-center'>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/product' element={<Product products={products} />}></Route>
        <Route path='/product/:id' element={<Indproduct products={products} />}></Route>
      </Routes>
      {pathname === '/' ? <button onClick={() => {
        navigate('/home')
      }} className='bg-slate-500 text-white font-bold text-lg rounded-xl p-3'>Continue</button> : ""}
    </div>
  </div>
  )
}

export default App
