import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Spot from './pages/Spot'
import About from './pages/About'
import Admin from './pages/Admin'
import Error404 from './pages/Error404'
import Login from './pages/Login'
import { Spots } from './pages/Spots'
import { SpotsProvider } from './context/AllSpotsContext'

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error404 />},
  { path: "/spot/:spotId", element: <Spot />},
  { path: "/About", element: <About />},
  { path: "/Admin", element: <Admin />},
  { path: "/Login", element: <Login />},
  { path: "/Spots/:query", element: <Spots />},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpotsProvider>
      <RouterProvider router={router} />
    </SpotsProvider>
  </React.StrictMode>
)
