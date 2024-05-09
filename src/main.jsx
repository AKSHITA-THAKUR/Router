import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./rouutes/root"
import Contact from "./rouutes/Contact"
import Feedback from "./rouutes/Feedback"
import About from './rouutes/About'
import Poster from "./rouutes/Poster"
import Errorpage from './rouutes/error-page'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Errorpage/>,
  },
  {
    path : "/contact",
    element : <Contact/>,
    children : [
      {
       path : "greet" , 
       element : <Poster/>
      }
    ]
  }, 
  {
    path: "/about" , 
    element : <About/>
  } , 
  {
    path : "/feedback" , 
    element : <Feedback/>,
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
