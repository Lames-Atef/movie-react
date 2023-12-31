import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Noxie</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='movie'>Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='detailes'>Detailes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='TvShowes'>TvShowes</Link>
        </li>
      </ul>
    </div>
    <div>  
    </div>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <div className="social d-flex align-items-center bg-danger">
      <i className="fab fa-facebook mx-2 "></i>
      <i className="fab fa-instagram mx-2"></i>
      <i className="fab fa-spotify mx-2"></i>
      <i className="fab fa-youtube mx-2"></i>
    </div>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='register'>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='logout'>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
