import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './src/Components/Home/Home.jsx'
import Layout from './src/Layout.jsx'
import About from './src/Components/About/About.jsx'
import Services from './src/Components/Services/Services.jsx'
import Contact from './src/Components/Contact/Contact.jsx'
import Connect from './src/Components/Connect/Connect.jsx'
import {AuthProvider} from './src/AuthContext.jsx'
import PrivateRoute from './src/privateRoute.jsx'
import Dashboard from './src/Components/Dashboard/dashboard.jsx'
import Login from './src/Components/Auth/login.jsx'
import Terms from './src/Components/Terms/Terms.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children :[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'services',
        element: <Services/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'terms',
        element:<Terms/>
      },
      {

        path:'connect',
        element:<Connect/>
      }
    ]

  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />, // Protected Route
    children: [{ path: "", element: <Dashboard /> }],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <RouterProvider router={router}/>
     </AuthProvider>
  </React.StrictMode>,
)
