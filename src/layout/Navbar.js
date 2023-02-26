import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
    <div className='container-fluid'>
  <Link className="navbar-brand"  to={"/"}>
    CricketData
   </Link>
     <button 
      className="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
       aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className='btn btn-outline-light' to="/addplayers">Add Players</Link>
      </div>
         </nav>
    </div>
  )
}
