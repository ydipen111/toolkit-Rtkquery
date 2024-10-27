import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

function Rootlayout() {
  return (
    <div className='w-full'>

      <Header />
      <Outlet />

    </div>
  )
}

export default Rootlayout
