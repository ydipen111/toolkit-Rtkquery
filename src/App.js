import { Button } from '@material-tailwind/react'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Rootlayout from './Rootlayout'
import Home from './Pages/Home'
import Recepie from './Pages/Recepie.jsx'
import Screen from './Pages/Screen.jsx'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Rootlayout />,
    children: [{
      index: true,
      element: < Screen />
    },
    {
      path: 'recepie',
      element: <Recepie />
    },
    {
      path: 'home',
      element: <Home />
    }
    ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App
