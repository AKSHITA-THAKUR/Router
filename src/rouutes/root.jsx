import React from 'react'
import {Link} from "react-router-dom"
import "./root.css"
function Root() {
  return (
<div>
 <h1 style={{backgroundColor: "pink", textAlign:"center"}}> <u>This is the  Home page</u></h1>

    <div >
    <nav className="navbar">
    <ul>
      <li>
        <Link to="/contact/greet">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/feedback">Feedback</Link>
      </li>
    </ul>
  </nav>

    </div>
    </div>
  )
}

export default Root
